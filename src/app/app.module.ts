import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SudokuCellComponent } from './sudoku-cell.component';
import { SudokuGridComponent } from './sudoku-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuCellComponent,
    SudokuGridComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
