import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private fb: FormBuilder, public auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.auth.setWord(form.value.word);
  }

  onReset(form) {
    form.reset();
  }
}
