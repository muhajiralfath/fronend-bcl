import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {BillService} from "../../share/service/bill/bill.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BillResponse} from "../../share/model/response/bill.response.model";
import {CommonResponse} from "../../share/model/response/common-response.model";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  displayedColumns: string[] = ['no', 'umkmName', 'debtorName', 'debt', 'interest', 'dueDate', 'isPaid'];
  dataSource!: MatTableDataSource<any>
  length: number = 0
  pageSize: number = 25
  pageIndex: number = 0
  pageSizeOptions: number[] = [25, 50, 100]
  number: number = 0

  hidePageSize: boolean = false
  showPageSizeOptions: boolean = true
  showFirstLastButtons: boolean = true
  disabled: boolean = false

  constructor(private readonly service: BillService) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  ngOnInit(): void {
    this.getAll()
  }

  applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  getAll(): void {
    this.service.getAll("0", "1000000").subscribe({
      next: (res: CommonResponse<BillResponse[]>): void => {
        this.dataSource = new MatTableDataSource(res.data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error: console.log
    })
  }

  handlePageEvent(e: PageEvent): void {
    this.length = e.length
    this.number = e.pageIndex * e.pageSize
    this.getAll()
  }
}
