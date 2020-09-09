import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css'],
})
export class NavLinksComponent implements OnInit {
  navLinks: string[];

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navLinks = this.navService.getNavLinks();
  }
}
