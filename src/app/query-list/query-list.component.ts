import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {

  isVisible = false;
  show = false;
  fileInformation;
  issueName;
  issueStatus;
  listOfIssueStatus = [];

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
    for (let i = 0; i < this.apiService.ISSUE_STATUS.length; i++) {
      this.listOfIssueStatus.push(this.apiService.ISSUE_STATUS[i])
    }
    console.log(this.listOfIssueStatus)
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
    console.log(this.issueStatus)
    this.fileInformation = this.apiService.issues[i]['fileInfo'];
    console.log(this.fileInformation)
    // alert ("Your Issue is: " + data.issue + " " + "and status is: " + data.status)
  }

  // showModal(): void {
  //   this.isVisible = true;
  // }

  editIssue() {
    this.show = true;
  }

  handleOk(i): void {
    // forOf (let i = 0; i < this.apiService.issues.length; i++) {
      this.apiService.issues[i]['issue'] = this.issueName;
    // }
    this.isVisible = false;
  }

  handleCancel(): void {
    this.show = false;
    this.isVisible = false;
  }

  showConfirm(): void {
    this.modalService.confirm({

    });
  }

}
