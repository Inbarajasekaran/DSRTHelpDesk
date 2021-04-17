import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-query-raising',
  templateUrl: './query-raising.component.html',
  styleUrls: ['./query-raising.component.css']
})
export class QueryRaisingComponent implements OnInit {
  validateForm: FormGroup;
  modalForm: FormGroup;
  selectedTitle;
  selectedSubTitle;
  dataSetSubTitle = [];
  modalVisible = false
  dataSet = [
    {
      masterTitle: "ERP Related Query",
      masterId: 1,
      subTitles: []
    },
    {
      masterTitle: "Mail ID",
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
      masterId: 3,
      subTitles: []
    }
  ];

  constructor(private fb: FormBuilder, private modalFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      masterOptions: ['', Validators.required],
      masterSubTitle: ['', Validators.required],
    });
    this.modalForm = this.modalFormBuilder.group({
      issueModal: ['', Validators.required]
    })
  }

  getSubTitle() {
    this.dataSetSubTitle = []
    this.validateForm.controls.masterSubTitle.setValue(null);
    for (const data of this.dataSet) {
      if (data['masterId'] == this.selectedTitle) {
        this.dataSetSubTitle = data['subTitles']
      }
    }
  }

  raiseIssue() {
    this.modalVisible = true;
  }

  handleOk() {
    if (this.modalForm.valid) {
      this.modalVisible = false;
    }
    this.validateForm.controls.masterOptions.setValue(null)
    this.validateForm.controls.masterSubTitle.setValue(null)
    this.modalForm.controls.issueModal.setValue(null)
  }

  handleCancel() {
    this.modalVisible = false;
  }

  submitModal() {
    console.log("SUBMIT");
  }


}

