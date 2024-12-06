import { Component, Input } from '@angular/core';
import { AboutUs } from '../about-us/AboutUs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-list',
  imports: [CommonModule],
  templateUrl: './about-us-list.component.html',
  styleUrl: './about-us-list.component.css'
})

export class AboutUsListComponent {

  @Input() about_item : AboutUs;

  constructor() {
    this.about_item = new AboutUs();
  }
}