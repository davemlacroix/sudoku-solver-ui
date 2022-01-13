import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SudokuCellComponent } from './sudoku-cell.component';
import { SudokuPuzzleComponent } from './sudoku-puzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuCellComponent,
    SudokuPuzzleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
