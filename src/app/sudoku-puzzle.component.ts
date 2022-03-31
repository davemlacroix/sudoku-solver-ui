import { Component, OnInit } from "@angular/core";
import { SudokuService } from "./services/sudoku.service";

@Component({
    selector: 'sudoku-puzzle',
    templateUrl: './sudoku-puzzle.component.html',
    styleUrls: ['./sudoku-puzzle.component.css']
})
export class SudokuPuzzleComponent implements OnInit{
    puzzle:any[]

    constructor(private sudokuService: SudokuService)
    {
        this.puzzle = []
    }

    ngOnInit()  {
        this.puzzle = this.sudokuService.getSudokuPuzzle();
    }

}