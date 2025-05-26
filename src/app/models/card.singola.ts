export type TipoProdotto = {
    amount: number,
      date: number,
        business: string,
        name: string,
        type: string,
        account: string
}

// in app component.ts faccio riferimento a questo tipo di prodotto con i : dopo il nome della variabile aggiungendo nome di questo type 
// e array vuoto quindi    :TipoProdotto[] = []