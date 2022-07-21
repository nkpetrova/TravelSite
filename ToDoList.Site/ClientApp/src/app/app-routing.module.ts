import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravellListPageComponent } from "./travell-list/travell-list/travell-list-page.component";

const routes: Routes = [
    {
        path: '**',
        component: TravellListPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
