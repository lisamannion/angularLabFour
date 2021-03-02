import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  presidents: string[] = ["Higgins", "McAleese", "Robinson", "Hillery", "ODalaigh"];

  mypresidents: any[] = [
    { name: "Higgins", term: "2011-" },
    { name: "McAleese", term: "1997-2011" },
    { name: "Robinson", term: "1990-1997" },
    { name: "Hillery", term: "1976-1990" },
    { name: "ODalaigh", term: "1974-1976" }];

}
