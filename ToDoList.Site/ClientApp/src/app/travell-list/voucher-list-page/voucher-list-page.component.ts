import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { IVoucher } from "../shared/voucher.interface";
import { VoucherService } from "../shared/voucher.service";


@Component({
    templateUrl: './voucher-list-page.component.html',
    styleUrls: ['./voucher-list-page.component.scss'],
    providers: 
    [VoucherService]
})
export class VoucherListPageComponent  {
    public vouchers: IVoucher[];
    public form1: FormGroup;

    constructor(private voucherService: VoucherService) {
        this.getVouchers();
    }

    public ngOnInit(): void {
        this.form1 = new FormGroup({
            sanatorium: new FormControl(null, [Validators.required]),
            address: new FormControl(null, [Validators.required]),
            price: new FormControl(null, [Validators.required]),
            quantity: new FormControl(null, [Validators.required]),
            id: new FormControl(null, [Validators.required])
        });
        this.form1.controls["id"].setValue(0);
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
}