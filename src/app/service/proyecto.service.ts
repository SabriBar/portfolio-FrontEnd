import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto} from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyectoURL = 'http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'lista');
  }

  public detail(id:number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectoURL + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proyectoURL + `create`, proyecto);
  }

   public update(id: number, Proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.proyectoURL + `update/${id}`, Proyecto);
   }

   public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.proyectoURL + `delete/${id}`);
}

}

