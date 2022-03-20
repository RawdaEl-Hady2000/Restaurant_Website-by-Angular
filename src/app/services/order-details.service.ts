import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

// services contain all data or all details about order   (id, name ,price,img)
OrderDetails=[
    // the first order
      {
        order_id:1,
        order_name:"Burger",
        order_price: 100,
        order_img:"https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM="
      },


      // the second order
      {
        order_id:2,
        order_name:"PanCake",
        order_price: 200,
        order_img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      },

        // the  third order
        {
          order_id:3,
          order_name:"Pizza",
          order_price: 150,
          order_img:"https://media.istockphoto.com/photos/fresh-hot-pizza-with-ketchup-mustard-sauce-tomatoes-chilli-flakes-and-picture-id1353024801?b=1&k=20&m=1353024801&s=170667a&w=0&h=LpH0rNWXQBaOISg5oSv0f1PJKkSn1X6Fh6TQm9gFJCk="
        },
    
    
        // the fourth order
        {
          order_id:4,
          order_name:"Pasta",
          order_price: 80,
          order_img:"https://media.istockphoto.com/photos/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-picture-id1325172440?b=1&k=20&m=1325172440&s=170667a&w=0&h=WS2gPeU01_yzJYsiaHBhOSfrHVKMn-kBxzgsz61a2p8="
        },

        // the fourth order
        {
          order_id:5,
          order_name:"Cake",
          order_price: 100,
          order_img:"https://media.istockphoto.com/photos/homemade-coffee-cake-with-hazelnuts-picture-id1344248176?b=1&k=20&m=1344248176&s=170667a&w=0&h=qTny523Hnic5PA0WsH66_yy-H4TXm6sXWrIfkkpWJEg="
        },  
        

       // the fourth order
       {
        order_id:6,
        order_name:"Pie",
        order_price: 180,
        order_img:"https://media.istockphoto.com/photos/key-lime-pie-with-whipped-cream-rosettes-and-lime-slices-picture-id185223247?b=1&k=20&m=185223247&s=170667a&w=0&h=FEM_6Jtuj8HomlpWp3nseK8EGLuz7UGYBpTuH2uRrfo="
      },       


      
       // the fourth order
       {
        order_id:7,
        order_name:"Fish",
        order_price: 120,
        order_img:"https://images.unsplash.com/photo-1597692493640-b70139c9e4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      },  


      
       // the fourth order
       {
        order_id:8,
        order_name:"Itailan Sandwishes",
        order_price: 140,
        order_img:"https://media.istockphoto.com/photos/closeup-of-italian-deli-sandwich-with-mortadella-soft-cheese-and-picture-id1336635581?b=1&k=20&m=1336635581&s=170667a&w=0&h=3C7RSau69a7D_jZvzyB1EWHLig_z4TgSxobtsxx87vA="
      },  
 



]




}
