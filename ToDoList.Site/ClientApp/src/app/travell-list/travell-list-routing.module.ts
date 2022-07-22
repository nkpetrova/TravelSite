import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TravellListPageComponent } from "./travell-list/travell-list-page.component";
import { TurfirmaListPageComponent } from "./turfirma-list-page/turfirma-list-page.component";
import { VoucherListPageComponent } from "./voucher-list-page/voucher-list-page.component";
import { BookingListPageComponent } from "./booking-list-page/booking-list-page.component";

const routes: Routes = [
    {
        path: 'travell-list',
        component: TravellListPageComponent
        
    },
    {
        path: 'turfirma',
        component: TurfirmaListPageComponent
    },
    {
        path: 'voucher',
        component: VoucherListPageComponent
    },
    {
        path: 'booking',
        component: BookingListPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TravellListRoutingModule { }
