import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { IBooking } from "../shared/booking.interface";
import { BookingService } from '../shared/booking.service';

@Component({
    templateUrl: './booking-list-page.component.html',
    styleUrls: ['./booking-list-page.component.scss'],
    providers: 
    [BookingService]
})
export class BookingListPageComponent  {
    public bookings: IBooking[];
    public form2: FormGroup;

    constructor(private bookingService: BookingService) {
        this.getBookings();
    }
    public ngOnInit(): void {
        this.form2 = new FormGroup({
            date: new FormControl(null, [Validators.required]),
            turfirma_id: new FormControl(null, [Validators.required]),
            voucher_id: new FormControl(null, [Validators.required]),
            quantity_b: new FormControl(null, [Validators.required]),
            price_b: new FormControl(null, [Validators.required]),
            id_b: new FormControl(null, [Validators.required])
        });
        this.form2.controls["id_b"].setValue(0);
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