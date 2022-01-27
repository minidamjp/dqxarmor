import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  keyTime: string|null = null;
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
  ) { }

  ngOnInit(): void {
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
    const keyTime =  new Date().getTime().toString();
    const armorTypeId = ('000' + this.selectedLevel).slice(-3) + '-' + this.selectedPart?.id + '-' + this.selectedSeries?.id;
    const armor: Armor = {
      id: keyTime,
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

// 錬金効果を入れて同じ効果を押した場合の挙動
// 錬金効果が入っているが効果数値は入っていない → 選択されていた効果をキャンセル（数値、補助数値はクリア
// 錬金効果が入っていて効果数値も入っている → 次の錬金効果を入れたいとみなし次の行に設定する（次の行の数値、補助数値はクリア
//                                         ３行目の場合には選択されていた効果をキャンセル（効果、数値、補助数値はクリア
// 錬金効果をいれて別の効果を押した場合の挙動(currentSlotにまだデータが入ってなかったときも含む)
// 錬金効果が入っているが効果数値は入っていない → 別の効果に上書き（数値、補助数値はクリア
// 錬金効果が入っていて効果数値も入っている → 次の錬金効果を入れたいとみなし次の行に設定する（次の行の数値、補助数値はクリア
//                                         ３行目の場合には選択されていた効果をキャンセル（効果、数値、補助数値はクリア

  selectEffectType(effectType: EffectType): void {
    if (this.slots[this.currentSlot].effectTypeId === effectType.id){
      if (this.slots[this.currentSlot].enchantBase === null){
        this.slots[this.currentSlot].effectTypeId = null;
      }else{
        if (this.currentSlot !== 3){
          this.currentSlot++;
          this.slots[this.currentSlot].effectTypeId = effectType.id;
        }else{
          this.slots[this.currentSlot].effectTypeId = null;
        }
      }
    }else{
      if (this.slots[this.currentSlot].enchantBase === null){
        this.slots[this.currentSlot].effectTypeId = effectType.id;
      }else{
        if (this.currentSlot !== 3){
          this.currentSlot++;
          this.slots[this.currentSlot].effectTypeId = effectType.id;
        }else{
          this.slots[this.currentSlot].effectTypeId = null;
        }
      }
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
