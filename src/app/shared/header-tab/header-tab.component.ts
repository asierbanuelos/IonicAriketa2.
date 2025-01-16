import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss'],
  standalone:false
})
export class HeaderTabComponent  implements OnInit {

 @Input() titulua!:string; /* creamos la variable para guardar los titulos */

  constructor() { }

  ngOnInit() {}

}
