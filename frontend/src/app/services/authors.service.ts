import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _http: HttpClient) { }

  // Servcios para administracion de Autores
  getAll() {
    return this._http.get(environment.endPointApiAuthors);
  }

  getAuthorById(id:String) {
    let url= `${environment.endPointApiAuthors}/${id}`;
    return this._http.get(url);
  }

  newAuthor(authorName:String){
    let author = ({name: authorName})
    return this._http.post(environment.endPointApiAuthors,author);
  }

  editAuthor(id:String, name: any) {
    let url= `${environment.endPointApiAuthors}/${id}`;
    return this._http.put(url, name);
  }

  deleteAuthor(id:String) {
    let url= `${environment.endPointApiAuthors}/${id}`;
    return this._http.delete(url);
  }

  // Servcios para administracion de Quote Ranks
  getQuoteByAuthor(id:String) {
    let url= `${environment.endPointApiQuoteRanks}/${id}`;
    return this._http.get(url);
  }

  // Agrega una cita son Rankin
  newQuote(id:String, name: any) {
    let url= `${environment.endPointApiQuoteRanks}/${id}`;
    return this._http.put(url, name);
  }

  deleteQuoteRanks(id:String, data: any) {
    let url= `${environment.endPointApiQuoteRanks}/${id}`;
    return this._http.delete(url, data);
  }

  // Agrega un ranking
 newQuoteRank(id:String, name: any) {
    let url= `${environment.endPointApiAddQuoteRanks}/${id}`;
    return this._http.put(url, name);
  }



}
