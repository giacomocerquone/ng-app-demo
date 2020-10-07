import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HiComponent } from 'src/app/components/hi/hi.component';
import { IsRightWordGuard } from 'src/app/guards/is-right-word.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'hi',
        component: HiComponent,
        canActivate: [IsRightWordGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
