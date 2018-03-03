import { Component } from '@angular/core';

import { ConsoPage } from '../conso/conso';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = ConsoPage;
	tab3Root = ContactPage;
	tab4Root = ProfilPage;
  constructor() {

  }
}
