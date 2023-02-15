import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  ID: string = '';
  YEAR : string = '';
  NUMER : string = '';
  informations : any = undefined;
  book : any;
  bookValues : string = ""
  data : any
  constructor(private _service: GlobalServiceService, private route: ActivatedRoute, private router : Router ) {}

  async ngOnInit() {
    try {
      this.route.paramMap.subscribe(params => {
        this.ID = params.get('id') || '';
        this.YEAR = params.get('rok') || '';
        this.NUMER = params.get("numer") || "";
      });

      this.data = await this._service.getData();
      if (this.data) {     
        if(Object.keys(this.data.czasopisma).includes(this.ID) && 
        this.data.czasopisma.lata[this.ID].text.split(",").includes(this.YEAR) && 
        this.data.czasopisma[this.ID] && Object.keys(this.data.czasopisma[this.ID]).includes(this.NUMER))
        {
          this.book = this.data.czasopisma[this.ID];    
          for (const [key,value] of Object.entries(this.book as Object)) {
            {
              if(key != "text" && value.miniaturka !== undefined)
              {
                this.informations = value;
                this.bookValues = key;
              }
            }
          }
        }
        else{
          this.router.navigate(['/biblioteka'])
        }
      } else {
        console.error('No data returned from service');
      }
    } catch (error) {
      console.error(error);
    }
  }
}
