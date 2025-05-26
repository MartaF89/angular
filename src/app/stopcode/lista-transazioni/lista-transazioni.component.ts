import { Component, Input } from '@angular/core';
import { CardComponent,  } from '../card/card.component';
import { JsonPipe } from '@angular/common';
import { TipoProdotto } from '../../models/card.singola';

@Component({
  selector: 'app-lista-transazioni',
  imports: [CardComponent,JsonPipe],
  templateUrl: './lista-transazioni.component.html',
  styleUrl: './lista-transazioni.component.css'
})
export class ListaTransazioniComponent {
 @Input() prodotti: TipoProdotto[] = [];

}
