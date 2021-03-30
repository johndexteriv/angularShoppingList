import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template:
    '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./load-spinner.component.css'],
})
export class LoadingSpinnerComponent {}
