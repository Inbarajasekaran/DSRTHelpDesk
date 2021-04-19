import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {

  constructor(private apiService: ApiServiceService) {

  }

  dataSet = [];

  // dataSet = [
  //   {
  //     issue: 32,
  //     status: this.status
  //   },
  //   {
  //     issue: 42,
  //     status: this.status
  //   },
  //   {
  //     issue: 32,
  //     status: this.status
  //   }
  // ];

  ngOnInit(): void {
    this.dataGet();
  }
  dataGet() {
    this.dataSet = this.apiService.issues;
    // console.log(this.dataSet)
  }


}
