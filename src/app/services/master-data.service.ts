import { Injectable } from '@angular/core';

import { EffectTypes } from '../data/effect_types';
import { Parts } from '../data/parts';
import { SeriesList } from '../data/series';
import { EffectType } from '../models/effect_type';
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
      if (!levels.includes(series.level)){
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

// パーツ（部位）が指定されたらその部位の部位マスターを持ってくる
// 空っぽのEffectType形式のeffectTypesというフィールドを作る
// パーツ（部位）マスターからもってきたeffectTypeIdに
// for　配列の各要素を格納する新しい変数　of 配列
// 配列から一個ずつ持ってくるなくなるまでまわる（部品マスタのeffectTypeIdという一つのフィールドをもっている）
// 錬金効果マスター（effect_types）のデータを１件ずつ持ってきてeffectTypeというEffectType形式のワークフィールド（レコード？）にいれる（for）
// 錬金効果マスター（effect_types）のデータのレコード単位からIDを拾ったのと　パーツ（部品）マスタのeffectTypeIdというフィールドを入れたワークの比較
getEffectTypesForPart(part: Part|null): EffectType[] {
  if (part === null){
    return [];
  }
  const effectTypes: EffectType[] = [];
  for (const effectTypeId of part.effectTypeId){
    for (const effectType of EffectTypes){
      if (effectType.id === effectTypeId){
       effectTypes.push(effectType);
      }
    }
  }
  return effectTypes;
}


}

