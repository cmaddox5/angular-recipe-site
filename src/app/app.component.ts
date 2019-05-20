import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    pageType: string = 'recipes';

    onPageTypeSelected(pageType: string) {
        this.pageType = pageType;
    }
}
