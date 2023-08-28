import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SubmissionResponse} from "../../share/model/response/submission-response";
import {SubmissionService} from "../../share/service/submission/submission.service";
import {BillService} from "../../share/service/bill/bill.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DebtorResponse} from "../../share/model/response/debtor-response.model";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  displayedColumns: string[] = [
    'no', 'umkmName', 'debtorName', 'debt', 'interest', 'dueDate', 'isPaid'
  ];
  dataSource!: MatTableDataSource<any>;
  currentPage = 0
  pageSize = 10
  totalPages = 0


  constructor(
    private readonly service: BillService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void{
    this.getAll()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAll(): void {
    this.service.getAll().subscribe({
      next: res => {
        this.dataSource = new MatTableDataSource(res.data)
        this.currentPage = res.paging.page
        this.pageSize = res.paging.size
        this.totalPages = res.paging.totalPages
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        console.log(res)
      },
      error: console.log
    })
  }

  paginatorPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAll();
  }

}
