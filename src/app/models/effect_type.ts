/**
 * 装備の錬金効果についてのデータ
 */
 export interface EffectType {
    // 効果種類INDEX
    id: string;
    // 効果名
    name: string;
    // 効果がつく部位
    partIdList: string[];
    // 効果のパーセンテージテーブルがどれか
    enchantTable: string;
}
