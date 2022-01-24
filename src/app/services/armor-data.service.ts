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

}
