import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodbyeCambridgeComponent } from './goodbye-cambridge.component';

const routes: Routes = [
  {
    path: "cambridge",
    component: GoodbyeCambridgeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMemoRoutingModule { }
