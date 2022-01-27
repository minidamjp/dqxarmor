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

  showConds = false;
  serchJob: string[] = [];
  serchEffect: string[] = [];

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

  toggleConds(): void {
    this.showConds = !this.showConds;
  }

  onClickJobSearch(id: string): void{
    for (const [idx, jobId] of this.serchJob.entries()){
      if (jobId === id){
        this.serchJob.splice(idx, 1);
        return;
      }
    }
    this.serchJob.push(id);
    this.serchJob.sort();
  }

  isJobActive(id: string): boolean {
    return (this.serchJob.includes(id));
  }

  onClickEffectSearch(id: string): void{
    for (const [idx, effectId] of this.serchEffect.entries()){
      if (effectId === id){
        this.serchEffect.splice(idx, 1);
        return;
      }
    }
    this.serchEffect.push(id);
    this.serchEffect.sort();
  }

  isEffectActive(id: string): boolean {
    return (this.serchEffect.includes(id));
  }

}
