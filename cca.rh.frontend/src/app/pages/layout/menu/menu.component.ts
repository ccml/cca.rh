import { Component, OnInit } from '@angular/core';
import { faCertificate, faGraduationCap, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  faGraduationCap = faGraduationCap;
  faCertificate = faCertificate;
  faPeopleGroup = faPeopleGroup;

  ngOnInit(): void {
  }

}
