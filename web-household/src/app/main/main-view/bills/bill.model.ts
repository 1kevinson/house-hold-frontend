export class Bill {
  public billNumber: number;
  public month: string;
  public year: number;
  public amountDue: number;
  public amountPaid: number;
  public status: string;
  public billDate: Date;

  constructor(
    billNumber: number,
    month: string,
    year: number,
    amountDue: number,
    amountPaid: number,
    status: string,
    billDate: Date
  ) {
    this.billNumber = billNumber;
    this.month = month;
    this.year = year;
    this.amountDue = amountDue;
    this.amountPaid = amountPaid;
    this.billDate = billDate;
    this.status = status;
  }
}
