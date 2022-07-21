import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IVoucher } from "../shared/voucher.interface";

@Component({
    selector: 'tl-voucher-list-item',
    templateUrl:'./voucher-list-item.component.html'
})

export class VoucherListItemComponent implements OnInit {
    
    constructor(){}
    @Input() public item: IVoucher;
    @Output() public delete: EventEmitter<IVoucher> = new EventEmitter<IVoucher>();

    public deleteClicked(): void {
        this.delete.emit(this.item);
    }

      ngOnInit(): void {
  }

}
