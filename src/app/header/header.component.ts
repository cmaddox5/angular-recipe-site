import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() pageTypeSelected = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onSelect(pageType: string) {
        this.pageTypeSelected.emit(pageType);
    }

}
