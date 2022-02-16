import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Armor } from '../models/armor';
import { Exportdata } from '../models/exportdata';
import { Series } from '../models/series';
import { ArmorDataService } from '../services/armor-data.service';
import { MasterDataService } from '../services/master-data.service';

interface MatchArmor extends Armor {
  matched?: boolean;
  partId?: string;
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
  searchJob: string[] = [];
  searchEffect: string[] = [];
  cnt = 0;
  isShowExport = false;
  exportUrl = '';
  decodedArmorData?: Exportdata;


  @ViewChild('exportUrlElement')
  exportUrlElement?: ElementRef;


  ngOnInit(): void {
    const b64data: string|null = this.activatedRoute.snapshot.params.armorList;
    if (b64data != null) {
      const b = this.armorDataService.import(b64data);
      if (b == null) {
        this.router.navigate(['/']);
      } else {
        this.decodedArmorData = b;
      }
    }
  }

  isImportMode(): boolean {
    return this.decodedArmorData != null;
  }

  getArmorList(): MatchArmor[]{
    const mArmor: MatchArmor[] = this.armorDataService.getArmorList();
    if (!this.searchJob.length && !this.searchEffect.length){
      const displayArmorList: MatchArmor[] = [];
      for (const searchArmor of mArmor){
        searchArmor.partId = searchArmor.armorTypeId.substring(4, 5);
        displayArmorList.push(searchArmor);
      }
      return displayArmorList;
    }else{
      const displayArmorList: MatchArmor[] = [];
      for (const searchArmor of mArmor){
        searchArmor.matched = false;
        if (this.searchJob.length){
          const series: Series = this.masterDataService.getSeriesById(searchArmor.armorTypeId.substring(6, 9));
          for (const sjob of this.searchJob){
            if (series.job.includes(sjob)){
              if (!this.searchEffect.length){
                searchArmor.matched = true;
                searchArmor.partId = searchArmor.armorTypeId.substring(4, 5);
                displayArmorList.push(searchArmor);
              }else{
                this.cnt = 0;
                for (const sEffect of this.searchEffect){
                  searchArmor.matched = false;
                  for (const searchArmorEffect of searchArmor.effectList){
                    if (sEffect === searchArmorEffect.effectTypeId){
                      searchArmor.matched = true;
                      this.cnt++;
                    }
                  }
                }
                if (this.cnt > 0){
                  searchArmor.partId = searchArmor.armorTypeId.substring(4, 5);
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
              if (sEffect === searchArmorEffect.effectTypeId){
                searchArmor.matched = true;
                this.cnt++;
              }
            }
          }
          if (this.cnt > 0){
            searchArmor.partId = searchArmor.armorTypeId.substring(4, 5);
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

  onClickJobSearch(id: string): void{
    for (const [idx, jobId] of this.searchJob.entries()){
      if (jobId === id){
        this.searchJob.splice(idx, 1);
        return;
      }
    }
    this.searchJob.push(id);
    this.searchJob.sort();
  }

  isJobActive(id: string): boolean {
    return (this.searchJob.includes(id));
  }

  onClickEffectSearch(id: string): void{
    for (const [idx, effectId] of this.searchEffect.entries()){
      if (effectId === id){
        this.searchEffect.splice(idx, 1);
        return;
      }
    }
    this.searchEffect.push(id);
    this.searchEffect.sort();
  }

  isEffectActive(id: string): boolean {
    return (this.searchEffect.includes(id));
  }

  onClickExport(e: Event): void{
    const armorList = this.armorDataService.getArmorList();
    const charName = '';
    const exportArmor = this.armorDataService.export(charName, armorList);
    const path = this.router.serializeUrl(this.router.createUrlTree(['i', exportArmor]));
    this.exportUrl = location.origin + path;
    this.isShowExport = true;
  }

  onClickCloseExport(): void{
    this.isShowExport = false;
  }

  copyToClickborad(): void{
    navigator.clipboard.writeText(this.exportUrl);
    if (this.exportUrlElement){
      this.exportUrlElement.nativeElement.select();
    }
  }

  onClickImportYes(): void{
    if (this.decodedArmorData) {
      this.armorDataService.overwriteArmorData(this.decodedArmorData.exportArmorList);
    }
    this.router.navigate(['']);
  }

  onClickImportNo(): void{
    this.router.navigate(['']);
  }


}
