import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ITurfirma } from "../shared/turfirma.interface";

@Component({
    selector: 'tl-turfirma-list-item',
    templateUrl:'./turfirma-list-item.component.html'
})

export class TurfirmaListItemComponent implements OnInit {

    constructor(){}
    @Input() public item: ITurfirma;
    @Output() public delete: EventEmitter<ITurfirma> = new EventEmitter<ITurfirma>();

    public deleteClicked(): void {
        this.delete.emit(this.item);
    }

      ngOnInit(): void {
  }

}