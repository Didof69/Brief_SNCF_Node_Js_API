import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css'],
})
export class SignupUserComponent {
  constructor(private userService: UserService) {}

  signUpUser(pseudo: string, email: string, password: string) {
    let user = {
      pseudo: pseudo,
      email: email,
      password: password,
    };

    console.log(user);

    if (pseudo == '' || email == '' || password == '') {
      alert(`Merci de renseignr tous les champs`);
    } else {
      this.userService.signUp(user).subscribe((data) => {
        if (data.status == 'OK') {
          console.log(data.data);
          
          alert(`Le compte de ${data.data.pseudo} a été créé.`);
        }
      });
    }
  }
}
