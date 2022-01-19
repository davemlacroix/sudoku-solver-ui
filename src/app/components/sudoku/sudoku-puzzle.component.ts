import { Component, OnInit } from "@angular/core";
import { ISudokuPuzzle } from "src/app/models/sudoku-puzzle.model";
import { SudokuService } from "../../services/sudoku.service";

@Component({
    selector: 'sudoku-puzzle',
    templateUrl: './sudoku-puzzle.component.html',
    styleUrls: ['./sudoku-puzzle.component.css']
})
export class SudokuPuzzleComponent implements OnInit{
    puzzle:ISudokuPuzzle

    constructor(private sudokuService: SudokuService)
    {
        this.puzzle = {
        puzzle: [
                    [
                        {
                            value: 0
                        },
                    ]
                ]}
        //init puzzle to something before ngOnInit -- is there a better way?
        //at least change to empty puzzle
    }


    ngOnInit()  {
        this.sudokuService.getSudokuPuzzle().subscribe(puzzle => {this.puzzle = puzzle;});
    }

}