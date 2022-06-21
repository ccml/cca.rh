import { Component, OnInit } from '@angular/core';
import { faCertificate, faGraduationCap, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faGraduationCap = faGraduationCap;
  faCertificate = faCertificate;
  faPeopleGroup = faPeopleGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
