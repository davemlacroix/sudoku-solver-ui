import { Component, Input } from "@angular/core";

@Component({
    selector: 'sudoku-cell',
    template: `{{value}}`
})
export class SudokuCellComponent{
    @Input() value:any
}