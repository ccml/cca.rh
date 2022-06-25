import { Component, OnInit } from '@angular/core';
import { faEdit, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { OffreEmploi } from 'src/app/backend/entities/dto';
import { OffreEmploiService } from 'src/app/backend/services/offre.emploi.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  offresEmplois: OffreEmploi[] = [];
  faPlus = faPlus;
  faEye = faEye;
  isDetail = false;
  currentOffreEmploiId = 0;

  constructor(private offreEmploiService : OffreEmploiService) { }

  ngOnInit(): void {
    this.refreshOffresEmplois();
  }

  async refreshOffresEmplois() {
    this.offreEmploiService.listAll().subscribe(
      offresEmplois => this.offresEmplois = offresEmplois,
      errors => console.log(errors)
    );
  }

  afficherDetail(offreEmploi: OffreEmploi) {
    this.currentOffreEmploiId = offreEmploi.id;
    this.isDetail = true;
  }

  afficherListe() {
    this.isDetail = false;
    this.currentOffreEmploiId = 0;
  }

}
