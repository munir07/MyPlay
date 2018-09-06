import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../services/starwars.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategoryName: string = "";
  results:any;

  constructor(private swSvc: StarwarsService, private activatedRoute: ActivatedRoute, private route:Router) { }

  ngOnInit() {
    console.log("in sub category")
    this.subCategoryName = this.activatedRoute.snapshot.params.catName;
    console.log("in sub category -> ", this.subCategoryName);
    this.swSvc.getListOf(this.subCategoryName)
       .subscribe((data: any) => {
          this.results = data.results;
       })
  }

  getDetails(id:string) {
    this.route.navigate(['/Detail', this.subCategoryName, id]);
  }

  goBack() {
    this.route.navigate(['/Category']);
  }
}
