/**
 * 装備のデータ
 */
 export interface Armor {
    // 装備可能レベル
    level: number;
    // 部位INDEX 0: 頭 1: からだ上 2: からだ下 3: 腕  4:足
    partId: string;
    // 装備INDEX
    id: string;
    // 装備名
    name: string;
    // シリーズINDEX
    seriesId: string;
    // メモ書く欄　必須ではない
    note?: string;
}