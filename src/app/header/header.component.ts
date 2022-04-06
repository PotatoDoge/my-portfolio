import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  menuItems: MenuItem[] = [
    {
      label: 'About me',
      icon: 'login',
      id: 'about-me'
    },
    {
      label: 'Education',
      icon: 'help',
      id: 'education'
    },
    {
      label:"Technologies",
      icon:"help",
      id: 'tech'
    },
    {
      label: 'Projects',
      icon: 'attach_money',
      id: 'projects'
    },
    {
      label: 'Work Experience',
      icon: 'slideshow',
      id:'work-exp'
    },
    {
      label: 'Social Media',
      icon: 'notes',
      id: 'social-med'
    },
    {
      label: 'Contact Me',
      icon: 'slideshow',
      id:'contact'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  goToSection(id: string){
    // ver como scrollear al div del id que se fue pasado
  }

}
