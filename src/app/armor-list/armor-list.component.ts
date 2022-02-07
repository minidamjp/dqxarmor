import { of } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Armor } from '../models/armor';
import { EffectType } from '../models/effect_type';
import { Job } from '../models/job';
import { Series } from '../models/series';
import { ArmorDataService } from '../services/armor-data.service';
import { MasterDataService } from '../services/master-data.service';

interface MatchArmor extends Armor {
  matched?: boolean;
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  showConds = false;
  searchJob: Job[] = [];
  searchEffect: EffectType[] = [];
  cnt = 0;


  ngOnInit(): void {
  }

  getArmorList(): MatchArmor[]{
    const mArmor: MatchArmor[] = this.armorDataService.getArmorList();
    if (!this.searchJob.length && !this.searchEffect.length){
      return mArmor;
    }else{
      const displayArmorList: MatchArmor[] = [];
      for (const searchArmor of mArmor){
        searchArmor.matched = false;
        if (this.searchJob.length){
          const series: Series = this.masterDataService.getSeriesById(searchArmor.armorTypeId.substring(6, 9));
          for (const sjob of this.searchJob){
            if (series.job.includes(sjob.id)){
              if (!this.searchEffect.length){
                searchArmor.matched = true;
                displayArmorList.push(searchArmor);
                break;
              }else{
                this.cnt = 0;
                for (const sEffect of this.searchEffect){
                  searchArmor.matched = false;
                  for (const searchArmorEffect of searchArmor.effectList){
                    if (sEffect.id === searchArmorEffect.effectTypeId){
                      searchArmor.matched = true;
                      this.cnt++;
                    }
                  }
                }
                if (this.cnt > 0){
                displayArmorList.push(searchArmor);
                }
              }
            }
          }
        }else{
          this.cnt = 0;
          for (const sEffect of this.searchEffect){
            searchArmor.matched = false;
            for (const searchArmorEffect of searchArmor.effectList){
              if (sEffect.id === searchArmorEffect.effectTypeId){
                searchArmor.matched = true;
                this.cnt++;
              }
            }
          }
          if (this.cnt > 0){
            displayArmorList.push(searchArmor);
          }
        }
      }
      return displayArmorList;
    }
  }

  fixUpUndefined(x: any|undefined, v: any): any {
    if (x === undefined) {
      return v;
    }
    return x;
  }

  getArmorCount(): number {
    return this.getArmorList().length;
  }

  onClickUpdate(keyTime: string): void {
    this.router.navigate(['a', keyTime]);
  }

  onClickDelete(keyTime: string): void {
    this.armorDataService.deleteArmor(keyTime);
  }

  toggleConds(): void {
    this.showConds = !this.showConds;
  }

  onClickJobSearch(id: string): string{
    for (const [idx, job] of this.searchJob.entries()){
      if (job.id === id){
        this.searchJob.splice(idx, 1);
        return job.abbr;
      }
    }
    for (const jobList of this.masterDataService.getJobs()){
      if (jobList.id === id){
        this.searchJob.push(jobList);
        this.searchJob.sort();
        return jobList.abbr;
      }
    }
    return '';
  }

  isJobActive(id: string): boolean {
    for (const job of this.searchJob){
      if (job.id === id){
        return true;
      }
    }
    return false;
  }

  onClickEffectSearch(id: string): string{
    for (const [idx, effect] of this.searchEffect.entries()){
      if (effect.id === id){
        this.searchEffect.splice(idx, 1);
        return effect.displayName;
      }
    }
    const effectType = this.masterDataService.getEffectType(id);
    this.searchEffect.push(effectType);
    this.searchEffect.sort();
    return effectType.displayName;
    }

  isEffectActive(id: string): boolean{
    for (const effect of this.searchEffect){
      if (effect.id === id){
        return true;
      }
    }
    return false;
  }

}
