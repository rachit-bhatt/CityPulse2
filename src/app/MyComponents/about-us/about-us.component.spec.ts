import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsListComponent } from '../about-us-list/about-us-list.component';
import AboutJSON from './About.json';
import { AboutUs } from './AboutUs';
import { Role } from './Role';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, AboutUsComponent, AboutUsListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize about_us array with data from AboutJSON', () => {
    expect(component.about_us.length).toBe(AboutJSON.length);
    AboutJSON.forEach((record, index) => {
      expect(component.about_us[index].ID).toBe(record.ID);
      expect(component.about_us[index].FirstName).toBe(record.FirstName);
      expect(component.about_us[index].LastName).toBe(record.LastName);
      expect(component.about_us[index].Designation).toBe(record.Designation);
      expect(component.about_us[index].Position).toBe(Role[record.Designation]);
      expect(component.about_us[index].GitHubProfile).toBe(record.GitHubProfile);
      expect(component.about_us[index].LinkedInProfile).toBe(record.LinkedInProfile);
      expect(component.about_us[index].EmailAddress).toBe(record.EmailAddress);
    });
  });
});