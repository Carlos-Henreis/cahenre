import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  getBadges(): Observable<any> {
    if (!isPlatformBrowser(this.platformId)) {
      return of([]);
    }

    return this.http.get<any>('/api/badges');
  }
}
