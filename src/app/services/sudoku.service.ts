import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from "rxjs"
import { ISudokuPuzzle } from "../models/sudoku-puzzle.model"
import { ISudokuCell } from "../models/sudoku-cell.model";

@Injectable()
export class SudokuService  {
    constructor(private http: HttpClient)
    {

    }

    getSudokuPuzzle():Observable<ISudokuPuzzle> { 
        let subject = new Subject<ISudokuPuzzle>();
        setTimeout(() => {subject.next(puzzle); subject.complete();}, 100);
        return subject;
    }


}

 const puzzle: ISudokuPuzzle = 
    {
        puzzle : [
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ],
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ],
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ],
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ],
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ],
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ],
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ],
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ],
            [
                {
                    value: 8
                },
                {
                    value: 9
                },
                {
                    value: 7
                },
                {
                    value: 3
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                },
                {
                    value: 9
                }
            ]
        ]
    };