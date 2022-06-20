import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs';
import { Search } from '../search';
import { SearchService } from "../search.service";
@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
 
  origin:Search=new Search();

  constructor(private searchservice:SearchService) {
    
    
   }
  

  ngOnInit(): void {
  }
  searchroute(){
    console.log(this.origin)
    

  }


}