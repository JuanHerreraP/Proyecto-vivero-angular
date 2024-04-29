import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Plantas } from './plantas'

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private apiUrl: string = environment.baseUrl + '202212_MISW4104_Grupo2.json';
  constructor(private http: HttpClient) { }
    getPlantas(): Observable<Plantas[]> {
      return this.http.get<Plantas[]>(this.apiUrl);
    }
  }
