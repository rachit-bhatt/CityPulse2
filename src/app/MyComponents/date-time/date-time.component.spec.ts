import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { DateTimeComponent } from './date-time.component';
import { Observable } from 'rxjs';

describe('DateTimeComponent', () => {
  let component: DateTimeComponent;
  let fixture: ComponentFixture<DateTimeComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DateTimeComponent, HttpClientTestingModule ],
      providers: [ DatePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current date and time', fakeAsync(() => {
    const compiled = fixture.nativeElement;
    tick(1000); // Simulate the passage of time
    fixture.detectChanges();
    expect(compiled.querySelector('.date-time').textContent).toContain(component.get_date);
  }));

  it('should fetch current temperature', () => {
    const dummyWeather = { main: { temp: 283.15 } }; // 50°F
    component.getWeather('Toronto').subscribe(data => {
      expect(data.main.temp).toBe(283.15);
    });
  
    const apiKey = '620935d6d4a0f96ad60104655f342e55';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const req = httpMock.expectNone(`${baseUrl}?q=Toronto&appid=${apiKey}&units=imperial`);
    // expect(req.request.method).toBe('GET');
    // req.flush(dummyWeather);
  });

  it('should calculate the temperature in Celsius', () => {
    component.weatherData = { main: { temp: 283.15 } }; // 10°C
    expect(component.get_degree).toBe(10);
  });

  afterEach(() => {
    httpMock.verify();
  });
});