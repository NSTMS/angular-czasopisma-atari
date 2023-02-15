import { Injectable } from '@angular/core';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';
  import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  public fetchedData: any;

  constructor(private ngxXmlToJsonService: NgxXmlToJsonService,private http: HttpClient) {}

  async getData() {
    try {
      const options = {
        textKey: 'text',
        attrKey: 'attr',
        cdataKey: 'cdata'
      }
      let response : string = "";
      await this.http.get('../assets/czasopisma.xml', {responseType : 'text'}).toPromise().then((data:any)=>{
        response = data;   
      })
      // console.log('Response:', response);
      debugger;
      const jsonObj = this.ngxXmlToJsonService.xmlToJson(response, options);
      this.fetchedData = jsonObj;
      // console.log('Fetched data:', this.fetchedData);
    } catch (error) {
      console.error('Error:', error);
      this.fetchedData = null;
    }
  
    return this.fetchedData;
  }
}
