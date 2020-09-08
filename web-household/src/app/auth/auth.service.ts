import { User } from './user.model';

export class AuthService {
  private user: User[] = [
    new User(
      'Jean',
      'Dupont',
      'jd.montreal124@outlook.fr',
      'bizar15248963ko',
      'En règle dans les paiements'
    ),
    new User(
      'Arnaud',
      'bern',
      'jd.bernArndhuh@gmail.com',
      'bizar1sds4d7sdko',
      'En retard dans les paiements'
    ),
  ];

  getUser(index: number) {
    return index <= this.user.length - 1 ? this.user[index] : undefined;
  }
}
