import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: string;
  constructor() { }

  ngOnInit() {
    this.homeData = this.getHomeData();
  }

  getHomeData(): string {
    return 'Team Smiley is the group of individuals who like to share smiles.';
  }

}
