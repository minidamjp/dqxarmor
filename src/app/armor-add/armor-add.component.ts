import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Armor } from '../models/armor';
import { Effect } from '../models/effect';
import { EffectType } from '../models/effect_type';
import { Enchant } from '../models/enchant';
import { Part } from '../models/part';
import { Series } from '../models/series';
import { ArmorDataService } from '../services/armor-data.service';
import { MasterDataService } from '../services/master-data.service';

@Component({
  selector: 'app-armor-add',
  templateUrl: './armor-add.component.html',
  styleUrls: ['./armor-add.component.scss']
})
export class ArmorAddComponent implements OnInit {

  keyTime = '';
  selectedLevel = 0;
  selectedSeries: Series|null = null;
  selectedPart: Part|null = null;
  slots: Effect[] = [
    {
      effectTypeId: null,
      enchantBase: null,
      enchantExtra: null,
    },
    {
      effectTypeId: null,
      enchantBase: null,
      enchantExtra: null,
    },
    {
      effectTypeId: null,
      enchantBase: null,
      enchantExtra: null,
    },
  ];
  currentSlot = 0;

  get slot(): Effect {
    return this.slots[this.currentSlot];
  }

  constructor(
    public masterDataService: MasterDataService,
    public armorDataService: ArmorDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id: string|null = this.activatedRoute.snapshot.params.id;
    if (id != null) {
      this.keyTime = id;
      const armor = this.armorDataService.getCopyOfArmor(this.keyTime);
      if (armor != null) {
        this.selectedLevel = parseInt(armor.armorTypeId.substring(0, 3), 10);
        this.selectedPart = this.masterDataService.getPartById(armor.armorTypeId.substring(4, 5));
        this.selectedSeries = this.masterDataService.getSeriesById(armor.armorTypeId.substring(6, 9));
        this.slots = armor.effectList;
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  isCompleted(): boolean {
    if (this.selectedSeries === null){
      return false;
    }
    if (this.selectedPart === null){
      return false;
    }
    let count = 0;
    for (const effect of this.slots){
      if (effect.effectTypeId === null){
        count++;
      }
      if (count === 3){
        return false;
      }
      if (effect.effectTypeId !== null && effect.enchantBase === null){
        return false;
      }
    }
    return true;
  }


  onClickComplete(): void {
    const id = this.keyTime;
    const armorTypeId = ('000' + this.selectedLevel).slice(-3) + '-' + this.selectedPart?.id + '-' + this.selectedSeries?.id;
    const armor: Armor = {
      id,
      armorTypeId,
      effectList: this.slots
    };
    this.armorDataService.addArmor(armor);
    this.router.navigate(['/']);
  }
// 画面で押下されたレベルを受け取ってワークフィールドとして宣言したselectedLevelと比較する
// もし同じなら２度連続で同じレベルを押下したことになるので選択解除としてワークフィールドを空にする
// 異なるならば１度目の押下なのでそのレベルを選択として該当レベルのみ表示し、他のレベルを非表示にする
// ついでにワークフィールドに退避する
  selectLevel(level: number): void {
    if (this.selectedLevel === level){
      this.selectedLevel = 0;
      this.selectedSeries = null;
    }else{
      this.selectedLevel = level;
      this.selectedSeries = null;
    }
  }

// htmlの*ngforでもらってきたシリーズマスターのデータを変数で受け取ってここのワークフィールドとして
// 宣言したselectedIdと比較する
// もし同じならば２連続同じ装備を選択しているので選択解除としワークフィールドを空にする
// 異なるならば１度目の押下なので選択として該当の装備のみ表示し、他の装備は非表示にする
// ついでにワークフィールドに退避する
  selectSeries(series: Series): void {
    if (this.selectedSeries?.id === series.id){
      this.selectedSeries = null;
      this.selectedLevel = 0;
    }else{
      this.selectedSeries = series;
      this.selectedLevel = series.level;
      if (this.selectedPart !== null){
        const noParts = this.selectedSeries.noPartsList.includes(this.selectedPart.id);
        if (noParts){
          this.selectedPart = null;
          for (const effect of this.slots){
            effect.effectTypeId = null;
            effect.enchantBase = null;
            effect.enchantExtra = null;
          }
          this.currentSlot = 0;
        }
      }
    }
  }

// 部位が選択済みのものを再度押されたときに装備が選択されてなかったら
// 画面綺麗にしたいのかなって思うだから部位と錬金効果全部消すよ
// 部位が選択済みのものを再度押されて装備が選択されていたら
// 気の迷いって思う
// 部位が選択済みのものとちがうものを押されたら
// 例）うで → 足ならば部位変えたいんだよねってことで部位の選択を変更して
// 入れてあったかもしれない錬金効果を全部消すよ
  selectPart(part: Part): void {
    if (this.selectedPart?.id === part.id){
      if (this.selectedSeries === null){
        this.selectedPart = null;
        for (const effect of this.slots){
          effect.effectTypeId = null;
          effect.enchantBase = null;
          effect.enchantExtra = null;
        }
        this.currentSlot = 0;
      }
    }else{
      this.selectedPart = part;
      for (const effect of this.slots){
        effect.effectTypeId = null;
        effect.enchantBase = null;
        effect.enchantExtra = null;
      }
      this.currentSlot = 0;
    }
  }

// 効果を選択する際に
// currentslotの効果、数値が入っていて、次行があって（３行目じゃない）、次行の錬金効果が入っていなかった場合のみ
// 効果を選んだときに次行にcurrentがうつる
// 入力をがんがんすすめるために
  selectEffectType(effectType: EffectType): void {
    if (this.slots[this.currentSlot].effectTypeId !== null
      && this.slots[this.currentSlot].enchantBase !== null
      && this.currentSlot < 2
      && this.slots[this.currentSlot + 1].enchantBase === null){
      this.currentSlot++;
      this.slots[this.currentSlot].effectTypeId = effectType.id;
    }else{
      this.slots[this.currentSlot].effectTypeId = effectType.id;
    }
    this.slots[this.currentSlot].enchantBase = null;
    this.slots[this.currentSlot].enchantExtra = null;
  }

  selectEnchantBase(enchant: Enchant): void {
    if (this.slots[this.currentSlot].enchantBase === enchant.base){
      this.slots[this.currentSlot].enchantBase = null;
    }else{
      this.slots[this.currentSlot].enchantBase = enchant.base;
      this.slots[this.currentSlot].enchantExtra = null;

    }
  }

  selectEnchantExtra(extra: number): void {
    if (this.slots[this.currentSlot].enchantExtra === extra){
      this.slots[this.currentSlot].enchantExtra = null;
    }else{
      this.slots[this.currentSlot].enchantExtra = extra;
    }
  }

  setCurrentSlot(idx: number): void{
    this.currentSlot = idx;
  }

  onClickEffectDelete(idx: number): void{
    this.slots[idx].effectTypeId = null;
    this.slots[idx].enchantBase = null;
    this.slots[idx].enchantExtra = null;
  }
}
