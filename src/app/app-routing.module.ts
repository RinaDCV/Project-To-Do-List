import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';


const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'archive',
    component:ArchiveComponent
  },
  {
    path:'trash',
    component:TrashComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
