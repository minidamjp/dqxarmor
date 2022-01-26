import { Component, OnInit } from '@angular/core';

import { Armor } from '../models/armor';
import { ArmorDataService } from '../services/armor-data.service';
import { MasterDataService } from '../services/master-data.service';

interface SearchCondition {
  cond: string;
  label: string;
}
class Matcher {
  private cond1: string;
  private cond2: string;
  constructor(conds: { [name: string]: SearchCondition}) {
    this.cond1 = conds.job?.cond;
    this.cond2 = conds.effect?.cond;
  }
}

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

  conds: { [name: string]: SearchCondition} = {};

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

  onClickSearch(series: string, label: string): void{
    return;
  }

  isCondActive(series: string, label: string): boolean {
    return (this.conds[series] != null && this.conds[series].label === label);
  }

}
