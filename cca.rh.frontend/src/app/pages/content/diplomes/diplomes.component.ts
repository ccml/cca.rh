import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus, faRemove } from '@fortawesome/free-solid-svg-icons';
import { Diplome } from 'src/app/backend/entities/dto';
import { DiplomeService } from 'src/app/backend/services/diplome.service';

@Component({
  selector: 'app-diplomes',
  templateUrl: './diplomes.component.html',
  styleUrls: ['./diplomes.component.scss']
})
export class DiplomesComponent implements OnInit {

  diplomes: Diplome[] = [];
  faPlus = faPlus;
  faEdit = faEdit;
  faRemove = faRemove;

  constructor(private diplomeService: DiplomeService) { }

  ngOnInit(): void {
    this.refreshDiplomeList();
  }

  refreshDiplomeList() {
    this.diplomeService.listAll().subscribe(
      data => {
        this.diplomes = data;
      }
    );
  }

}
