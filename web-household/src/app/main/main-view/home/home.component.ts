// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { NavService } from '../../nav-links/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeLinkNumbers;
  arrayOfLinksNumbers: any[][];

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.homeLinkNumbers = this.navService.getHomeLinksNumbers();
    this.arrayOfLinksNumbers = Object.entries(this.homeLinkNumbers).map(
      (link) => {
        switch (link[0]) {
          case 'factures':
            link[2] = 'bills';
            break;
          case 'requetes':
            link[2] = 'requests';
            break;
          case 'rendez-vous':
            link[2] = 'appointments';
            break;
          case 'maison':
            link[2] = 'house';
            break;
          case 'documents':
            link[2] = 'documents';
            break;
        }
        return link;
      }
    );
  }
}
