import { Enchant } from './enchant';

/**
 * 装備の錬金効果についてのデータ
 */
export interface EffectType {
    // 錬金効果がどれかID
    id: string;
    // 効果名
    name: string;
    // 表記名
    displayName: string;
    // 錬金数値
    enchantList: Enchant[];
}

