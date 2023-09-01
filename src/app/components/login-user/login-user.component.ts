import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
  constructor(private userService: UserService) {}

  loginUser(email: string, password: string) {
    let login = {
      email: email,
      password: password,
    };

    console.log(login);

    if (!email||!password||email == '' || password == '') {
      alert(`Merci de renseigner tous les champs`);
    } else {
      this.userService.login(login).subscribe((data) => {

          console.log(data);

          alert(`Le compte est connecté.`);
        
      });
    }
  }
}
