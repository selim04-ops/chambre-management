import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../models/chambre.model';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private apiUrl = 'http://192.168.181.141:8089/tpfoyer/chambre';

  constructor(private http: HttpClient) { }

  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/retrieve-all-chambres`);
  }

  getChambre(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.apiUrl}/retrieve-chambre/${id}`);
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiUrl}/add-chambre`, chambre, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  removeChambre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-chambre/${id}`);
  }

  modifyChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiUrl}/modify-chambre`, chambre, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  
  trouverChambresSelonType(tc: string): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/trouver-chambres-selon-typ/${tc}`);
  }

  trouverChambreSelonEtudiant(cin: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.apiUrl}/trouver-chambre-selon-etudiant/${cin}`);
  }
}
