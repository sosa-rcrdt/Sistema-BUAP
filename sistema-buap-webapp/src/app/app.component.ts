import { Component } from '@angular/core';
import { AlertOverrideService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema-buap-webapp';
    constructor(private alertOverride: AlertOverrideService) { }
}
