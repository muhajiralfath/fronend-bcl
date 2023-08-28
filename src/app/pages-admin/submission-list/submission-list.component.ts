import {Component, ViewChild} from '@angular/core';
import {SubmissionService} from "../../share/service/submission/submission.service";
import {MatTableDataSource} from "@angular/material/table";
import {SubmissionResponse} from "../../share/model/response/submission-response";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent {
  displayedColumns: string[] = [
    'no', 'umkmName', 'date', 'loanAmount', 'tenor', 'debt', 'monthlyDebt', 'action'
  ];
  dataSource!: MatTableDataSource<any>;
  currentPage = 0
  pageSize = 10
  totalPages = 0

  constructor(
    private readonly service: SubmissionService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void{
    this.getAll()
  }

  getAll():void {
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
