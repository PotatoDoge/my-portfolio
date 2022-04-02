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
      icon: 'login'
    },
    {
      label: 'Education',
      icon: 'help'
    },
    {
      label:"Technologies",
      icon:"help"
    },
    {
      label: 'Projects',
      icon: 'attach_money'
    },
    {
      label: 'Work Experience',
      icon: 'slideshow'
    },
    {
      label: 'Social Media',
      icon: 'notes'
    },
    {
      label: 'Contact Me',
      icon: 'slideshow'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
