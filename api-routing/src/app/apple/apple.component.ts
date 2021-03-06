import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {



  ngOnInit() {
  }

  private articles = [];
  private url = "https://newsapi.org/v2/everything?q=apple&from=2020-02-12&to=2020-02-12&sortBy=popularity&apiKey=d2e1ffa40c3c444c8380f8e8e582c2aa";

  constructor(private httpClient: HttpClient) {
    this.httpClient
    .get(this.url)
    .subscribe(
      (data) => {
        this.articles = data['articles'];
      }, (error) => {

      }
    );
  }
}
