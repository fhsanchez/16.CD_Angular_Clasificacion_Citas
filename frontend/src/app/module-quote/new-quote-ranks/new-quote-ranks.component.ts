import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-new-quote-ranks',
  templateUrl: './new-quote-ranks.component.html',
  styleUrls: ['./new-quote-ranks.component.css']
})
export class NewQuoteRanksComponent implements OnInit {

  parametros: any;
  authors: any;
  newQuote: any;
  constructor(private _authservices: AuthorsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.newQuote = { description: "" };

    this.parametros = this._activatedRoute.params;
    this.authors = this.parametros._value;
    //this.getQuotes(this.authors.id)
  }

  onSubmit() {
    this.newQuote_Add();
    this.newQuote = { description: "" };
  }


  // Metodo que llama al servicio (model)
  newQuote_Add() {
    let id_author= this.authors.id;
    const description_data = { description:  this.newQuote.description};
    let observable = this._authservices.newQuote(id_author, description_data);
    observable.subscribe(data => {
      console.log("Add our quotes!", data);
      this.goHome();
    });

  }

  goHome() {
    this._router.navigate(['/viewquote/'  +  this.authors.id]);
  }

}
