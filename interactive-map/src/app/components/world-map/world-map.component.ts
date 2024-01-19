import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
countryName = '';
countryData:any = null;
 constructor(private apiservice:ApiService){}
 getCounrtryData(){
  this.apiservice.getCountryData(this.countryName).subscribe((data:any)=>{
    this.countryData=data[1][0];
  }
  )
 }

 onMouseOver(event:any):void{
  let country = event.target.id;
  this.countryName = country;
  this.getCounrtryData();
 }
}
