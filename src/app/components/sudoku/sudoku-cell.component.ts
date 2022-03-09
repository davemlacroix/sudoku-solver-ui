import { Component, Input } from "@angular/core";

@Component({
    selector: 'sudoku-cell',
    template: `<div class="cell"><div class="cellText">{{value}}</div></div>`,
    styleUrls: ['./sudoku-cell.component.css']
})
export class SudokuCellComponent{
    @Input() value:any
}