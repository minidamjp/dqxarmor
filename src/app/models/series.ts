/**
 * シリーズマスター　装備のシリーズについてのデータ
 */
 export interface Series {
    // シリーズを識別するID
    id: string;
    // シリーズ名：妖炎魔女、アビス・・・
    name: string;
    // 存在する部位
    noPartsList: string[];
    // 装備可能職業
    job: string[];
    // セット効果
    exEffect: string;
}
