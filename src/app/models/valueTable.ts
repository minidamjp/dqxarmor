/**
 * 装備の錬金効果のパーセンテージテーブル
 */
 export interface ValueTable {
    // 使用する錬金効果のテーブルグループID
    id: string;
    // 錬金レベル 10:初級 20:中級 30:上級
    enchantLevel: number;
    // 錬金結果　00:失敗 10:成功 20~:大成功
    successLevel: number;
    // 画面表示用の数値 60,60(-45)...
    enchant: string;
    // 実数 60,15...
    value: number;
}

