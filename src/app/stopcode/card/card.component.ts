import { Component, Input } from '@angular/core';
import { TipoProdotto } from '../../moduli/card.singola';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [DatePipe, CurrencyPipe,NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() prodotto?: TipoProdotto; //nullable
}
