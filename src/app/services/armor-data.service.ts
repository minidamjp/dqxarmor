import { Injectable } from '@angular/core';

import { Armor } from '../models/armor';
import { Effect } from '../models/effect';

@Injectable({
  providedIn: 'root'
})
export class ArmorDataService {

  armorList: Armor[] = [];

  constructor() {
    const j: string|null = localStorage.getItem('Armor');
    if (j !== null){
      this.armorList = JSON.parse(j);
    }
  }

  addArmor(armor: Armor): void{
    if (armor.id === ''){
      armor.id =  new Date().getTime().toString();
      this.armorList.unshift({
        id: armor.id,
        armorTypeId: armor.armorTypeId,
        effectList: this.copySlots(armor.effectList),
      });
    }else{
      for (const repArmor of this.armorList) {
        if (repArmor.id === armor.id) {
          repArmor.armorTypeId = armor.armorTypeId;
          repArmor.effectList = this.copySlots(armor.effectList);
        }
      }
    }
    this.saveArmor();
  }

  private saveArmor(): void{
    localStorage.setItem('Armor', JSON.stringify(this.armorList));
  }

  getArmorList(): Armor[] {
    return this.armorList;
  }

  deleteArmor(keyTime: string): void {
    for (const [idx, armor] of this.armorList.entries()) {
      if (keyTime === armor.id) {
        this.armorList.splice(idx, 1);
        this.saveArmor();
        return;
      }
    }
  }

  private copySlots(effectList: Effect[]): Effect[] {
    // 元のデータが変更された時に影響が出ないよう、
    // データのコピーを作成する。
    const clonedSlots: Effect[] = [];
    for (const slot of effectList) {
      const clonedSlot: Effect = {
        effectTypeId: slot.effectTypeId,
        enchantBase: slot.enchantBase,
        enchantExtra: slot.enchantExtra,
      };
      clonedSlots.push(clonedSlot);
    }
    return clonedSlots;
  }

  getCopyOfArmor(keyTime: string): Armor | null {
    for (const armor of this.armorList) {
      if (keyTime === armor.id) {
        return {
          id: armor.id,
          armorTypeId: armor.armorTypeId,
          effectList: this.copySlots(armor.effectList),
        };
      }
    }
    return null;
  }


}
