import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BillService} from "../../share/service/bill/bill.service";
import {DebtorService} from "../../share/service/debtor/debtor.service";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  token:string|null = sessionStorage.getItem("token");

  displayedColumns: string[] = ["no", "debt", "isPaid", "dueDate", "action"];
  dataSource!: MatTableDataSource<any>;
  currentPage = 0
  pageSize = 10
  totalPages = 0

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private service: BillService,
    private debtorService:DebtorService,
    private router: Router
  ) {
  }

  ngOnInit(){
    this.debtorService.getByToken().subscribe({
      next: (debtorResponse:CommonResponse<DebtorResponse>) => {
        let data: DebtorResponse = debtorResponse.data;
        this.getByDebtorId(data.debtorId);
        // this.getAll();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAll():void {
    this.service.getAll().subscribe({
      next: res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res.data)
        // this.currentPage = res.paging.page
        // this.pageSize = res.paging.size
        // this.totalPages = res.paging.totalPages
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error: console.log
    })
  }
  getByDebtorId(debtorId:string):void {
    this.service.getByDebtorId(debtorId).subscribe({
      next: res => {
        this.dataSource = new MatTableDataSource(res.data)
        // this.currentPage = res.paging.page
        // this.pageSize = res.paging.size
        // this.totalPages = res.paging.totalPages
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        // console.log(res)
      }
      // ,error: console.log
    })
  }

  paginatorPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAll();
  }

  onPay(id: string) {
    this.router.navigateByUrl(`/debtor/payment/${id}`);
    // console.log(id)
  }
}
