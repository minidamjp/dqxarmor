// tslint:disable: max-line-length
import { Series } from '../models/series';

export const SeriesList: Series[] = [
    {id: '001', level: 90, name: '大戦鬼', noPartsList: ['2'], job: ['00,07,08,19'], exEffect: '開戦時50％で攻撃力+60 仲間が死んだら50％でためる'},
    {id: '002', level: 90, name: 'トーテム', noPartsList: [], job: ['03,06,12,14'], exEffect: '魔物へ会心と呪文暴走ダメージ+100'},
    {id: '003', level: 90, name: 'クイック', noPartsList: [], job: ['04,08,13,20'], exEffect: 'コマンド間隔-0.5秒 開戦時100％で早詠みの杖'},
    {id: '004', level: 90, name: '巨商', noPartsList: ['3'], job: ['05,09,11,14,17'], exEffect: '呪文と特技の回復+30%'},
    {id: '005', level: 90, name: 'フォーチュン', noPartsList: ['0'], job: ['01,02,10,15,16,18'], exEffect: '炎の攻撃ダメージ+5％ 闇の攻撃ダメージ+5％'},

    {id: '006', level: 93, name: '降魔', noPartsList: [], job: ['00,07,08,19'], exEffect: '攻撃呪文ダメージ7%減 受けた属性ダメージの10%回復(フォース無効)'},
    {id: '007', level: 93, name: '武神', noPartsList: ['0'], job: ['03,06,12,14'], exEffect: '魔物へ会心と呪文暴走ダメージ+100'},
    {id: '008', level: 93, name: 'ヴァンガード', noPartsList: ['2'], job: ['04,08,13,20'], exEffect: '必殺チャージ率+1% チャンス発生率+1%'},
    {id: '009', level: 93, name: 'スターダム', noPartsList: ['2'], job: ['05,09,11,14,17'], exEffect: 'コマンド間隔-0.5秒 状態異常系の成功率+10%'},
    {id: '010', level: 93, name: '賢哲', noPartsList: [], job: ['01,02,10,15,16,18'], exEffect: '炎ダメージ20%減 雷ダメージ20%減'},

    {id: '011', level: 96, name: '鉄壁', noPartsList: [], job: ['00,07,08,19'], exEffect: '被ダメージ10軽減'},
    {id: '012', level: 96, name: 'トライバル', noPartsList: [], job: ['03,06,12,14'], exEffect: 'コマンド間隔 -0.5秒 攻撃時5％でチャージ時間 -10秒'},
    {id: '013', level: 96, name: '砂海', noPartsList: [], job: ['04,08,13,20'], exEffect: '風ダメージ20％減 光ダメージ20％減'},
    {id: '014', level: 96, name: 'エトワール', noPartsList: [], job: ['05,09,11,14,17'], exEffect: '必殺チャージ率+1％ 闇ダメージ20％減'},
    {id: '015', level: 96, name: 'クルーガー', noPartsList: [], job: ['01,02,10,15,16,18'], exEffect: '全ての属性ダメージ+3％ 2％で行動ターン消費しない'},

    {id: '016', level: 99, name: 'シュバリエ', noPartsList: [], job: ['00,07,08,19'], exEffect: '特技のダメージ+10（試合無効） 開戦時50％で聖騎士の堅陣'},
    {id: '017', level: 99, name: '族長', noPartsList: [], job: ['03,06,12,14'], exEffect: '必殺チャージ率+1% 行動時5.0%でバイシオンとピオラ'},
    {id: '018', level: 99, name: '機工博士', noPartsList: [], job: ['04,08,13,20'], exEffect: 'コマンド間隔-0.5秒 行動時5.0%で早詠みの杖'},
    {id: '019', level: 99, name: 'ポールスター', noPartsList: ['3'], job: ['05,09,11,14,17'], exEffect: '2.0%で行動ターン消費しない 呪文と特技の回復+30%'},
    {id: '020', level: 99, name: 'カテドラル', noPartsList: ['2'], job: ['01,02,10,15,16,18'], exEffect: 'ブレス系ダメージ10%減 攻撃呪文ダメージ7％減'},

    {id: '021', level: 100, name: 'ヴァルハラ', noPartsList: [], job: ['00,07,08,19'], exEffect: '仲間死亡時50％でためる(試合無効) 会心完全ガード+5％'},
    {id: '022', level: 100, name: 'レギオン', noPartsList: [], job: ['03,06,12,14'], exEffect: '行動時3％でテンションアップ テンション時 魔物にダメージ+100'},
    {id: '023', level: 100, name: '大怪傑', noPartsList: [], job: ['04,08,13,20'], exEffect: '必殺チャージ率+1％ 状態異常系の成功率+10％'},
    {id: '024', level: 100, name: 'タンブラー', noPartsList: [], job: ['05,09,11,14,17'], exEffect: '身かわし率+3.0％ 特技のダメージ+10(試合無効)'},
    {id: '025', level: 100, name: 'ソポス', noPartsList: [], job: ['01,02,10,15,16,18'], exEffect: '炎・闇の攻撃ダメージ+5％ 呪文発動速度+2％'},

    {id: '026', level: 105, name: 'ネヴァン', noPartsList: [], job: ['00,07,08,19'], exEffect: '敵を倒すと5%でバイシオン 復活時ヘヴィチャージ+25%'},
    {id: '027', level: 105, name: 'ガナドール', noPartsList: [], job: ['03,06,12,14'], exEffect: 'コマンド間隔-0.5秒 攻撃時5.0%でチャージ時間-10秒'},
    {id: '028', level: 105, name: '神技', noPartsList: [], job: ['04,08,13,20'], exEffect: '特技のダメージ+10(試合無効) 敵を倒すと3%でためる'},
    {id: '029', level: 105, name: 'ヴィーラ', noPartsList: [], job: ['05,09,11,14,17'], exEffect: 'テンションリンク+3% 呪文発動速度+2%'},
    {id: '030', level: 105, name: 'アビス', noPartsList: ['3'], job: ['01,02,10,15,16,18'], exEffect: '雷ダメージ20%減 闇ダメージ20%減'},

    {id: '031', level: 108, name: 'ミラー', noPartsList: [], job: ['00,07,08,19'], exEffect: '行動時10%でマホターン 受けるダメージ10軽減'},
    {id: '032', level: 108, name: '開祖', noPartsList: [], job: ['03,06,12,14'], exEffect: '会心率と呪文暴走率+1.5% 会心と暴走ダメージ+100(試合無効)'},
    {id: '033', level: 108, name: 'ドラゴン', noPartsList: [], job: ['04,08,13,20'], exEffect: '炎ダメージ20%減 土ダメージ20%減'},
    {id: '034', level: 108, name: 'かぜ', noPartsList: ['2'], job: ['05,09,11,14,17'], exEffect: '風ダメージ20%減 呪文と特技の回復+30%'},
    {id: '035', level: 108, name: 'ひかり', noPartsList: ['2'], job: ['01,02,10,15,16,18'], exEffect: '行動時10%でマホターン 光の攻撃ダメージ+5%'},

    {id: '036', level: 110, name: '魔候爵', noPartsList: [], job: ['00,07,08,19'], exEffect: '味方死亡時20%でバイシオン 瀕死時15%攻撃力+60 (試合無効) ブレス系ダメージ8%減'},
    {id: '037', level: 110, name: 'ファフニル', noPartsList: [], job: ['03,06,12,14'], exEffect: '特技のダメージ+15 (試合無効) 行動時5.0%でバイシオンとピオラ 3.0%でターン消費なし (試合無効)'},
    {id: '038', level: 110, name: 'ワンダラーズ', noPartsList: [], job: ['04,08,13,20'], exEffect: '開戦時100%で早詠みの杖 行動時5.0%で早詠みの杖 必殺チャージ率+1%'},
    {id: '039', level: 110, name: 'グレイスフル', noPartsList: ['3'], job: ['05,09,11,14,17'], exEffect: 'コマンド間隔-0.5秒 状態異常系の成功率 +10% 攻撃呪文ダメージ5%減'},
    {id: '040', level: 110, name: '妖炎魔女', noPartsList: [], job: ['01,02,10,15,16,18'], exEffect: '炎・闇の攻撃ダメージ+5% 2.0%でターン消費なし (試合無効) 会心率と呪文暴走率+1.0%'},

];
