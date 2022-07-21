import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TravellListPageComponent } from "./travell-list/travell-list-page.component";

const routes: Routes = [
    {
        path: 'travell-list',
        component: TravellListPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TravellListRoutingModule { }
