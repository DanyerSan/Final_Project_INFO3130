import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';



const routes: Routes = [
  {path:"summer-component", component:SummerComponent},
  {path:"winter-component", component:WinterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
