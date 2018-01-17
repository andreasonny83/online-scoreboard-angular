import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService, INewGame } from '../core/api.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit, OnChanges {
  public gameForm: FormGroup;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    console.log('change');
  }

  public onSubmit(): void {
    this.apiService.newGame<INewGame>()
      .subscribe((res: INewGame) => this.router
        .navigate(['game', res.gameId]));
  }

  public reset(): void {
    this.ngOnChanges();
  }

  private createForm(): void {
    this.gameForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }
}
