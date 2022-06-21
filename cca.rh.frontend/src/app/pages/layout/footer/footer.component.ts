import { Component, OnInit } from '@angular/core';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isAuthenticated = false;

  faSignIn = faSignIn;
  faSignOut = faSignOut;

  constructor() { }

  ngOnInit(): void {
  }

  signIn() {
    this.isAuthenticated = true;
  }

  signOut() {
    this.isAuthenticated = false;
  }

}
