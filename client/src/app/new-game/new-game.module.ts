import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewGameRoutingModule } from './new-game.routing';
import { NewGameComponent } from './new-game.component';

@NgModule({
  declarations: [
    NewGameComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NewGameRoutingModule,
  ],
})
export class NewGameModule { }
