import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import  { ActivatedRoute, Router } from '@angular/router';
// import { Author } from 'src/app/model/authors';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newAuthor : any;

  // newAuthor: Author = {
  //   name: ''
  // };


  constructor(private _authorservices: AuthorsService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.newAuthor = { name: ""};
  }

  onSubmit(){
    this.newAuthors();
    this.newAuthor = { name : ""};
  }


  // Metodo que llama al servicio (model)
  newAuthors() {

    let observable = this._authorservices.newAuthor(this.newAuthor.name);
    observable.subscribe(data => {
      console.log("Add our authors!", data);
      //this.listAuthors = data;
      this.goHome();
    });

  }

  goHome() {
    this._router.navigate(['/home']);
  }

}
