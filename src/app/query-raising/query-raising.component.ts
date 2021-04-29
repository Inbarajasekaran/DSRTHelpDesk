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
  validateForm!: FormGroup;
  modalForm!: FormGroup;
  // selectedTitle;
  // selectedSubTitle;
  // variable;
  dataSetSubTitle = [];
  dataSetMasterTitle = [];
  modalVisible = false
  issue: string;
  // selectFileName: string[] = [];
  // selectFileSize: string[] = [];
  fileInfo: any[] = [];
  image = [];
  spinOnClick


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
      ticketType: [null, [Validators.required]],
      masterTitle: [null, [Validators.required]],
      masterSubTitle: [null, [Validators.required]],
    });
    this.modalForm = this.modalFormBuilder.group({
      issueComment: [null, [Validators.required]],
      attachImage: [null],
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
    console.log("Ticket value is: " + this.validateForm.controls.ticketType.value,
      "Master title is: " + this.validateForm.controls.masterTitle.value,
      "SubTitle is : " + this.validateForm.controls.masterSubTitle.value);
    this.modalVisible = true;
  }

  handleOk() {    
    this.spinOnClick = true;
    setTimeout(() => {
      if (this.modalVisible == true &&  this.modalForm.invalid) {
        this.message.info("Oops..We can't get your query!");
      }
      this.spinOnClick = false;
    }, 2000);

    for (const mainForm in this.validateForm.controls) {
      this.validateForm.controls[mainForm].markAsDirty();
      this.validateForm.controls[mainForm].updateValueAndValidity();
    }

    for (const modal in this.modalForm.controls){
      this.modalForm.controls[modal].markAsDirty();
      this.modalForm.controls[modal].updateValueAndValidity();
    }

    this.issue = this.modalForm.controls.issueComment.value;
    this.image = this.modalForm.controls.attachImage.value;

    if (this.modalForm.valid) {
      this.message.info("Noted..We are tracking your issue..!")
      this.apiService.issues.push(
        {
          userid: 1,
          issue: this.issue,
          status: this.apiService.ISSUE_STATUS[0]['STATUS'],
          fileInfo: this.fileInfo,
        }
      );
      this.modalVisible = false;
      this.modalForm.reset();
    }

    // console.log(this.image)

    console.log(this.apiService.issues);
    // console.log(this.modalForm.controls.issueComment.value);
    //console.log(this.apiService.issues)
    this.validateForm.reset();
  }

  handleCancel() {
    this.modalForm.reset();
    this.modalVisible = false;
  }

  // submitModal() {
  //   console.log("SUBMIT");
  // }

  getFileDetails(e) {
    let toConcatFileInfo = this.fileInfo; /*pushing value to array is not working so new variable added and assigned where the data to be add*/
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      let fileName =  e.target.files[i].name
      let fileSize = (e.target.files[i].size / 1024).toFixed(2)
      if (parseInt(fileSize) < 512){
      toConcatFileInfo.push(
        {
          fileName, fileSize 
          //fileName: e.target.files[i].name,
          //fileSize: (e.target.files[i].size / 1024).toFixed(2) + "kb"
        }
      );
      this.fileInfo = [...toConcatFileInfo]; /*concatenating the 2 array*/
    } else {
      alert("error")
    }
  }

    console.log(this.fileInfo);
  }

  onUpload() { }

  removeFile(selectedValue) {
    console.log(this.fileInfo[selectedValue]);
    var FileToRemove = this.fileInfo;
    FileToRemove.splice(selectedValue, 1);
    this.fileInfo = [...FileToRemove];
  }

}
