import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faEdit, faPlus, faRemove } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Diplome } from 'src/app/backend/entities/dto';
import { DiplomeService } from 'src/app/backend/services/diplome.service';

declare var window: any;

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
  faCheck = faCheck;

  modalOptions: NgbModalOptions;

  diplomeFormGroup?: FormGroup;
  currentMode: string = '';
  formTitle: string = '';

  constructor(
    private diplomeService: DiplomeService,
    private modalService: NgbModal,
    private fb: FormBuilder) { 

      this.modalOptions = {
        backdrop:'static',
        backdropClass:'customBackdrop'
      }

      this.resetForm();

    }

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

  isAdd(mode: string): boolean { return mode === 'Add'; }
  isEdit(mode: string): boolean { return mode === 'Edit'; }
  isRemove(mode: string): boolean { return mode === 'Remove'; }

  open(content: any, mode: string, diplome?: Diplome) {
    if(this.isAdd(mode)) {

      this.resetForm();
      this.currentMode = mode;
      this.formTitle = 'titreAjout';

      this.modalService.open(content, this.modalOptions).result.then((validate: any) => {
        if((validate === true) && (this.diplomeFormGroup?.valid)) {
            this.addDiplome(<Diplome>{ titre: this.diplomeFormGroup?.controls['titre'].value });
        } else {
          this.resetForm();
        }
      }, (reason) => {
        if((reason === true) && (this.diplomeFormGroup?.valid)) {
          this.addDiplome(<Diplome>{ titre: this.diplomeFormGroup?.controls['titre'].value });
        } else {
          this.resetForm();
        }
      });

    } else if(diplome) {

      if(this.isEdit(mode)) {

        this.diplomeFormGroup = this.fb.group(
          {
            titre : [diplome?.titre, Validators.required ]
          }
        );  
        this.formTitle = 'titreUpdate';

      } else if(this.isRemove(mode)) {

        this.diplomeFormGroup = this.fb.group(
          {
            titre : [diplome?.titre, Validators.required ]
          }
        );  
        this.formTitle = 'titreRemove';

      }
      this.currentMode = mode;

      this.modalService.open(content, this.modalOptions).result.then((validate: any) => {
        if((validate === true) && (this.diplomeFormGroup?.valid)) {
          if(this.isEdit(mode)) {
            diplome.titre = this.diplomeFormGroup?.controls['titre'].value;
            this.updateDiplome(diplome);
          } else if(this.isRemove(mode)) {
            this.deleteDiplome(diplome);
          }
        } else {
          this.resetForm();
        }
      }, (reason) => {
        if((reason === true) && (this.diplomeFormGroup?.valid)) {
          if(this.isEdit(mode)) {
            diplome.titre = this.diplomeFormGroup?.controls['titre'].value;
            this.updateDiplome(diplome);
          } else if(this.isRemove(mode)) {
            this.deleteDiplome(diplome);
          }
        } else {
          this.resetForm();
        }
      });

    }
  }

  resetForm() {
    this.currentMode = '';
    this.diplomeFormGroup = this.fb.group(
      {
        titre : ['', Validators.required ]
      }
    );
    this.formTitle = '';
  }

  async addDiplome(diplome: Diplome) {
    this.diplomeService.ajouterDiplome(diplome).subscribe(
      addedDiplome => this.diplomes.push(addedDiplome),
      error => console.log(error)
    );
  }  

  async updateDiplome(diplome: Diplome) {
    this.diplomeService.modifierDiplome(diplome).subscribe(
      updatedDiplome => diplome.titre = updatedDiplome.titre,
      error => console.log(error)
    );
  }

  async deleteDiplome(diplome: Diplome) {
    this.diplomeService.supprimerDiplome(diplome.id).subscribe(
      estSupprime => {
        if(estSupprime) {
          const index = this.diplomes.indexOf(diplome, 0);
          if (index > -1) {
            this.diplomes.splice(index, 1);
          }
        }
      },
      error => console.log(error)
    );
  }

}
