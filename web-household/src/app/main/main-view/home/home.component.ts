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
    this.arrayOfLinksNumbers = Object.entries(this.homeLinkNumbers);

    console.log(this.arrayOfLinksNumbers);
  }
}
