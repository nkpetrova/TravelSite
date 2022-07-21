import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IBooking } from "../shared/booking.interface";

@Component({
    selector: 'tl-booking-list-item',
    templateUrl:'./booking-list-item.component.html'
})

export class BookingListItemComponent implements OnInit {

    constructor(){}
    @Input() public item: IBooking;
    @Output() public delete: EventEmitter<IBooking> = new EventEmitter<IBooking>();

    public deleteClicked(): void {
        this.delete.emit(this.item);
    }

      ngOnInit(): void {
  }

}
