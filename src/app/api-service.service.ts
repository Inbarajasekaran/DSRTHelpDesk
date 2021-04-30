import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  ISSUE_STATUS = [
    { STATUS_ID: 1, STATUS: 'Pending / Open' },
    { STATUS_ID: 2, STATUS: 'Assigned' },
    { STATUS_ID: 3, STATUS: 'In Process' },
    { STATUS_ID: 4, STATUS: 'Closed' },
    { STATUS_ID: 5, STATUS: 'Unresolved' }
  ];

  constructor() { }

  issues = [
    {
      userid: undefined,
      issue: "ISSUE NAME 1",
      status: this.ISSUE_STATUS[0].STATUS,
      fileInfo: []
    },
  ]

}
