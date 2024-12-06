import { Component } from '@angular/core';
import { DateTimeComponent } from './MyComponents/date-time/date-time.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OurServicesComponent } from './MyComponents/our-services/our-services.component';
import { OurCustomersComponent } from './MyComponents/our-customers/our-customers.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DateTimeComponent, RouterModule, OurServicesComponent, OurCustomersComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'city-pulse';
}