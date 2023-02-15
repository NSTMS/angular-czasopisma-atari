import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-yearbooks',
  templateUrl: './yearbooks.component.html',
  styleUrls: ['./yearbooks.component.css']
})
export class YearbooksComponent implements OnInit {
  ID: string = '';
  YEAR: string = '';
  yearbooks: any;
  ksiazkiKeys: Array<string> = []
  ksiazkiBrak: Array<any> = []
  data : any
  constructor(private _service: GlobalServiceService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    try {
      this.route.paramMap.subscribe(params => {
        this.ID = params.get('id') || '';
        this.YEAR = params.get('rok') || '';
      });

      this.data = await this._service.getData();
      if (this.data) {
        if(Object.keys(this.data.czasopisma).includes(this.ID) && this.data.czasopisma.lata[this.ID].text.split(",").includes(this.YEAR))
        {
          this.yearbooks = this.data.czasopisma[this.ID];    
           for (const [key,value] of Object.entries(this.yearbooks as Object)) {
            {
              if(key != "text"  && value.attr.rok == this.YEAR )
              {
                if(value.miniaturka != undefined)
                {
                  this.ksiazkiKeys.push(key)
                  this.ksiazkiBrak.push(null)
                }else{
                  console.log(value)
                  this.ksiazkiKeys.push("")
                  this.ksiazkiBrak.push({"text": value.attr.brak})
                }
              }
            }
          }
    console.log(this.ksiazkiKeys);
              
        }
        else{
          this.router.navigate([`/biblioteka/${this.ID}`])
        }
      } else {
        console.error('No data returned from service');
      }
    } catch (error) {
      console.error(error);
    }
  }
  navigateToBook(link: string)
  {
    this.router.navigate([`/biblioteka/${this.ID}/${this.YEAR}/${link}`])
  }
}
