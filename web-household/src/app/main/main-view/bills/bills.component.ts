import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BillService } from './bill.service';
import { Bill } from './bill.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent implements OnInit {
  bills: Array<Bill>;
  billsCount: number;

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.bills = this.billService.getBills();
    this.billsCount = this.billService.getCountBills();
    console.log(this.bills);
  }
}
