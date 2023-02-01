import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(
    private http:HttpClient
  ) { }

  guardarMusica(form:any){
    const params =new FormData();
    params.set('title',form.title);
    params.set('title_short',form.title_short);
    params.set('preview',form.preview);
    params.set('duration',form.duration);
    params.set('cover_small',form.album.cover_small);
    return this.http.post(`${environment.urlApi}musica`,params)

  }

  mostrarMusica(){
    return this.http.get<any>(`${environment.urlApi}musica`)
  }

  deleteMusica(id:any){
      return this.http.delete(`${environment.urlApi}musica/${id}`)
  }
}
