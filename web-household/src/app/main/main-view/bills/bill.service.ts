import { Bill } from './bill.model';
import * as faker from 'faker/locale/fr';

export class BillService {
  private bills: Array<Bill> = [];

  generateBills(): Bill[] {
    const newBills = [];

    for (let i = 1; i <= 10; i++) {
      const amount: number = faker.commerce.price();
      if (i > 4 && i < 8) {
        const newBill = new Bill(
          i,
          faker.date.month(),
          2018,
          amount,
          amount - 10.0,
          'INCOMPLETE',
          faker.date.recent().toLocaleDateString('fr')
        );
        newBills.push(newBill);
      } else {
        const newBill = new Bill(
          i,
          faker.date.month(),
          2018,
          amount,
          amount,
          'COMPLETE',
          faker.date.recent().toLocaleDateString('fr')
        );
        newBills.push(newBill);
      }
    }
    return newBills;
  }

  getBills() {
    return this.generateBills();
  }

  getCountBills() {
    this.bills = this.getBills();
    return this.bills.length;
  }
}