import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-cadastraruser',
  templateUrl: './cadastraruser.component.html',
  styleUrls: ['./cadastraruser.component.css']
})
export class CadastraruserComponent implements OnInit {

  error: any;
  teste: any;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password1: string, password2: string) {

   let sub= this.authenticationService.signup(username, email, password1, password2)
     .subscribe(
      success => {
         console.log("POST call in success",success)
        this.router.navigate(['/cadastraruser'])
      },
      error => {
        console.log("POST call in error", error);
      },
      ()=>{ console.log(sub)}

    );
    


  }

}
