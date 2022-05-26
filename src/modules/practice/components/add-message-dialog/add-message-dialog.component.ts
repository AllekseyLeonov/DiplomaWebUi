import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {AddMessageFromPracticeRequest} from "../../../../models/Dialog";
import {addMessage} from "../../store/actions";

@Component({
  selector: 'app-add-message-dialog',
  templateUrl: './add-message-dialog.component.html',
  styleUrls: ['./add-message-dialog.component.css']
})
export class AddMessageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddMessageDialogComponent>,
    private store$: Store,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  @Output() onSendMessage = new EventEmitter<string>();

  message: string = '';

  ngOnInit(): void {
  }

  handleSendButtonClick(): void{
    if (this.message.length>0){
      const request: AddMessageFromPracticeRequest = {
        messageText: this.message, moderatorId: this.data.moderatorId, userId: this.data.userId
      }
      this.store$.dispatch(addMessage({message: request}));
    }
    this.dialogRef.close();
  }

}
