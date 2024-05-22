import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.scss']
})
export class SearchRoomComponent implements OnInit {

  roomForm!: FormGroup;
  public roomList: FormArray;
  @Output() roomEmitter = new EventEmitter();
  @Input() rooms: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.roomEmitter.emit(this.roomForm.value);
    if(this.rooms) {
      console.log(this.rooms);
      this.setForm(this.rooms);
    }
  }

  initForm() {
    this.roomForm = this.formBuilder.group({
      rooms: new FormArray([this.createItem()])
    });
    this.roomList = this.roomForm.get('rooms') as FormArray;
  }

  setForm(rooms: any) {
    this.roomList.clear();
    rooms.rooms.forEach(room => {
      this.roomList.push(this.createItem(room))
    });
  }

  get roomFormGroup() {
    return this.roomForm.get('rooms') as FormArray;
  }

  createItem(room?: any): FormGroup {
    return this.formBuilder.group({
      adulte: [room?.adulte ?? 2],
      enfant: [room?.enfant ??0],
      bebe: [room?.bebe ??0]
    })
  }

  addRoom() {
    this.roomList.push(this.createItem());
  }

  removeRoom(index) {
    this.roomList.removeAt(index);
  }

  onSubmit() {
    console.log(this.roomForm.value);
    if (this.roomForm.invalid) {
      return;
    }

    this.roomEmitter.emit(this.roomForm.value);

  }
}
