/**
 * 装備のデータ
 */
 export interface ArmorType {
    // 部位INDEX 0: 頭 1: からだ上 2: からだ下 3: 腕  4:足
    partId: string;
    // シリーズINDEX
    seriesId: string;
    // 装備INDEX
    id: string;
    // 装備名
    name: string;

}
