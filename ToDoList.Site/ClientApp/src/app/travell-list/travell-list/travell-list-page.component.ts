import { Component, OnInit } from '@angular/core';
import { ITurfirma } from "../shared/turfirma.interface";
import { TurfirmaService } from "../shared/turfirma.service";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { IVoucher } from "../shared/voucher.interface";
import { VoucherService } from "../shared/voucher.service";
import { IBooking } from "../shared/booking.interface";
import { BookingService } from '../shared/booking.service';

@Component({
    templateUrl: './travell-list-page.component.html',
    styleUrls: ['./travell-list-page.component.scss'],
    providers: 
    [TurfirmaService, VoucherService, BookingService]
})
export class TravellListPageComponent  {
    public turfirmas: ITurfirma[];
    public vouchers: IVoucher[];
    public bookings: IBooking[];
    public form: FormGroup;
    public form1: FormGroup;
    public form2: FormGroup;

    constructor(private turfirmaService: TurfirmaService, private voucherService: VoucherService, 
        private bookingService: BookingService) {
        this.getTurfirmas();
        this.getVouchers();
        this.getBookings();
    }

    public getTurfirmas(): void {
        this.turfirmaService.getTurfirmas().subscribe(t => {
            this.turfirmas = Object.assign([], t)});
    }

    public ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            address_t: new FormControl(null, [Validators.required]),
            commission: new FormControl(null, [Validators.required]),
            id_t: new FormControl(null, [Validators.required])
        });
        this.form1 = new FormGroup({
            sanatorium: new FormControl(null, [Validators.required]),
            address: new FormControl(null, [Validators.required]),
            price: new FormControl(null, [Validators.required]),
            quantity: new FormControl(null, [Validators.required]),
            id: new FormControl(null, [Validators.required])
        });
        this.form2 = new FormGroup({
            date: new FormControl(null, [Validators.required]),
            turfirma_id: new FormControl(null, [Validators.required]),
            voucher_id: new FormControl(null, [Validators.required]),
            quantity_b: new FormControl(null, [Validators.required]),
            price_b: new FormControl(null, [Validators.required]),
            id_b: new FormControl(null, [Validators.required])
        });
        this.form.controls["id_t"].setValue(0);
        this.form1.controls["id"].setValue(0);
        this.form2.controls["id_b"].setValue(0);
    }

    public addTurfirmaItem(): void {
        if (this.form.invalid) {
            return;
        }
        this.turfirmaService.addTurfirma({
            id_t: 0,
            name: this.nameControl.value,
            address_t: this.address_tControl.value,
            commission: this.commissionControl.value
        }).subscribe(() => {
            this.getTurfirmas();
            this.form.markAsUntouched();
        });
    }

    public getTurfirma(turfirma: ITurfirma): void {
        this.turfirmaService.getTurfirmaById(turfirma.id_t).subscribe(() => {
            this.getTurfirmas();
        });
    }

    public deleteTurfirma(turfirma: ITurfirma): void {
        this.turfirmaService.deleteTurfirma(turfirma.id_t).subscribe(() => {
            this.getTurfirmas();
        });
    }

    public updateTurfirmaItem(): void {
        if (this.form.invalid) {
            return;
        }
        this.turfirmaService.updateTurfirma({
            id_t: this.id_tControl.value,
            name: this.nameControl.value,
            address_t: this.address_tControl.value,
            commission: this.commissionControl.value
        }).subscribe(() => {
            this.getTurfirmas();
            this.form.markAsUntouched();
        });
    }

    get id_tControl(): AbstractControl {
        return this.form.get('id_t');
    }

    get nameControl(): AbstractControl {
        return this.form.get('name');
    }

    get address_tControl(): AbstractControl {
        return this.form.get('address_t');
    }

    get commissionControl(): AbstractControl {
        return this.form.get('commission');
    }


    public getVouchers(): void {
        this.voucherService.getVouchers().subscribe(v => {
            this.vouchers = Object.assign([], v)});
    }

    public addVoucherItem(): void {
        if (this.form1.invalid) {
            return;
        }
        this.voucherService.addVoucher({
            id: 0,
            sanatorium: this.sanatoriumControl.value,
            address: this.addressControl.value,
            price: this.priceControl.value,
            quantity: this.quantityControl.value
        }).subscribe(() => {
            this.getVouchers();
            this.form1.markAsUntouched();
        });
    }

    public getVoucher(voucher: IVoucher): void {
        this.voucherService.getVoucherById(voucher.id).subscribe(() => {
            this.getVouchers();
        });
    }

    public deleteVoucher(voucher: IVoucher): void {
        this.voucherService.deleteVoucher(voucher.id).subscribe(() => {
            this.getVouchers();
        });
    }

    public updateVoucherItem(): void {
        if (this.form1.invalid) {
            return;
        }
        this.voucherService.updateVoucher({
            id: this.idControl.value,
            sanatorium: this.sanatoriumControl.value,
            address: this.addressControl.value,
            price: this.priceControl.value,
            quantity: this.quantityControl.value
        }).subscribe(() => {
            this.getVouchers();
            this.form1.markAsUntouched();
        });
    }

    get idControl(): AbstractControl {
        return this.form1.get('id');
    }

    get sanatoriumControl(): AbstractControl {
        return this.form1.get('sanatorium');
    }

    get addressControl(): AbstractControl {
        return this.form1.get('address');
    }

    get priceControl(): AbstractControl {
        return this.form1.get('price');
    }

    get quantityControl(): AbstractControl {
        return this.form1.get('quantity');
    }


    public getBookings(): void {
        this.bookingService.getBookings().subscribe(b => {
            this.bookings = Object.assign([], b)});
    }

    public addBookingItem(): void {
        if (this.form2.invalid) {
            return;
        }
        this.bookingService.addBooking({
            id_b: 0,
            date: this.dateControl.value,
            turfirma_id: this.turfirma_idControl.value,
            voucher_id: this.voucher_idControl.value,
            quantity_b: this.quantity_bControl.value,
            price_b: this.price_bControl.value
        }).subscribe(() => {
            this.getBookings();
            this.form2.markAsUntouched();
        });
    }

    public getBooking(booking: IBooking): void {
        this.bookingService.getBookingById(booking.id_b).subscribe(() => {
            this.getBookings();
        });
    }

    public deleteBooking(booking: IBooking): void {
        this.bookingService.deleteBooking(booking.id_b).subscribe(() => {
            this.getBookings();
        });
    }

    public updateBookingItem(): void {
        if (this.form2.invalid) {
            return;
        }
        this.bookingService.updateBooking({
            id_b: this.id_bControl.value,
            date: this.dateControl.value,
            turfirma_id: this.turfirma_idControl.value,
            voucher_id: this.voucher_idControl.value,
            quantity_b: this.quantity_bControl.value,
            price_b: this.price_bControl.value
        }).subscribe(() => {
            this.getBookings();
            this.form2.markAsUntouched();
        });
    }

    get id_bControl(): AbstractControl {
        return this.form2.get('id_b');
    }

    get dateControl(): AbstractControl {
        return this.form2.get('date');
    }

    get turfirma_idControl(): AbstractControl {
        return this.form2.get('turfirma_id');
    }

    get voucher_idControl(): AbstractControl {
        return this.form2.get('voucher_id');
    }

    get quantity_bControl(): AbstractControl {
        return this.form2.get('quantity_b');
    }

    get price_bControl(): AbstractControl {
        return this.form2.get('price_b');
    }
}
