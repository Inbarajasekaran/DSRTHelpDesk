import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, ValidationErrors, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-query-raising',
  templateUrl: './query-raising.component.html',
  styleUrls: ['./query-raising.component.css']
})
export class QueryRaisingComponent implements OnInit {
  validateForm: FormGroup;
  modalForm: FormGroup;
  // selectedTitle;
  // selectedSubTitle;
  // variable;
  dataSetSubTitle = [];
  dataSetMasterTitle = [];
  modalVisible = false
  issue: string
  selectFile:string [] = [];
  image = [];   

  ticketType = [
    {
      ticketId: 1,
      type: "Request"
    },
    {
      ticketId: 2,
      type: "Incident"
    },
  ];

  dataSet = [
    {
      masterTitle: "ERP Related Query",
      type: 1,
      masterId: 1,
      subTitles: []
    },
    {
      masterTitle: "Mail ID",
      type: 1,
      masterId: 2,
      subTitles: [
        {
          id: 1,
          masterId: 2,
          subTitle: "Mail id Password Reset"
        },
        {
          id: 2,
          masterId: 2,
          subTitle: "Mail id creation"
        },
        {
          id: 3,
          masterId: 2,
          subTitle: "Delete Mail id"
        }
      ]
    },
    {
      masterTitle: "COE",
      type: 1,
      masterId: 3,
      subTitles: []
    },
    {
      masterTitle: "Exam Result issue",
      type: 2,
      masterId: 4,
      subTitles: [{
        id: 1,
        masterId: 4,
        subTitle: "Can't check result"
      },
      {
        id: 2,
        masterId: 4,
        subTitle: "Not showing my result"
      },
      ]
    },
    {
      masterTitle: "Mark Entry issue",
      type: 2,
      masterId: 5,
      subTitles: [

      ]
    }
  ];

  constructor(
    private fb: FormBuilder,
    private modalFormBuilder: FormBuilder,
    private message: NzMessageService,
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      masterTitle: [null, Validators.required],
      masterSubTitle: [null, Validators.required],
      ticketType: [null, Validators.required],
    });
    this.modalForm = this.modalFormBuilder.group({
      issueModal: ['', Validators.required],
      attachImage: ['']
    })
  }

  getMasterOption() {
    this.dataSetMasterTitle = []
    this.validateForm.controls.masterTitle.setValue(null);
    //console.log(this.validateForm.controls.ticketType.value);
    for (const variable of this.dataSet) {
      if (this.validateForm.controls.ticketType.value == variable['type']) {
        // console.log(variable);
        this.dataSetMasterTitle.push(variable)
      }
    }
    //console.log(this.dataSetMasterTitle);
  }

  getMasterSubTitle() {
    this.dataSetSubTitle = []
    this.validateForm.controls.masterSubTitle.setValue(null);
    for (const data of this.dataSet) {
      if (data['masterId'] == this.validateForm.controls.masterTitle.value) {
        this.dataSetSubTitle = data['subTitles']
      }
    }
    //console.log(this.dataSetSubTitle);
  }

  raiseIssue() {
    this.modalVisible = true;
  }

  handleOk() {
    if (this.modalForm.valid) {
      this.modalVisible = false;
    }
    this.issue = this.modalForm.controls.issueModal.value;
    this.image = this.modalForm.controls.attachImage.value;
    // console.log(this.image)
    this.apiService.issues.push({
      userid: 1,
      issue: this.issue,
      status: this.apiService.ISSUE_STATUS[0]['STATUS'],
      image: this.image,
    });
    console.log("Ticket value is: " + this.validateForm.controls.ticketType.value,
      "Master title is: " + this.validateForm.controls.masterTitle.value,
      "SubTitle is : " + this.validateForm.controls.masterSubTitle.value);
    console.log(this.modalForm.controls.issueModal.value);
    //console.log(this.apiService.issues)
    this.validateForm.reset();
    this.modalForm.reset();
    this.message.info('Noted..We are tracking your issue.!');
  }

  handleCancel() {
    this.modalForm.reset();
    this.modalVisible = false;
  }

  submitModal() {
    console.log("SUBMIT");
  }

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.selectFile.push(e.target.files[i]);
    }
    console.log(this.selectFile)
  }

  onUpload() {
  }
}
