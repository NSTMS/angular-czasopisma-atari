import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string  = 'two-way-binding';
  textValue:string = ""
  plainText = new Components("text", true)
  specialEvent = new Components("special",false)
  time: string = ""
  date:string = ""
  @ViewChild('input',{static:false}) input : any;


  isNumeric(num : any){
    return !isNaN(num)
  }
  
  checkValue(value:string)
  {    
    let regex =/^([0-9]+)(\.([0-9]{0,3})?)?$/;
    if(!value)
    {
      this.textValue = '' 
    }
    if(!regex.test(value))
    {
      this.input.nativeElement.value = this.textValue
    }
    else{
      this.textValue = value;
    }
    if(this.textValue == "666.666")
    { 
      this.router.navigate(['biblioteka'])
    }
    else{
      this.router.navigate(['/'])
    }
  }

  ngOnInit(){
    setInterval(() =>{
      const currentDate : Date = new Date();
      this.date = currentDate.toLocaleDateString();
      this.time = currentDate.toLocaleTimeString();
       }, 1000);  
    }

 constructor(private router: Router){
  this.textValue = ""
 }
}

class Components
{
  name: string;
  isVisible:boolean;

  constructor(nameValue : string,  visible: boolean){
    this.name = nameValue;
    this.isVisible = visible;
  }
}
