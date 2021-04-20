import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  ISSUE_STATUS = [
    {STATUS_ID: 1, STATUS: 'Pending'},
    {STATUS_ID: 2, STATUS: 'Processing'},
    {STATUS_ID: 3, STATUS: 'Completed'}
  ];

  constructor() {  }

  issues = []

}