import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Carousel } from '../carousel';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  images:Carousel[] = [
    {
      imageSrc: 'assets/images/me.jpeg',
      imageAlt: 'me'
    },

    {
      imageSrc: 'assets/images/foto-emma.jpeg',
      imageAlt: 'emma'
    },
    {
      imageSrc: 'assets/images/foto-perros.jpeg',
      imageAlt: 'fotoPerros'
    },
    {
      imageSrc: 'assets/images/foto-algas.jpeg',
      imageAlt: 'algas'
    }
  ];
  
  selectedIndex = 0;

  @Input() indicators = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  changeImageOnClick(){
    if(this.selectedIndex < this.images.length-1){
      this.selectedIndex++;
    }
    else if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }
  }

}
