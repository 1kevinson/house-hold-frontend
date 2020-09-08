import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css'],
})
export class NavLinksComponent implements OnInit {
  navLinks: string[] = [
    'Accueil',
    'Factures',
    'Requetes',
    'Rendez-vous',
    'Maison',
    'Documents',
  ];

  constructor() {}

  ngOnInit(): void {}
}
