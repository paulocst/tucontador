import { Component } from '@angular/core';

import { ContadorPage } from '../contador/contador';
import { SociedadPage } from '../sociedad/sociedad';
import { InicioPage } from '../inicio/inicio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = ContadorPage;
  tab3Root = SociedadPage;

  constructor() {

  }
}
