import { User } from './user.model';

export class AuthService {
  private user: User[] = [
    new User(
      'Jean',
      'Dupont',
      'jd.montreal124@outlook.fr',
      'bizar15248963ko',
      'En règle dans les paiements',
      'TENANT'
    ),
    new User(
      'Arnaud',
      'bern',
      'jd.bernArndhuh@gmail.com',
      'bizar1sds4d7sdko',
      'En retard dans les paiements',
      'OWNER'
    ),
    new User(
      'Marc',
      'Twain',
      'marky.twainy@gmail.com',
      'bizar1sds4d7sdko',
      'En retard dans les paiements',
      'OWNER'
    ),
  ];

  loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  // Check if the user is Authenticated on server
  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.login());
      }, 1000);
    });
  }

  getUser(index: number) {
    return index <= this.user.length - 1 ? this.user[index] : undefined;
  }
}
