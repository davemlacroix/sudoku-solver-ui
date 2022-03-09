import { Component, Input } from "@angular/core";

@Component({
    selector: 'sudoku-cell',
    template: `<div class="cell"><span class="cellText">{{value}}</span></div>`,
    styleUrls: ['./sudoku-cell.component.css']
})
export class SudokuCellComponent{
    @Input() value:any
}