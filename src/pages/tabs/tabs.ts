import { Component } from '@angular/core';

import { ContadorPage } from '../contador/contador';
import { ContactPage } from '../contact/contact';
import { InicioPage } from '../inicio/inicio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = ContadorPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
