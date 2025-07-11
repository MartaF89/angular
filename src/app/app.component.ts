import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTransazioniComponent } from "./stopcode/lista-transazioni/lista-transazioni.component";
import { TipoProdotto } from './models/card.singola';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaTransazioniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  prodotti: TipoProdotto[] = [ //deve essere uguale al prodotto creato in card.ts TipoProdotto [] = è il collegamento che mi serve
    //per collegarmi al file card.ts


    {
        "amount": 444.26,
        "date": 1538472564,
        "business": "Abshire and Sons",
        "name": "Savings Account (...4885)",
        "type": "invoice",
        "account": "52870193"
    },
    {
        "amount": 550.57,
        "date": 1518581003,
        "business": "VonRueden - Gaylord",
        "name": "Personal Loan Account (...4013)",
        "type": "deposit",
        "account": "72420617"
    },
    {
        "amount": 845.43,
        "date": 1617268552,
        "business": "Smith LLC",
        "name": "Savings Account (...5058)",
        "type": "invoice",
        "account": "22601362"
    },
    {
        "amount": 247.74,
        "date": 1561097873,
        "business": "Dach - Schneider",
        "name": "Money Market Account (...6592)",
        "type": "invoice",
        "account": "02547512"
    },
    {
        "amount": 454.84,
        "date": 1637773868,
        "business": "Prohaska, Crist and Greenholt",
        "name": "Savings Account (...6263)",
        "type": "invoice",
        "account": "02032392"
    },
    {
        "amount": 555.56,
        "date": 1568861317,
        "business": "Williamson, Treutel and Hilpert",
        "name": "Personal Loan Account (...5342)",
        "type": "withdrawal",
        "account": "89158177"
    },
    {
        "amount": 894.34,
        "date": 1644133839,
        "business": "Christiansen, Gottlieb and Mraz",
        "name": "Investment Account (...0233)",
        "type": "withdrawal",
        "account": "94174612"
    },
    {
        "amount": 245.32,
        "date": 1610185603,
        "business": "Lueilwitz, Robel and Purdy",
        "name": "Investment Account (...2471)",
        "type": "withdrawal",
        "account": "63960985"
    },
    {
        "amount": 695.62,
        "date": 1597641856,
        "business": "Lemke, Armstrong and Jaskolski",
        "name": "Checking Account (...7705)",
        "type": "payment",
        "account": "39178707"
    },
    {
        "amount": 742.68,
        "date": 1564022976,
        "business": "Medhurst - Runolfsdottir",
        "name": "Money Market Account (...4178)",
        "type": "deposit",
        "account": "80915767"
    }
]

}
