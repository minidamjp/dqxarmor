import { Effect } from './effect';

/**
 * データを保存、読み出しするときのフォーマット
 */
export interface Armor {
    id: string;
    // 装備レベル(３桁)、部位ID(１桁)、装備シリーズ(３桁) XXX-X-XXX
    armorTypeId: string;
    //  効果のID
    effectList: Effect[];
}
