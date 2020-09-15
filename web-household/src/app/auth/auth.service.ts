import { User } from './user.model';
import { ROLES, STATUS } from './user.enum';

export class AuthService {
  private users: User[] = [
    new User(
      'Jean',
      'Dupont',
      'test@outlook.fr',
      '1234',
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
  userLoggedData: any;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

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
    return new Promise((resolve, reject) => {
      this.users.push(newUser);
      resolve('Saved');
      reject(new Error('Unable to save user'));
    });
  }

  onLoginUser(user: any) {
    const foundedUser = this.users.filter((userEl) => {
      return userEl.email === user.email && userEl.password === user.password;
    });

    return new Promise((resolve) => {
      resolve({
        data:
          foundedUser.length == 1
            ? foundedUser
            : 'Vos identifiants ne sont pas corrects',
      });
    });
  }

  // Check if the user is Authenticated on server
  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }

  getUser(index: number) {
    return index <= this.users.length - 1 ? this.users[index] : undefined;
  }
}
