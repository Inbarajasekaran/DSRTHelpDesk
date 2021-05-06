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
      issueid: 1,
      issue: "ISSUE NAME 1",
      status: undefined,
      fileInfo: ["E:\test file for upload file in DSRT HELP DESK test file for upload file in DSRT HELP DESK test file for upload file in DSRT HELP DESK test file for upload file in DSRT HELP DESK test file for upload file in DSRT HELP DESK test file for u"]
    },
    {
      userid: undefined,
      issueid: 2,
      issue: "ISSUE NAME 2",
      status: undefined,
      fileInfo: ["E:\test file for upload file in DSRT HELP DESK test file for upload file in DSRT HELP DESK test file for upload file in DSRT HELP DESK test file for upload file in DSRT HELP DESK test file for upload file in DSRT HELP DESK test file for u"]
    },
  ]

}
