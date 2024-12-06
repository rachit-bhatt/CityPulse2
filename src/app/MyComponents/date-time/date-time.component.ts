import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-date-time',
  imports: [HttpClientModule],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.css',
  providers: [DatePipe, HttpClient]
})

export class DateTimeComponent {
  private apiKey = '620935d6d4a0f96ad60104655f342e55';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private intervalId: any;

  public format: string = 'mediumDate';
  public today: Date = new Date();

  public weatherData: any;
  public city: string = 'Toronto';

  public user: any;

  public get get_date(): string {
    let formatted_date = this.datePipe.transform(this.today, 'yyyy-MM-dd HH:mm:ss');
    return formatted_date ? formatted_date : this.today.toDateString();
  }

  public get get_degree(): number {
    let formatted_degree = (this.weatherData?.main?.temp - 273.15);
    formatted_degree = Math.round(formatted_degree * 100) / 100;
    return formatted_degree ? formatted_degree : 0;
  }

  // constructor(private datePipe: DatePipe, private http: HttpClient, private authService: AuthService) {
  constructor(private datePipe: DatePipe, private http: HttpClient) {

  }

  ngOnInit() {
    //#region Current Clock Interval

    this.intervalId = setInterval(() => {
      this.today = new Date();
    }, 1000);

    //#endregion

    //#region Google Authentication

    // this.authService.getUser().subscribe((user: any) => {
    //   this.user = user;
    //   if (user) {
    //     this.getWeather(this.city).subscribe(data => {
    //       this.weatherData = data;
    //     });
    //   }
    // });

    //#endregion

    //#region Weather Data

    this.getWeather('Toronto')
    .subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });

    //#endregion
  }

  getWeather(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metrics'
    };

    return this.http.get(this.baseUrl, { params });
  }

  // login() {
  //   this.authService.login();
  // }
  
  // logout() {
  //   this.authService.logout();
  // }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}