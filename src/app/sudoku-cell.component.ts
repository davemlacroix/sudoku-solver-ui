import { Component, Input } from "@angular/core";

@Component({
    selector: 'sudoku-cell',
    template: `{{value}}`,
    styleUrls: ['./sudoku-cell.component.css']
})
export class SudokuCellComponent{
    @Input() value:any
}