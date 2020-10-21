import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  langs: string[] = [];
  currentLanguage = 'spanish';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('spanish');
    this.translate.use(this.currentLanguage);
    this.translate.addLangs(['spanish']);
    this.langs = this.translate.getLangs();
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
