export class User {
  public firstName: string;
  public lastName: string;
  public fullname: string;
  public accountStatus: string;
  public email: string;
  public password: string;
  public role: string;
  public billStatus: string;
  public _token: string;
  public _token_expirationDate: Date;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
    accountStatus: string,
    billStatus: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.fullname = this.firstName + ' ' + this.lastName;
    this.accountStatus = accountStatus;
    this.role = role;
    this.billStatus = billStatus;
  }
}
