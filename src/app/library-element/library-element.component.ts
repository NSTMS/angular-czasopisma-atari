import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-library-element',
  templateUrl: './library-element.component.html',
  styleUrls: ['./library-element.component.css']
})
export class LibraryElementComponent implements OnInit {
  ID: string = '';
  libraryData: any;
  names: string[] = [];

  constructor(
    private _service: GlobalServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      this.route.paramMap.subscribe(params => {
        this.ID = params.get('id') || '';
      });

      const data = await this._service.getData();
      if (data) {        
        if(Object.keys(data.czasopisma).includes(this.ID))
        {
          this.libraryData = data.czasopisma.lata[this.ID].text.split(",") ;
          // console.log(this.libraryData)
        }
        else{
          this.router.navigate([`/biblioteka`])
        }

      } else {
        console.error('No data returned from service');
      }
    } catch (error) {
      console.error(error);
    }
  }

  directToYearBooks(years: string) {
    this.router.navigate([`biblioteka/${this.ID}/${years}`]);
  }
}
