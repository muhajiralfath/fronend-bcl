import {Component} from '@angular/core';
import {SubmissionService} from "../../share/service/submission/submission.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent {
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;
  constructor(
    private readonly service: SubmissionService
  ) {}

  ngOnInit(): void{
    this.service.getAll().subscribe((res) => {
      // this.dataSource = new MatTableDataSource(res);
      console.log("res:" + JSON.stringify(res));
    })
  }
}
