import { Component, OnInit } from '@angular/core';

import { Armor } from '../models/armor';
import { ArmorDataService } from '../services/armor-data.service';
import { MasterDataService } from '../services/master-data.service';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit {

  constructor(
    public masterDataService: MasterDataService,
    public armorDataService: ArmorDataService,
  ) { }

  ngOnInit(): void {
  }

  getArmorList(): Armor[] {
    return this.armorDataService.getArmorList();
  }

  getArmorCount(): number {
    return this.getArmorList().length;
  }

  onClickDelete(keyTime: string): void {
    this.armorDataService.deleteArmor(keyTime);
  }

}
