export class User {
  public firstName: string;
  public lastName: string;
  public fullname: string;
  public status: string;
  public email: string;
  public password: string;
  public role: string;
  public _token: string;
  public _token_expirationDate: Date;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.fullname = this.firstName + ' ' + this.lastName;
    this.role = role;
  }
}
