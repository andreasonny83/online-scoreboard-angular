import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { GameSetupRoutingModule } from './game-setup.routing';
import { GameSetupComponent } from './game-setup.component';

@NgModule({
  declarations: [
    GameSetupComponent,
  ],
  imports: [
    CommonModule,
    GameSetupRoutingModule,
    MatButtonModule,
  ],
})
export class GameSetupModule { }
