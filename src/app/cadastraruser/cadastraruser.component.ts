import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-cadastraruser',
  templateUrl: './cadastraruser.component.html',
  styleUrls: ['./cadastraruser.component.css']
})
export class CadastraruserComponent implements OnInit {

  error: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password1: string, password2: string) {
    this.authenticationService.signup(username, email, password1, password2).subscribe(
      success => this.router.navigate(['/']),
      error => this.error = error
    );
  }

}
