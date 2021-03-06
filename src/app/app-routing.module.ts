import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArmorAddComponent } from './armor-add/armor-add.component';
import { ArmorListComponent } from './armor-list/armor-list.component';

const routes: Routes = [
  { path: 'a/new', component: ArmorAddComponent },
  { path: 'a/:id', component: ArmorAddComponent },
  { path: 'i/:armorData', component: ArmorListComponent },
  { path: '', component: ArmorListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
