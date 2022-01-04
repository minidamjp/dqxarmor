import { Component, OnInit } from '@angular/core';

import { SeriesList } from '../data/series';
import { Series } from '../models/series';
import { MasterDataService } from '../services/master-data.service';

@Component({
  selector: 'app-armor-add',
  templateUrl: './armor-add.component.html',
  styleUrls: ['./armor-add.component.scss']
})
export class ArmorAddComponent implements OnInit {

  keyTime: string|null = null;
  selectedLevel = 0;
  selectedSeries: Series|null = null;
  selectedPartId = '';


  constructor(
    public masterDataService: MasterDataService,
  ) { }

  ngOnInit(): void {
  }

  isCompleted(): boolean {
    return false;
  }


  onClickComplete(): void {
    if (this.keyTime == null) {
      const keyTime =  new Date().getTime().toString();
    }
  }
// 画面で押下されたレベルを受け取ってワークフィールドとして宣言したselectedLevelと比較する
// もし同じなら２度連続で同じレベルを押下したことになるので選択解除としてワークフィールドを空にする
// 異なるならば１度目の押下なのでそのレベルを選択として該当レベルのみ表示し、他のレベルを非表示にする
// ついでにワークフィールドに退避する
  selectLevel(level: number): void {
    if (this.selectedLevel === level){
      this.selectedLevel = 0;
      this.selectedSeries = null;
    }else{
      this.selectedLevel = level;
      this.selectedSeries = null;
    }
  }

// htmlの*ngforでもらってきたシリーズマスターのIDを変数で受け取ってここのワークフィールドとして
// 宣言したselectedIdと比較する
// もし同じならば２連続同じ装備を選択しているので選択解除としワークフィールドを空にする
// 異なるならば１度目の押下なので選択として該当の装備のみ表示し、他の装備は非表示にする
// ついでにワークフィールドに退避する
  selectSeries(series: Series): void {
    if (this.selectedSeries?.id === series.id){
      this.selectedSeries = null;
      this.selectedLevel = 0;
    }else{
      this.selectedSeries = series;
      this.selectedLevel = series.level;
    }
  }

  selectPartId(partId: string): void {
    if (this.selectedPartId === partId){
      this.selectedPartId = '';
    }else{
      this.selectedPartId = partId;
    }
  }

}
