import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BillService} from "../../share/service/bill/bill.service";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {

  displayedColumns: string[] = ["no", "duedate", "debt", "status", "action"];
  dataSource!: MatTableDataSource<any>;
  currentPage = 0
  pageSize = 10
  totalPages = 0

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: BillService) {
  }

  ngOnInit(){
    this,this.getAll();
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
