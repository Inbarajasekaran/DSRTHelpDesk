import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-query-raising',
  templateUrl: './query-raising.component.html',
  styleUrls: ['./query-raising.component.css']
})
export class QueryRaisingComponent implements OnInit {
  isVisible = false;
  validateForm: FormGroup;
  selectedTitle;
  selectedSubTitle;
  buttonLoading = false;
  dataSetSubTitle = [];
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
 
  constructor(private fb: FormBuilder) { }

  submitForm() {
    
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      masterOptions: [''],
      masterSubTitle: ['']
    });
  }

  getSubTitle(){
    this.dataSetSubTitle = []
    this.validateForm.controls.masterSubTitle.setValue(null);
    for (const data of this.dataSet) {
      if (data['masterId'] == this.selectedTitle) {
        this.dataSetSubTitle = data['subTitles']
      }
    }
    
  }

  loadOnClick(){
    this.buttonLoading = true;
    setTimeout(() => {
      this.buttonLoading = false;
    }, 1500);
  }

}

