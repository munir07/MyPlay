import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route:Router) { }

  catName: string = "";
  ngOnInit() { }

  getCharacters() {
    this.catName = "people";
    this.route.navigate(['/SubCategory',this.catName])
  }

  getFilms() {
      this.catName = "films";
      this.route.navigate(['/SubCategory',this.catName])
  }
}
