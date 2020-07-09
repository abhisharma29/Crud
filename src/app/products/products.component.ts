import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products = [
    {
      id: "p1",
      name: "laptop",
      price: 45000,
    },
    {
      id: "p2",
      name: "Desktop",
      price: 43000,
    },
    {
      id: "p3",
      name: "Memory Card",
      price: 150,
    },
    {
      id: "p4",
      name: "Mouse",
      price: 320,
    },
  ];
  addProduct(id, name, price) {
    this.products.push({
      id: id.value,
      name: name.value,
      price: price.value,
    });
  }
}
