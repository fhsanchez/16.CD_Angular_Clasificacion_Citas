import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-quote-ranks',
  templateUrl: './list-quote-ranks.component.html',
  styleUrls: ['./list-quote-ranks.component.css']
})
export class ListQuoteRanksComponent implements OnInit {

  listQuotes : any;
  parametros: any;
  authors: any;

  constructor(private _authorservices : AuthorsService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router ){ }


  ngOnInit(): void {
    this.parametros = this._activatedRoute.params;
    this.authors = this.parametros._value;
    this.getQuotes(this.authors.id)
  }

  voteDownQuote(_id_quote : string, rankDown : Number){
    let id_author = this.authors.id;
    const data_rank = { id_quote : _id_quote, rank: rankDown};

    // console.log("id_authorrrrrrrr: " + id_author);
    // console.log("_id_quote: " + _id_quote);
    // console.log("data_rank: " + data_rank);

    let observable = this._authorservices.newQuoteRank(id_author, data_rank);
    observable.subscribe(quoteRankAdd => {
       //this._router.navigate(['/pets/']);
       console.log(quoteRankAdd)
       this.getQuotes(id_author);
    });
  }

  voteUpQuote(_id_quote : string, rankDown: Number){
    let id_author = this.authors.id;
    const data_rank = { id_quote : _id_quote, rank: rankDown};

    // console.log("id_authorrrrrrrr: " + id_author);
    // console.log("_id_quote: " + _id_quote);
    // console.log("data_rank: " + data_rank);

    let observable = this._authorservices.newQuoteRank(id_author, data_rank);
    observable.subscribe(quoteRankAdd => {
       //this._router.navigate(['/pets/']);
       console.log(quoteRankAdd)
       this.getQuotes(id_author);
    });


  }

  deleteQuote(_id_quote : string){

      let id_author = this.authors.id;
      const data_delete = { id_quote : _id_quote }

      console.log("id_authorrrrrrrr: " + id_author);
      console.log("_id_quote: " + _id_quote);
      console.log("data_delete: " + data_delete);

      let observable = this._authorservices.deleteQuoteRanks(id_author, data_delete);
      observable.subscribe(quoteDleeted => {
         //this._router.navigate(['/pets/']);
         console.log(quoteDleeted)
         this.getQuotes(id_author);
      });

  }

  getQuotes(id_author: string){

     let observable = this._authorservices.getQuoteByAuthor(id_author);
     observable.subscribe(data => {
       this.listQuotes = data;
       console.log(data);
     });

  }

}
