import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' }
  {path: 'dashboard', loadChildren: '../tabs/tabs.module#TabsPageModule' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
