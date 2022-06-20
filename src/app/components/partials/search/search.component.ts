import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  
  constructor(activatedRoute:ActivatedRoute,private router:Router,private httpClient:HttpClient) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
   }

  ngOnInit(): void {
  }
  // getData(destination:string){
  //   this.httpClient.post('http://localhost:8181/locationdetails',destination).subscribe(
  //     response=>{
  //       console.log(response);
  //     }
  //   )
  // }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }
}
function next(next: any, arg1: (response: any) => void) {
  throw new Error('Function not implemented.');
}

