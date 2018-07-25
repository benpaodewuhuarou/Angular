import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
              private authService :AuthService
        ) { }

  ngOnInit() {
  }
  toserver(id:number){
    console.log('here')
    this.router.navigate(['servers',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'d'});
  }
  logIn(){
    this.authService.login();
  }
  logOut(){
    this.authService.logOut();
  }
}
