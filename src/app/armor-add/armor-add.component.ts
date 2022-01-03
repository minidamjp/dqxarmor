import { Component, OnInit } from '@angular/core';

import { MasterDataService } from '../services/master-data.service';

@Component({
  selector: 'app-armor-add',
  templateUrl: './armor-add.component.html',
  styleUrls: ['./armor-add.component.scss']
})
export class ArmorAddComponent implements OnInit {

  keyTime: string|null = null;
  selectedLevel = 0;

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

  selectLevel(level: number): void {
    if (this.selectedLevel === level){
      this.selectedLevel = 0;
    }else{
      this.selectedLevel = level;
    }
  }

}
