import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.css'],
})
export class ProfileBoxComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authService.getUser(0);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']).then(() => console.log('logged Out !'));
  }
}
