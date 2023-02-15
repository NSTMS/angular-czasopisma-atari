import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  public allArticles = [];
  public test: any;
  articleTitles : string[] = []
  constructor(private _service: GlobalServiceService, private router: Router) {}

  async ngOnInit() {
    try {
      const data = await this._service.getData();
      if (data) {
        this.loadPhotos(data);
      } else {
        console.error('No data returned from service');
      }
    } catch (error) {
      console.error(error);
    }
  }

  loadPhotos(articles: any) {
    const articlesElement = document.getElementById('articles');
    if (articlesElement) {
      for (let i = 1; i < Object.keys(articles.czasopisma.zmienne).length; i++) {
        this.articleTitles.push(Object.keys(articles.czasopisma.zmienne)[i]);
      }
    }
  }
  navigateToYears(link:string)
  {
    this.router.navigate(
      [`biblioteka/${link}`] 
    )
  }
}
