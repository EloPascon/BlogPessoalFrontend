import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userlogin } from '../model/Userlogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
 
  userlogin : Userlogin = new this.userlogin
  usuario:Usuario = new Usuario
  confirmSenha: string
  tipoUsuarios: string

  constructor(
    private authService : AuthService,
    private router : Router

  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

confirmarSenha(event: any) {
  this.confirmSenha = event.target.value

}

tipoUser(event: any) {
  this.tipoUsuarios = event.target.value

}
cadastrar(){
  this.tipoUsuarios= event.target.value
   
  if(this.usuario.senha != this.confirmSenha){
    alert('senhas diferentes!')
  } else {
  this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)) => {
    this.usuario = resp
    this.router(['/entrar'])
    alert ('usuario cadastrado com sucesso')
  }
}

}
