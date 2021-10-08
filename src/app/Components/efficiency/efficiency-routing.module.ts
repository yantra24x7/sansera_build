import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EfficiencyComponent } from './efficiency.component';

const routes: Routes = [{ path: '', component: EfficiencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EfficiencyRoutingModule { }
