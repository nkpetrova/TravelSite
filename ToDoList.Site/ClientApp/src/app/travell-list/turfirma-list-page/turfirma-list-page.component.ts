import { Component, OnInit } from '@angular/core';
import { ITurfirma } from "../shared/turfirma.interface";
import { TurfirmaService } from "../shared/turfirma.service";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './turfirma-list-page.component.html',
    styleUrls: ['./turfirma-list-page.component.scss'],
    providers: 
    [TurfirmaService]
})
export class TurfirmaListPageComponent  {
    public turfirmas: ITurfirma[];

    public form: FormGroup;


    constructor(private turfirmaService: TurfirmaService) {
        this.getTurfirmas();
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
        this.form.controls["id_t"].setValue(0);

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
}