import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SudokuPuzzleComponent } from 'src/app/components/sudoku/sudoku-puzzle.component';
import { SudokuCellComponent } from 'src/app/components/sudoku/sudoku-cell.component';
import { SudokuService } from 'src/app/services/sudoku.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SudokuCellComponent,
    SudokuPuzzleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [SudokuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
