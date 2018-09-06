import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../services/starwars.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  subCategoryName: string = "";
  itemId: string = "";
  results:any;

  constructor(private swSvc: StarwarsService, private activatedRoute: ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this.subCategoryName = this.activatedRoute.snapshot.params.catName;
    this.itemId = this.activatedRoute.snapshot.params.itemId;
    console.log("cat = ", this.subCategoryName);
    console.log("id = " + this.itemId);
    this.swSvc.getDetails(this.subCategoryName, this.itemId)
       .subscribe((data: any) => {
          this.results = data;
       })
  }

  goBack() {
    this.route.navigate(['/SubCategory',this.subCategoryName])
  }

}
