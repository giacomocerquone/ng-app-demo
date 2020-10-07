import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  word = '';

  loginForm: FormGroup = this.fb.group({
    word: ['', [Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {
    this.loginForm.valueChanges.subscribe((v) => {
      this.word = v.word;
    });
  }

  getWord() {
    return this.word;
  }

  setWord(word: string) {
    this.word = word;
  }
}
