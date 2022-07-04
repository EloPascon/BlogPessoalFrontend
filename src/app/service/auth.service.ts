import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Userlogin } from '../model/Userlogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

   entrar(userlogin: Userlogin): Observable<Userlogin>{

   return this.http.post<Userlogin>('http://localhost:8080/usuario/logar', userlogin) 
   }

   cadastrar (usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuario/cadastrar', usuario)
   }

   

   }
