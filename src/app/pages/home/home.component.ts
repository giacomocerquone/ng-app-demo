import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, forkJoin, of } from 'rxjs';
import { concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Facts } from 'src/app/models/Facts';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public fieldAdded = false;

  public fact$ = forkJoin({
    this: this.http.get('https://cat-fact.herokuapp.com/facts'),
    that: this.http.get('https://cat-fact.herokuapp.com/facts'),
  }).pipe(tap((val) => console.log(val)));

  // this.http.get('https://cat-fact.herokuapp.com/facts').pipe(
  //   concatMap((facts: Facts) =>
  //     this.http.get(`https://cat-fact.herokuapp.com/facts/${facts.all[0]._id}`)
  //   ),
  //   tap((val) => undefined),
  //   map((val) => console.log(val))
  // );

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.router.events.pipe(
    //   switchMap((val) => {
    //     return this.http.get(
    //       'https://free.currconv.com/api/v7/convert?q=EUR_USD&compact=ultra&apiKey=345ee043f597cf36322b'
    //     );
    //   })
    // );

    this.fact$.subscribe();
  }

  onSubmit(form: FormGroup) {
    this.auth.setWord(form.value.word);
  }

  onReset(form: FormGroup) {
    form.reset();
  }

  addField() {
    this.auth.loginForm.addControl(
      'test',
      new FormControl('', Validators.required)
    );
    this.fieldAdded = true;
  }
}
