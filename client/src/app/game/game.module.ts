import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { GameRoutingModule } from './game.routing';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [
    GameComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatButtonModule,
  ],
})
export class GameModule { }
