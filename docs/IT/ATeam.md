Se volete portare il vostro codice da [Angular 1.x](https://angularjs.org/) a [NG2](https://angular.io/) dovete chiamare l'
```
     ___           .___________. _______     ___      .___  ___. 
    /   \          |           ||   ____|   /   \     |   \/   | 
   /  ^  \   ______`---|  |----`|  |__     /  ^  \    |  \  /  | 
  /  /_\  \ |______|   |  |     |   __|   /  /_\  \   |  |\/|  | 
 /  _____  \           |  |     |  |____ /  _____  \  |  |  |  | 
/__/     \__\          |__|     |_______/__/     \__\ |__|  |__| 
                                                                 
```
Si non sto [scherzando (video)](https://www.youtube.com/watch?v=mD-69PjevyA) :smile: :joy: solo che il casting è questo: 

<img width="50px" align="right" src="http://dm.gl/assets/typescriptLogo.png" alt="Typecript"/>

- [Anders Hejlsberg](https://twitter.com/ahejlsberg) se riuscite ad ingaggiarlo :wink: 
, altrimenti mi sà che dovrete accontentarvi di usare "la sua creatura" [**Typescipt**](https://www.typescriptlang.org/) 
nella parte di **SBERLA**: perchè IMHO c'è un modo _più pulito e "figo" :sunglasses: _ di applicare al meglio le 
[best](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)-[practices](https://github.com/toddmotto/angular-styleguide) 
di Angular 1.x senza scrivere :100: function JS 
(ndr: Io :heart: Javascript, e penso che sia il linguaggio PIU' POTENTE attualmente disponibile UNIVERSALMENTE
, ma al contempo [_"la potenza è nulla senza il controllo"_ (video)](https://www.youtube.com/watch?v=5qanlirrRWs) 
e Typescript vi regala IL CONTROLLO per sfruttare al meglio la POTENZA di JS!)


<img width="50px" align="right" src="https://raw.githubusercontent.com/ngParty/ng-metadata/master/assets/logo/ngMetadata.png" alt="ng-metadata"/>

- [**ng-metadata**](https://github.com/ngParty/ng-metadata) o forse meglio il suo papà [Martin Hochel](https://twitter.com/martin_hotell) 
nella parte di **MURDOCK**: perchè solo un _"pazzo"_ sarebbe riuscito a creare una libreria che riporta _TUTTI i @decorators di NG2 a funzionare **NATIVAMENTE** in NG1_! 


<img height="50px" align="right" src="https://www.loc.gov/exhibits/treasures/images/tm015-th.jpg" alt="We want You!" /> 

- **VOI** nella parte di **P.E. BARACUS**: perchè per migliorare ed adattare il vostro codice per esser pronto all'evoluzione, 
dovrete esser disposti a prenderlo letteralmente a _"martellate o cazzotti"_ se necessario, soprattutto se usate ancora $scope... 


<img width="50px" align="right" src="http://www.sergiobonelli.it/userUpload/1366641829022.jpg" alt="Ziggy" /> 

- ed in fine **UN BEL PIANO D'AZIONE** e a questo ho pensato [Io](https://twitter.com/dmorosinotto) che provo ad interpretare il Col. **"HANNIBAL" SMITH** 


Se volete scopire il [**PIANO**](https://github.com/dmorosinotto/XELabNG1-2/commits/ng2) non dovrete far altro che che seguire tutte le commit presenti nel [branch ng2 di questa repo](https://github.com/dmorosinotto/XELabNG1-2/tree/ng2)

Se avete seguito tutti gli steps che ho descritto, avrete intuito che l'approccio che sto suggerendo per la migrazione è si di tipo _"big-bang"_ 
, `ma con una particolarità`: in verità la parte [**BIG** :rocket:](https://github.com/dmorosinotto/XELabNG1-2/compare/1-typescript...2-ng-metadata)
 viene interamente svolta restando sempre dento ad Angular 1.x 
e solamente nella parte finale applichiamo un ultimo [**bang** :boom:](https://github.com/dmorosinotto/XELabNG1-2/compare/2-ng-metadata...ng2)
 per passare definitivamente ad NG2 con dei semplici _"Find & Replace"_ (SI NON STO SCHERZANDO :sunglasses: [guardate la commit tag 3.3](https://github.com/dmorosinotto/XELabNG1-2/compare/3.2...3.3)) 
e qualche piccolo ritocco dovuto al cambiamento di [sintassi in NG2 per il binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#binding-syntax)
 dei parametri e degli eventi nei template html ([guardate le commit tag 3.5 e 3.4](https://github.com/dmorosinotto/XELabNG1-2/compare/3.3...3.5))

In ogni caso anche se decideste di non migrare ad NG2, vi consiglio di dare un'occhiata al codice di questa repo, 
perchè IMHO: potreste scoprire un modo di [scrivere "meglio" un applicazione Angular 1.x](https://github.com/dmorosinotto/XELabNG1-2/compare/0-basics...1.9) 
con del codice decisamente più chiaro e manuntenibile! 
Questo grazie soprattutto all'uso di [Typescript](https://github.com/dmorosinotto/XELabNG1-2/tree/1-typescript),
 che come "effetto collaterale" vi regala poi tutti i vantaggi :tada: dell'intellisence e typecheck sull'intero vostro codice!

Infondo infondo un motivo per cui il [**Team di Angular ha scelto Typescript per scrivere NG2**](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8#.fgkgrxv3v) ci sarà no :exclamation::question::exclamation:

PS: Se siete stanchi di leggere commit, e volete provare a "sporcarvi le mani" qui trovate le istruzioni per configurare il [LAB e svolgere degli Esercizi](XELab.md). 

Alla fine non vi resta che un'ultima cosa da fare: [decidere se migrare da Angular 1.x ad NG2 (video)](https://youtu.be/spOBkd0P5Mc) 

> ["Vado matto per i piani ben riusciti!"](https://youtu.be/ROisoQ4MY5k) 
> by Col. John "HANNIBAL" Smith
