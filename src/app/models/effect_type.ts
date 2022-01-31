import { Enchant } from './enchant';

/**
 * 装備の錬金効果についてのデータ
 */
export interface EffectType {
    // 錬金効果がどれかID
    id: string;
    // 効果名
    name: string;
    // 効果タイプグループ 0:ガード系,1:ステータスUP系,2:攻撃時系,3:開戦時,4:ダメ減
    group: string;
    // 単位
    unit: string;
    // 表記名
    displayName: string;
    // 錬金数値
    enchantList: Enchant[];
}

