import { User } from './user.model';
import { ROLES, STATUS } from './user.enum';

export class AuthService {
  private users: User[] = [
    new User(
      'Jean',
      'Dupont',
      'test@outlook.fr',
      'testtest',
      ROLES.TENANT,
      STATUS.INACTIVE,
      ''
    ),
    new User(
      'Arnaud',
      'bern',
      'test2@outlook.fr',
      'testtest2',
      ROLES.TENANT,
      STATUS.INACTIVE,
      ''
    ),
    new User(
      'Marc',
      'Twain',
      'marky.twainy@gmail.com',
      'bizar1sds4d7sdko',
      ROLES.OWNER,
      STATUS.ACTIVE,
      ''
    ),
  ];

  loggedIn: boolean = false;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  onLoginUser() {}

  onSignupUser(user: any) {
    const newUser = new User(
      user.firstname,
      user.lastname,
      user.email,
      user.password,
      user.role,
      STATUS.INACTIVE,
      ''
    );
    this.users.push(newUser);
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
    return index <= this.users.length - 1 ? this.users[index] : undefined;
  }
}
