import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
  ) {}

  public ngOnInit(): void {}

  public Register(regForm: NgForm) {
    console.log(regForm.value);
    const body = {name: 'Brad'};

    this.http
      .post(
        'http://0.0.0.0:3000/register',
        body
      )
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      );
  }
}
