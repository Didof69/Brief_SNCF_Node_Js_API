import { Component } from '@angular/core';
import { Token } from 'src/app/models/token';
import { LocalService } from 'src/app/services/local.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
 
  constructor(private userService: UserService,
              private localStorage: LocalService) { }
  
  loginUser(email: string, password: string) {
    let login = {
      email: email,
      password: password,
    };

    console.log(login);

    if (!email || !password || email == '' || password == '') {
      alert(`Merci de renseigner tous les champs`);
    } else {
      this.userService.login(login).subscribe((resp: Token) => {
            
        // console.log(resp.data);
        this.localStorage.saveData('token', resp.data);
        console.log('local:' , this.localStorage.getData('token'));
        
        alert(`Le compte est connecté.`);
      });
    }

    // dans le subscribe un objet de type : 
    // {
    //   next : () =>{},
    //   error : () => {}
    // }
  }
}
