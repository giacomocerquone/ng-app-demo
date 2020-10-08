import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { CurrConverterPipe } from 'src/app/pipes/curr-converter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserComponent, CurrConverterPipe],
  imports: [CommonModule, UserRoutingModule, FormsModule, HttpClientModule],
})
export class UserModule {}
