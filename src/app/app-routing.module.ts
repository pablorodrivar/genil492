import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'post/:id', loadChildren: './post/post.module#PostPageModule' },
  { path: 'tab2/section/:id', loadChildren: './section/section.module#SectionPageModule' },
  { path: 'add-post', loadChildren: './add-post/add-post.module#AddPostPageModule' },
  {
    path: 'members',
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  { path: 'post', loadChildren: './post/post.module#PostPageModule' },
  { path: 'section', loadChildren: './section/section.module#SectionPageModule' },
  { path: 'add-post', loadChildren: './add-post/add-post.module#AddPostPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
