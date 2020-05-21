import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasboardPanelComponent } from './dasboard-panel/dasboard-panel.component'


const routes: Routes = [
  { path: '', component: DasboardPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
