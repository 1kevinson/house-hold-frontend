import {
  AfterContentInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BillService } from './bill.service';
import { Bill } from './bill.model';
import { NgForm } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent implements OnInit {
  @ViewChild('s') searchForm: NgForm;

  bills: Array<Bill>;
  billsCount: number;

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.bills = this.billService.getBills();
    this.billsCount = this.billService.getCountBills();
  }

  findBills(billYear: number): Bill[] {
    return this.billService.getBillByYear(billYear);
  }

  onSubmit() {
    if (isNaN(this.searchForm.value.search)) {
      console.log('enter a year number');
      return;
    }

    if (this.searchForm.value.search === '') {
      this.bills = this.billService.getBills();
      return;
    }

    this.bills = this.findBills(+this.searchForm.value.search);
    this.billsCount = this.bills.length;
  }
}
