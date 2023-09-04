import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
 
  constructor(private userService: UserService, private router:Router) { }
  
  
  loginUser(email: string, password: string) {
    let login = { email: email, password: password, };
    console.log(login);

    
    if (!email || !password || email == '' || password == '') {
      alert(`Merci de renseigner tous les champs`);
    } else {
      this.userService.login(login).subscribe((resp: Token) => {
            
        // console.log(resp.data);
        localStorage.setItem('token', resp.data);
        // console.log('local:' , this.localStorage.getData('token'));

        this.router.navigate([`/admin/log`]);
      });
    }

    // dans le subscribe un objet de type : 
    // {
    //   next : () =>{},
    //   error : () => {}
    // }
  }
}
