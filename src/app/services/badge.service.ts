import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async getBadges(): Promise<any[]> {
    if (!isPlatformBrowser(this.platformId)) {
      // Estamos no servidor (prerender), NÃO fazer chamada HTTP
      return [];
    }

    try {
      const badges = await this.http.get<any[]>('/badges.json').toPromise();
      return badges ?? [];
    } catch (error) {
      console.error('Erro buscando badges', error);
      return [];
    }
  }
}
