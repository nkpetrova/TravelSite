import { NgModule } from "@angular/core";
import { TravellListPageComponent } from "./travell-list/travell-list-page.component";
import { TravellListRoutingModule } from "./travell-list-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { CommonModule } from "@angular/common";
import { TurfirmaListItemComponent } from "./turfirma-list-item/turfirma-list-item.component";
import { MatIconModule } from "@angular/material/icon";
import { TurfirmaService } from "./shared/turfirma.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { VoucherListItemComponent } from './voucher-list-item/voucher-list-item.component';
import { BookingListItemComponent } from './booking-list-item/booking-list-item.component';
import { VoucherService } from "./shared/voucher.service";
import { BookingService } from "./shared/booking.service";
import { TurfirmaListPageComponent } from './turfirma-list-page/turfirma-list-page.component';
import { VoucherListPageComponent } from './voucher-list-page/voucher-list-page.component';
import { BookingListPageComponent } from './booking-list-page/booking-list-page.component';

@NgModule({
    declarations: [
        TravellListPageComponent,
        TurfirmaListItemComponent,
        VoucherListItemComponent,
        BookingListItemComponent,
        TurfirmaListPageComponent,
        VoucherListPageComponent,
        BookingListPageComponent,
    ],
    imports: [
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        TravellListRoutingModule,
        CommonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [
        TurfirmaService,
        VoucherService,
        BookingService
    ]
})
export class TravellListModule {
}
