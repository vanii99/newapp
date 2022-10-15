import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-chuck-norris-joke',
  templateUrl: './random-chuck-norris-joke.component.html',
  styleUrls: ['./random-chuck-norris-joke.component.css']
})
export class RandomChuckNorrisJokeComponent implements OnInit {

  randomJokeObj: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getRandomJoke = () => {
    this.randomJokeObj = this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data:any) => console.log);
  }
}
