import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, of, catchError } from "rxjs"
import { ISudokuPuzzle } from "../models/sudoku-puzzle.model"
import { ISudokuCell } from "../models/sudoku-cell.model";

@Injectable()
export class SudokuService  {
    constructor(private httpClient: HttpClient)
    {

    }

    getSudokuPuzzle():Observable<ISudokuPuzzle> { 
        return this.httpClient.get<ISudokuPuzzle>('https:/localhost:44379/api/puzzles')
            .pipe(catchError(this.handleError<ISudokuPuzzle>('getSudokuPuzzle', puzzle)));

    }

    private handleError<T> (operation = 'operation', result?:T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}

 const puzzle: ISudokuPuzzle = 
    {
        puzzle : [
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ],
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ],
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ],
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ],
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ],
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ],
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ],
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ],
            [
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                },
                {
                    value: undefined
                }
            ]
        ]
    };