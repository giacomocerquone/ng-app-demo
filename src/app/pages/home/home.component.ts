import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public fieldAdded = false;

  constructor(private fb: FormBuilder, public auth: AuthService) {}

  ngOnInit(): void {}

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
