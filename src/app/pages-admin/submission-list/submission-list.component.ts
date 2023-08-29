import {Component, ViewChild} from '@angular/core';
import {SubmissionService} from "../../share/service/submission/submission.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CommonResponse} from "../../share/model/response/common-response.model";
import {SubmissionResponseModel} from "../../share/model/response/submission-response.model";

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent {
  displayedColumns: string[] = [
    'no', 'umkmName', 'date', 'loanAmount', 'tenor', 'debt', 'monthlyDebt', 'status'
  ];
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

  constructor(
    private readonly service: SubmissionService
  ) {
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
    this.service.getAll(undefined, undefined, "0", "1000000").subscribe({
      next: (res: CommonResponse<SubmissionResponseModel[]>): void => {
        this.dataSource = new MatTableDataSource(res.data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error: console.log
    })
  }

  acceptButtonClicked(row: any): void {
    this.service.accept(row.id).subscribe({
      next: (): void => {
        row.status = 'Accepted'
      },
      error: console.log
    })
  }

  rejectButtonClicked(row: any): void {
    this.service.reject(row.id).subscribe({
      next: (): void => {
        row.status = 'Rejected'
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
