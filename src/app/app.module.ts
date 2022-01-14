import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SudokuPuzzleComponent } from 'src/sudoku/sudoku-puzzle.component';
import { SudokuCellComponent } from 'src/sudoku/sudoku-cell.component';

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
