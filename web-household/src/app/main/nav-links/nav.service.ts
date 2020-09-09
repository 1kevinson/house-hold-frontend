export class NavService {
  private navs: string[] = [
    'Accueil',
    'Factures',
    'Requetes',
    'Rendez-vous',
    'Maison',
    'Documents',
  ];

  getNavLinks() {
    //return a copy of the original array
    return this.navs.slice();
  }
}
