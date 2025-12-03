import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IceCream } from '../models/ice-cream';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {

  private readonly API_URL = 'http://localhost:3000/icecreams';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IceCream[]> {
    return this.http.get<IceCream[]>(this.API_URL);
  }

  create(iceCream: IceCream): Observable<IceCream> {
    return this.http.post<IceCream>(this.API_URL, iceCream);
  }

  update(iceCream: IceCream): Observable<IceCream> {
    return this.http.put<IceCream>(`${this.API_URL}/${iceCream.id}`, iceCream);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
