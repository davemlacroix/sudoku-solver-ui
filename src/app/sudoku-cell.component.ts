import { Component, Input } from "@angular/core";

@Component({
    selector: 'sudoku-cell',
    template: `
    <div class="sudoku-cell"> {{value}} </div>
    `,
    styleUrls: ['./sudoku-cell.component.css']
})
export class SudokuCellComponent{
    @Input() value:any
}