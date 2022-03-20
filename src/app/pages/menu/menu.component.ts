import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  orderData:any;
  ngOnInit(): void {
    this.orderData=this.service.OrderDetails;
  }

}
