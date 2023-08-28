import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SubmissionResponse} from "../../share/model/response/submission-response";
import {SubmissionService} from "../../share/service/submission/submission.service";
import {BillService} from "../../share/service/bill/bill.service";

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
  submissions!: SubmissionResponse[];

  constructor(
    private readonly service: BillService
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void{
    this.service.getAll().subscribe((res) => {
      this.submissions = res.data;
      this.dataSource = new MatTableDataSource(this.submissions);
    });
  }
}
