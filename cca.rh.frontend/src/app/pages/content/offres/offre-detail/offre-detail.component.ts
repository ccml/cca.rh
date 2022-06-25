import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { EnumsList, OffreEmploi, RegimeTravail, StatutOffre, TypeEngagement } from 'src/app/backend/entities/dto';
import { EnumsService } from 'src/app/backend/services/enums.service';
import { OffreEmploiService } from 'src/app/backend/services/offre.emploi.service';

@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styleUrls: ['./offre-detail.component.scss']
})
export class OffreDetailComponent implements OnInit, OnChanges {

  @Input() offreEmploiId: number | undefined;


  faCheck = faCheck;

  offreEmploi: OffreEmploi | undefined;
  enumsList: EnumsList | undefined;

  offreEmploiFormGroup: FormGroup;

  constructor(
    private enumsService: EnumsService,
    private offreEmploiService: OffreEmploiService,
    private fb: FormBuilder
  ) { 
    this.offreEmploiFormGroup = this.fb.group(
      {
        numero :  ['', Validators.required ],
        titre : ['', Validators.required ],
        statut :  [StatutOffre.EN_COURS_ELABORATION, Validators.required ],
        typeEngagement :  [TypeEngagement.DUREE_INDETERMINEE, Validators.required ],
        lieuTravail :  ['', Validators.required ],
        regimeTravail :  [RegimeTravail.REGIME_100, Validators.required ],
        idDiplome :  [0, Validators.required ],
        detail :  ['', Validators.required ],
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.enumsService.getEnumsList().then(
      enumsList => {
        this.enumsList = enumsList;
        this.refreshOffreEmploi();
      }
    );
  }

  async refreshOffreEmploi() {
    if(this.offreEmploiId) {
      this.offreEmploiService.getById(this.offreEmploiId).subscribe(
        offreEmploi => this.refreshForm(offreEmploi),
        errors => console.log(errors)        
      );
    }
  }

  refreshForm(offreEmploi: OffreEmploi) {
    this.offreEmploiFormGroup = this.fb.group(
      {
        numero :  [offreEmploi.numero, Validators.required ],
        titre : [offreEmploi.titre, Validators.required ],
        statut :  [offreEmploi.statut, Validators.required ],
        typeEngagement :  [offreEmploi.typeEngagement, Validators.required ],
        lieuTravail :  [offreEmploi.lieuTravail, Validators.required ],
        regimeTravail :  [offreEmploi.regimeTravail, Validators.required ],
        idDiplome :  [0, Validators.required ],
        detail :  [offreEmploi.detail.contenuLibre, Validators.required ],
      }
    );
    this.offreEmploi = offreEmploi;
  }

}
