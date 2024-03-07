import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../model/user-login';
import { AuthService } from '../../service/auth.service';
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLogged=false;
  isLoginFail=false;
  userLogin!: UserLogin;
  username!:string;
  password!:string;
  roles:string[]=[];
  errMsj!:string;

  constructor( private tokenService: TokenService, private authService: AuthService, private router: Router){
    
  }

  ngOnInit():void{
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }

  OnLogin():void{
    const userLogin = new UserLogin(this.username, this.password);
     this.authService.login(userLogin).subscribe(data => {
        this.isLogged=true;
        this.isLoginFail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;
        window.location.href = '/';
        
      }, err=>{
        this.isLogged=false;
        this.isLoginFail=true;
        this.errMsj=err.mensaje;
        console.error('Error al realizar la solicitud:', err);
        
        
      })
  }
}
