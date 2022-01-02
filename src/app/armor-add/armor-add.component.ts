import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armor-add',
  templateUrl: './armor-add.component.html',
  styleUrls: ['./armor-add.component.scss']
})
export class ArmorAddComponent implements OnInit {

  keyTime: string|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  isCompleted(): boolean {
    return false;
  }


  onClickComplete(): void {
    if (this.keyTime == null) {
      const keyTime =  new Date().getTime().toString();
    }
    }


}
