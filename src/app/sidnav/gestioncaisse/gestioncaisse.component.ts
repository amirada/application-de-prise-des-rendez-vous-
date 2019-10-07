import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-gestioncaisse',
  templateUrl: './gestioncaisse.component.html',
  styleUrls: ['./gestioncaisse.component.css']
})
export class GestioncaisseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#example').DataTable();
  } );
  }

}
