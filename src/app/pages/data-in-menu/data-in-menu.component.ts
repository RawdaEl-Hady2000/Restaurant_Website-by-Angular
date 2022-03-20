import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-data-in-menu',
  templateUrl: './data-in-menu.component.html',
  styleUrls: ['./data-in-menu.component.scss']
})
export class DataInMenuComponent implements OnInit {
  
  constructor(private param:ActivatedRoute,private orderdataservice:OrderDetailsService) { }
  // order:any;
  getId:any;
  menuData:any;
  ngOnInit(): void {
    this.getId=this.param.snapshot.paramMap.get('order_id');
    // this.getId=this.activatedrouter.snapshot.paramMap.get('id');
    // this.order=this.orderdataservice.OrderDetails;
    // this.activatedrouter.paramMap.subscribe((params:ParamMap)=>{
    //   this.getId=params.get('id');
    //   this.router.navigate(["/data-in-menu,{ order_id:getId}"]);
    // });
    console.log(this.getId,'getmenu');
    if(this.getId)
    {
      this.menuData=this.orderdataservice.OrderDetails.filter((value)=>{
        return value.order_id=this.getId;
      });
      console.log(this.menuData,'menudata>>');
    }


  }

}
