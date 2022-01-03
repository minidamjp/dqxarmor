import { Component, OnInit } from '@angular/core';

import { MasterDataService } from '../services/master-data.service';

@Component({
  selector: 'app-armor-add',
  templateUrl: './armor-add.component.html',
  styleUrls: ['./armor-add.component.scss']
})
export class ArmorAddComponent implements OnInit {

  keyTime: string|null = null;

  constructor(
    public masterDataService: MasterDataService,
  ) { }

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
