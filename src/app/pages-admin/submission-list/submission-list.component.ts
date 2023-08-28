import {Component} from '@angular/core';
import {SubmissionService} from "../../share/service/submission/submission.service";
import {MatTableDataSource} from "@angular/material/table";
import {SubmissionResponse} from "../../share/model/response/submission-response";

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
  submissions!: SubmissionResponse[];

  constructor(
    private readonly service: SubmissionService
  ) {}

  ngOnInit(): void{
    this.service.getAll().subscribe((res) => {
      this.submissions = res.data;
      this.dataSource = new MatTableDataSource(this.submissions);
    });
  }
}
