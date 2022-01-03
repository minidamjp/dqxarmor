import { Injectable } from '@angular/core';

import { Parts } from '../data/parts';
import { SeriesList } from '../data/series';
import { Part } from '../models/part';
import { Series } from '../models/series';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor() { }

// シリーズのデータの中からレベルをもってきてダブり外して逆順にして返す
  getLevels(): number[] {
    const levels: number[] = [];
    for (const series of SeriesList){
      if(!levels.includes(series.level)){
        levels.push(series.level);
      }
    }
    levels.sort((a, b) => (b - a));
    return levels;
  }

// シリーズのデータの中からIDの逆順にしてデータを全部返す
  getSeriesList(): Series[] {
    const copy = [...SeriesList];
    copy.sort((a, b) => (b.id.localeCompare(a.id)));
    return copy;
  }

// パーツ（部位）のマスターデータを全部返す
  getParts(): Part[] {
   return Parts;
  }

}

