/**
 * 部位のデータ
 */
 export interface Part {
    // 部位を識別するID
    id: string;
    // 0: 頭 1: からだ上 2: からだ下 3: 腕  4:足
    name: string;
    // 錬金効果のどれがつくか ex.マヒ、混乱、封印
    effectTypeId: string[];
}
