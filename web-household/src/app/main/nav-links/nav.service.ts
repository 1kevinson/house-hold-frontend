export class NavService {
  private navs: string[] = [
    'Accueil',
    'Factures',
    'Requetes',
    'Rendez-vous',
    'Maison',
    'Documents',
  ];

  hommeLinksNumbers = {
    factures: 15,
    requetes: 4,
    'rendez-vous': 3,
    maison: 11,
    documents: 1,
  };

  getNavLinks() {
    //return a copy of the original array
    return this.navs.slice();
  }

  getHomeLinksNumbers() {
    return this.hommeLinksNumbers;
  }
}
