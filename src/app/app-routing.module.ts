import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArmorAddComponent } from './armor-add/armor-add.component';

const routes: Routes = [
  { path: '', component: ArmorAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
