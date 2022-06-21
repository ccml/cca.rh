import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'cca.rh.frontend';

  constructor(
    private translate: TranslateService
  ) {}  

  ngOnInit() {
    this.initMultilanguage();
  }

  initMultilanguage() {
    this.translate.addLangs(['en', 'fr', 'nl', 'de']);
    this.translate.setDefaultLang('fr');
  }

}
