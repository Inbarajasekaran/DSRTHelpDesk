import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {

  isVisible = false;
  fileInformation;
  issueName;
  issueStatus;

  constructor(private apiService: ApiServiceService, private modalService: NzModalService) { }

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
  getIssueDetails(i) {
    this.isVisible = true;
    this.issueName = this.apiService.issues[i]['issue'];
    console.log(this.issueName)
    this.issueStatus = this.apiService.issues[i]['status'];
    this.fileInformation = this.apiService.issues[i]['fileInfo'];
    console.log(this.fileInformation)
    // alert ("Your Issue is: " + data.issue + " " + "and status is: " + data.status)
  }

  // showModal(): void {
  //   this.isVisible = true;
  // }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showConfirm(): void {
    this.modalService.confirm({

    });
  }

}
