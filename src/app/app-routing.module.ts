import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { LoadingDemoComponent } from './loading-demo/loading-demo.component';

const routes: Routes = [
  { path: '',   redirectTo: '/button', pathMatch: 'full' },
  { path: 'button', component: ButtonDemoComponent },
  { path: 'loading', component: LoadingDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
