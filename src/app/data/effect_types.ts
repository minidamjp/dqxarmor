import { EffectType } from '../models/effect_type';

export const EffectTypes: EffectType[] = [
    {id: '001', name: 'ＨＰ', unit: '', displayName: 'さいだい%name% +%enchantBase%%enchantExtra%', enchantList: [
        {base: 7, extra: [1, 2, 3, -4] },
        {base: 5, extra: [2, 3, -3] },
        {base: 3, extra: [2, 3, -2] },
    ]},
    {id: '002', name: 'しゅび', unit: '', displayName: '%name%力 +%enchantBase%%enchantExtra%', enchantList: [
        {base: 6, extra: [1, 2, 3, -3] },
        {base: 4, extra: [1, 2, 3, -2] },
        {base: 2, extra: [1, 2, 3, -1] },
    ]},
    {id: '003', name: 'ＭＰ', unit: '', displayName: 'さいだい%name% +%enchantBase%%enchantExtra%', enchantList: [
        {base: 15, extra: [1, 2, 3, -12] },
        {base: 10, extra: [2, 3, -8] },
        {base:  5, extra: [2, 3, -4] },
    ]},
    {id: '004', name: '攻魔', unit: '', displayName: 'こうげき魔力 +%enchantBase%%enchantExtra%', enchantList: [
        {base: 15, extra: [1, 2, 3, -12] },
        {base: 10, extra: [2, 3, -8] },
        {base:  5, extra: [2, 3, -4] },
    ]},
    {id: '005', name: '回魔', unit: '', displayName: 'かいふく魔力 +%enchantBase%%enchantExtra%', enchantList: [
        {base: 15, extra: [1, 2, 3, -12] },
        {base: 10, extra: [2, 3, -8] },
        {base:  5, extra: [2, 3, -4] },
    ]},
    {id: '006', name: 'すばやさ', unit: '', displayName: '%name% +%enchantBase%%enchantExtra%', enchantList: [
        {base: 15, extra: [1, 2, 3, -12] },
        {base: 10, extra: [2, 3, -8] },
        {base:  5, extra: [2, 3, -4] },
    ]},
    {id: '007', name: 'きようさ', unit: '', displayName: '%name% +%enchantBase%%enchantExtra%', enchantList: [
        {base: 15, extra: [1, 2, 3, -12] },
        {base: 10, extra: [2, 3, -8] },
        {base:  5, extra: [2, 3, -4] },
    ]},
    {id: '008', name: 'おもさ', unit: '', displayName: '%name% +%enchantBase%%enchantExtra%', enchantList: [
        {base: 15, extra: [1, 2, 3, -10] },
        {base: 10, extra: [2, 3, -7] },
        {base:  5, extra: [2, 3, -4] },
    ]},
    {id: '009', name: 'おしゃれさ', unit: '', displayName: '%name% +%enchantBase%%enchantExtra%', enchantList: [
        {base: 15, extra: [1, 2, 3, -14] },
        {base: 10, extra: [2, 3, -9] },
        {base:  5, extra: [2, 3, -4] },
    ]},
    {id: '010', name: '身かわし', unit: '%', displayName: '%name%率 +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 1.4, extra: [0.2, -0.8] },
        {base: 1.2, extra: [0.2, -0.8] },
        {base: 1.0, extra: [0.2, 0.3, -0.8] },
    ]},
    {id: '011', name: 'ＭＰ消費', unit: '%', displayName: '%name%しない率 +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 5.0, extra: [0.5, 1, 1.5, 2, -4.4] },
        {base: 4.0, extra: [0.5, 1, 1.5, 2, -3.6] },
        {base: 2.0, extra: [0.5, 1, 1.5, 2, -1.8] },
    ]},
    {id: '012', name: '発動速度', unit: '%', displayName: '呪文%name% +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 6, extra: [1, -5] },
        {base: 4, extra: [1, -3] },
        {base: 2, extra: [1, -1] },
    ]},
    {id: '013', name: 'ヘナトス', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1, -3] },
        {base: 3, extra: [1, -2] },
        {base: 2, extra: [1, -1] },
    ]},
    {id: '014', name: 'ルカニ', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1, -3] },
        {base: 3, extra: [1, -2] },
        {base: 2, extra: [1, -1] },
    ]},
    {id: '015', name: '眠り', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1, -3] },
        {base: 3, extra: [1, -2] },
        {base: 2, extra: [1, -1] },
    ]},
    {id: '016', name: 'ブレス', unit: '%減', displayName: 'ブレス系ダメージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 10, extra: [2, 3, 4, -9] },
        {base:  6, extra: [2, -5] },
    ]},
    {id: '017', name: '呪文ダメ', unit: '%減', displayName: '攻撃呪文ダメージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 7, extra: [1, -6] },
        {base: 5, extra: [1, -4] },
        {base: 3, extra: [1, -2] },
    ]},
    {id: '018', name: '眠り', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 60, extra: [2, 4, 6, 8, 10, -45] },
        {base: 40, extra: [2, 4, 6, 8, 10, -30] },
        {base: 20, extra: [2, 3, 4, 6, 8, 10, -15] },
    ]},
    {id: '019', name: 'マヒ', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 60, extra: [2, 4, 6, 8, 10, -45] },
        {base: 40, extra: [2, 4, 6, 8, 10, -30] },
        {base: 20, extra: [2, 3, 4, 6, 8, 10, -15] },
    ]},
    {id: '020', name: '混乱', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 60, extra: [2, 4, 6, 8, 10, -45] },
        {base: 40, extra: [2, 4, 6, 8, 10, -30] },
        {base: 20, extra: [2, 3, 4, 6, 8, 10, -15] },
    ]},
    {id: '021', name: '封印', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 60, extra: [2, 4, 6, 8, 10, -45] },
        {base: 40, extra: [2, 4, 6, 8, 10, -30] },
        {base: 20, extra: [2, 3, 4, 6, 8, 10, -15] },
    ]},
    {id: '022', name: '幻惑', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%', enchantList: [
        {base: 60, extra: [2, 4, 6, 8, 10, -45] },
        {base: 40, extra: [2, 4, 6, 8, 10, -30] },
        {base: 20, extra: [2, 3, 4, 6, 8, 10, -15] },
    ]},

// パルプンテでしかつかないから追加効果は大成功しかない
    {id: '023', name: 'どく', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 60, extra: [10] },
        {base: 40, extra: [10] },
        {base: 20, extra: [10] },
    ]},
    {id: '024', name: 'ＭＰ吸収', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 60, extra: [2, 4, 6, 8, 10, -45] },
        {base: 40, extra: [2, 4, 6, 8, 10, -30] },
        {base: 20, extra: [2, 3, 4, 6, 8, 10, -15] },
    ]},
    {id: '025', name: '呪い', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 60, extra: [2, 4, 6, 8, 10, -45] },
        {base: 40, extra: [2, 4, 6, 8, 10, -30] },
        {base: 20, extra: [2, 3, 4, 6, 8, 10, -15] },
    ]},
    {id: '026', name: '即死', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 60, extra: [2, 4, 6, 8, 10, -45] },
        {base: 40, extra: [2, 4, 6, 8, 10, -30] },
        {base: 20, extra: [2, 3, 4, 6, 8, 10, -15] },
    ]},
    {id: '027', name: 'おびえ', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 90, extra: [2, 4, 6, 8, 10, -81] },
        {base: 60, extra: [2, 4, 6, 8, 10, -54] },
        {base: 30, extra: [2, 4, 6, 8, 10, -27] },
    ]},
    {id: '028', name: '	転び', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 90, extra: [2, 4, 6, 8, 10, -81] },
        {base: 60, extra: [2, 4, 6, 8, 10, -54] },
        {base: 30, extra: [2, 4, 6, 8, 10, -27] },
    ]},
    {id: '029', name: '	踊らされ', unit: '%', displayName: '%name%ガード +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 90, extra: [2, 4, 6, 8, 10, -81] },
        {base: 60, extra: [2, 4, 6, 8, 10, -54] },
        {base: 30, extra: [2, 4, 6, 8, 10, -27] },
    ]},

// パルプンテでしかつかないから追加効果が大成功しかない
    {id: '030', name: '	ピオラ', unit: '%', displayName: '開戦時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 10, extra: [2] },
        {base:  6, extra: [2] },
        {base:  3, extra: [2] },
    ]},

// からだ上につくおもさはパルプンテしかないから追加効果は大成功しかない
    {id: '031', name: 'おもさ', unit: '', displayName: '%name% +%enchantBase%%enchantExtra%', enchantList: [
        {base: 15, extra: [3] },
        {base: 10, extra: [3] },
        {base:  5, extra: [3] },
    ]},

