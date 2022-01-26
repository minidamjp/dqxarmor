import { Injectable } from '@angular/core';

import { Armor } from '../models/armor';

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
    this.copySlots(armor),
    this.armorList.unshift(armor);
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

  private copySlots(armor: Armor): Armor[] {
    // 元のデータが変更された時に影響が出ないよう、
    // データのコピーを作成する。
    const clonedSlots: Armor[] = [];
    clonedSlots.push(armor);
    return clonedSlots;
  }


}
