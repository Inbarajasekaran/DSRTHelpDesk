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
  show = false;
  fileInformation;
  issueName;
  issueStatus;
  dataForModal;
  listOfIssueStatus = [];

  constructor(private apiService: ApiServiceService, private modalService: NzModalService) { }

  dataSet = [];

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

  getIssueDetails(data) {
    this.isVisible = true;
    this.dataForModal = data;
  }

  editIssue() {
    this.show = true;
  }

  handleOk(dataForModal): void {
    for (let i = 0; i < this.apiService.issues.length; i++) {
      if (dataForModal['issueid'] == this.apiService.issues[i]['issueid']) {
        this.apiService.issues[i]['issue'] = this.issueName;
      }
    }

    for (let i = 0; i < this.apiService.ISSUE_STATUS.length; i++) {
      if (this.apiService.ISSUE_STATUS[i]['STATUS'] == this.dataForModal['status'])
        // this.issueStatus = this.listOfIssueStatus[i]['STATUS']
        this.apiService.ISSUE_STATUS[i]['STATUS'] = this.issueStatus
    }
    console.log(this.issueStatus);
    // this.issueName = "" /* CLEARING THE VALUE WHILE THIS FUNCTION CALL */
    this.show = false;
    this.isVisible = false;
    //console.log(this.apiService.ISSUE_STATUS[3]['STATUS'])
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
