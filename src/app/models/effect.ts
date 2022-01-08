/**
 * データを保存、読み出しするときのフォーマット
 */
 export interface Effect {
    // 錬金効果
    effectTypeId: string|null;
    // 錬金効果数字
    enchantBase: number|null;
    // 錬金効果補助数字
    enchantExtra: number|null;
}