// パルプンテしかないから追加効果は大成功しかない 炎氷風雷土闇光
    {id: '032', name: '炎ダメ', unit: '%減', displayName: '%name%ージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 14, extra: [4] },
        {base: 10, extra: [4] },
        {base:  6, extra: [2] },
    ]},
    {id: '033', name: '氷ダメ', unit: '%減', displayName: '%name%ージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 14, extra: [4] },
        {base: 10, extra: [4] },
        {base:  6, extra: [2] },
    ]},
    {id: '034', name: '風ダメ', unit: '%減', displayName: '%name%ージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 14, extra: [4] },
        {base: 10, extra: [4] },
        {base:  6, extra: [2] },
    ]},
    {id: '035', name: '雷ダメ', unit: '%減', displayName: '%name%ージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 14, extra: [4] },
        {base: 10, extra: [4] },
        {base:  6, extra: [2] },
    ]},
    {id: '036', name: '土ダメ', unit: '%減', displayName: '%name%ージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 14, extra: [4] },
        {base: 10, extra: [4] },
        {base:  6, extra: [2] },
    ]},
    {id: '037', name: '闇ダメ', unit: '%減', displayName: '%name%ージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 14, extra: [4] },
        {base: 10, extra: [4] },
        {base:  6, extra: [2] },
    ]},
    {id: '038', name: '光ダメ', unit: '%減', displayName: '%name%ージ %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 14, extra: [4] },
        {base: 10, extra: [4] },
        {base:  6, extra: [2] },
    ]},
    {id: '039', name: 'スカラ', unit: '%', displayName: '開戦時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 10, extra: [2] },
        {base:  6, extra: [2] },
        {base:  3, extra: [2] },
    ]},
    {id: '040', name: 'マホキテ', unit: '%', displayName: '開戦時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 10, extra: [2] },
        {base:  6, extra: [2] },
        {base:  3, extra: [2] },
    ]},
    {id: '041', name: '通常ドロ', unit: '倍', displayName: '%name%ップ率 %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 1.5, extra: [0.4] },
        {base: 1.4, extra: [0.4] },
        {base: 1.2, extra: [0.4] },
    ]},
    {id: '042', name: 'レアドロ', unit: '倍', displayName: '%name%ップ率 %enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 1.5, extra: [0.4] },
        {base: 1.4, extra: [0.4] },
        {base: 1.2, extra: [0.4] },
    ]},
// パルプンテでしかつかない攻撃時～
    {id: '043', name: 'どく', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1] },
        {base: 3, extra: [1] },
        {base: 2, extra: [1] },
    ]},
// 間違えて攻撃時眠りが２つあったから漏れちゃってたかいしん率をいれたよ
    {id: '044', name: 'かいしん', unit: '%', displayName: '%name%率 +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 1.4, extra: [0.2, -0.8] },
        {base: 1.2, extra: [0.2, -0.8] },
        {base: 1.0, extra: [0.2, 0.3, -0.8] },
    ]},
    {id: '045', name: 'マヒ', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1] },
        {base: 3, extra: [1] },
        {base: 2, extra: [1] },
    ]},
    {id: '046', name: '混乱', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1] },
        {base: 3, extra: [1] },
        {base: 2, extra: [1] },
    ]},
    {id: '047', name: '幻惑', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1] },
        {base: 3, extra: [1] },
        {base: 2, extra: [1] },
    ]},
    {id: '048', name: '魅了', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1] },
        {base: 3, extra: [1] },
        {base: 2, extra: [1] },
    ]},
    {id: '049', name: 'マホトーン', unit: '%', displayName: '攻撃時 %enchantBase%%enchantExtra%%unit%で%name%', enchantList: [
        {base: 4, extra: [1] },
        {base: 3, extra: [1] },
        {base: 2, extra: [1] },
    ]},
    {id: '050', name: '不意をつく', unit: '%', displayName: '%name%確率 +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 4, extra: [1] },
        {base: 3, extra: [1] },
        {base: 2, extra: [1] },
    ]},
    {id: '051', name: '移動速度', unit: '%', displayName: '%name% +%enchantBase%%enchantExtra%%unit%', enchantList: [
        {base: 3.0, extra: [0.3] },
        {base: 2.0, extra: [0.2] },
        {base: 1.0, extra: [0.1] },
    ]},


];

