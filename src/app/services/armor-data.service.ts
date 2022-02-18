import * as Pako from 'pako';

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

  private writeString(s: string, buffer: number[]): void {
    for (let i = 0; i < s.length; ++i) {
      const c = s.charCodeAt(i);
      // tslint:disable-next-line: no-bitwise
      buffer.push((c >> 8) & 0xff);
      // tslint:disable-next-line: no-bitwise
      buffer.push(c & 0xff);
    }
    buffer.push(0);
    buffer.push(0);
  }

  private writeAsciiString(s: string, buffer: number[]): void {
    for (let i = 0; i < s.length; ++i) {
      const c = s.charCodeAt(i);
      // tslint:disable-next-line: no-bitwise
      buffer.push(c & 0xff);
    }
    buffer.push(0);
  }

  public export(name: string, armorList: Armor[]): string {
    // バージョン (1bytes)
    // 名前
    // 0x00
    // 0x00
    // 装備分繰り返し
    //   id
    //   0x00
    //   装備id
    //   0x00
    //   錬金効果数 (1bytes)
    //   錬金効果分繰り返し
    //     錬金効果ID
    //     0x00
    //     enchantBase (1bytes)
    //     enchantExtra (1bytes) nullの場合は0
    const version = 0;
    const buffer: number[] = [];
    buffer.push(version);

    this.writeString(name, buffer);

    for (const armor of armorList) {
      this.writeAsciiString(armor.id, buffer);
      this.writeAsciiString(armor.armorTypeId, buffer);

      const effectList: Effect[] = [];
      for (const effect of armor.effectList) {
        if (effect.effectTypeId === null) {
          continue;
        }
        effectList.push(effect);
      }
      buffer.push(effectList.length);
      for (const effect of effectList) {
        // tslint:disable-next-line: no-non-null-assertion
        this.writeAsciiString(effect.effectTypeId!, buffer);
        // tslint:disable-next-line: no-bitwise
        buffer.push((effect.enchantBase !== null ? effect.enchantBase : 0) & 0xff);
        // tslint:disable-next-line: no-bitwise
        buffer.push((effect.enchantExtra !== null ? effect.enchantExtra : 0) & 0xff);
      }
    }

    const data = new Uint8Array(buffer);
    const compressed = Pako.deflate(data);
    return btoa(String.fromCharCode(...compressed)).replace(/\//g, '_').replace(/\+/g, '-').replace(/=/g, '');
  }

  private readString(buffer: Uint8Array): [string, number] {
    const strbuf: number[] = [];
    let pos = 0;
    while (true) {
      if (pos >= buffer.length) {
        break;
      }
      // tslint:disable-next-line: no-bitwise
      const c = (buffer[pos++] << 8) | buffer[pos++];
      if (c === 0) {
        break;
      }
      strbuf.push(c);
    }
    const name = String.fromCharCode(...strbuf);
    return [name, pos];
  }

  private readAsciiString(buffer: Uint8Array): [string, number] {
    const strbuf: number[] = [];
    let pos = 0;
    while (true) {
      if (pos >= buffer.length) {
        break;
      }
      const c = buffer[pos++];
      if (c === 0) {
        break;
      }
      strbuf.push(c);
    }
    const name = String.fromCharCode(...strbuf);
    return [name, pos];
  }

  import(data: string): [string, Armor[]] {
    const binary = atob(data.replace(/_/g, '/').replace(/-/g, '+'));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; ++i) {
      bytes[i] = binary.charCodeAt(i);
    }
    // Pako deflates strings with UTF-8
    const buffer = Pako.inflate(bytes);
    let pos = 0;
    const version = buffer[pos++];

    const [name, nameOffset] = this.readString(buffer.subarray(pos));
    pos += nameOffset;

    const armorList: Armor[] = [];
    while (true) {
      if (pos >= buffer.length) {
        break;
      }
      const [id, idOffset] = this.readAsciiString(buffer.subarray(pos));
      pos += idOffset;
      const [armorTypeId, armorTypeIdOffset] = this.readAsciiString(buffer.subarray(pos));
      pos += armorTypeIdOffset;

      const effectList: Effect[] = [];
      const effectNum = buffer[pos++];
      for (let i = 0; i < effectNum; ++i) {
        const [effectTypeId, effectTypeIdOffset] = this.readAsciiString(buffer.subarray(pos));
        pos += effectTypeIdOffset;
        const enchantBase = buffer[pos++];
        const enchantExtra = buffer[pos++];
        effectList.push({
          effectTypeId,
          enchantBase,
          enchantExtra: (enchantExtra !== 0) ? enchantExtra : null,
        });
      }

      armorList.push({
        id,
        armorTypeId,
        effectList,
      });
    }

    return [
      name,
      armorList,
    ];
  }

  public overwriteArmorData(exportArmorList: Armor[]): void {
    this.armorList = exportArmorList;
    this.saveArmor();
  }
}
