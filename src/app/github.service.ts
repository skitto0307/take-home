import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { map } from 'rxjs/operators'
import { commit } from './models';


@Injectable({providedIn: 'root'})
export class GitHubService {

    
    private _apiUrl:string = 'https://api.github.com/repos/skitto0307/take-home';

    constructor(private http:HttpClient) { }

    getCommitHistory(): Observable<commit[]>{
        return this.http.get(`${this._apiUrl}/commits`)
        .pipe(map((results:any)=> {
            
            let commits: commit[] = [];

            // iterate  over results and format commit information
            results.forEach((result:any)=> {
                const commit = result.commit;
                commits.push({
                    author:commit.author.name,
                    date: commit.author.date,
                    message:commit.message
                }); 
            });
           
           return commits;
        }));
    }
}