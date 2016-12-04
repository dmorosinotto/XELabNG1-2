Se volete portare il vostro codice da [Angular 1.x](https://angularjs.org/) a [NG2](https://angular.io/) dovete chiamare l'[A-TEAM (video)](https://www.youtube.com/watch?v=mD-69PjevyA) 
```
     ___           .___________. _______     ___      .___  ___. 
    /   \          |           ||   ____|   /   \     |   \/   | 
   /  ^  \   ______`---|  |----`|  |__     /  ^  \    |  \  /  | 
  /  /_\  \ |______|   |  |     |   __|   /  /_\  \   |  |\/|  | 
 /  _____  \           |  |     |  |____ /  _____  \  |  |  |  | 
/__/     \__\          |__|     |_______/__/     \__\ |__|  |__| 
                                                                 
```
Si non sto scherzando :smile: :joy: avete bisogno dei seguenti attori: 

<img width="50px" align="right" src="http://dm.gl/assets/typescriptLogo.png" alt="Typecript"/>

- [Anders Hejlsberg](https://twitter.com/ahejlsberg) se riuscite ad ingaggiarlo :wink: 
, altrimenti mi sà che dovrete accontentarvi di usare il suo "figlio" [**Typescipt**](https://www.typescriptlang.org/) 
nella parte di **SBERLA**: perchè IMHO c'è un modo _più pulito e "figo"_ di applicare al meglio le 
[best](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)-[practices](https://github.com/toddmotto/angular-styleguide) 
di Angular 1.x senza scrivere miliardi di function JS 
(ndr: Io :heart: Javascript, e penso che sia il linguaggio PIU' POTENTE attualmente disponibile UNIVERSALMENTE
, ma al contempo [_"la potenza è nulla senza il controllo"_ (video)](https://www.youtube.com/watch?v=5qanlirrRWs) 
e Typescript vi regala IL CONTROLLO per sfruttare al meglio la POTENZA di JS!)


<img width="50px" align="right" src="https://raw.githubusercontent.com/ngParty/ng-metadata/master/assets/logo/ngMetadata.png" alt="ng-metadata"/>

- [**ng-metadata**](https://github.com/ngParty/ng-metadata) o forse meglio il suo papà [Martin Hochel](https://twitter.com/martin_hotell) 
nella parte di **MURDOCK**: perchè solo un _"pazzo"_ sarebbe riuscito a creare una libreria che riporta TUTTI i @decorators di NG2 a funzionare NATIVAMENTE in NG1! 


<img height="50px" align="right" src="https://www.loc.gov/exhibits/treasures/images/tm015-th.jpg" alt="We want You!" /> 

- **VOI** nella parte di **P.E. BARACUS**: perchè per migliorare ed adattare il vostro codice per esser pronto all'evoluzione, 
dovrete esser disposti a prenderlo letteralmente a _"martellate o cazzotti"_ se necessario, soprattutto se usate ancora $scope... 


<img width="50px" align="right" src="http://www.sergiobonelli.it/userUpload/1366641829022.jpg" alt="Ziggy" /> 

- ed in fine **UN BEL PIANO D'AZIONE** e a questo ho pensato [Io](https://twitter.com/dmorosinotto) che provo ad interpretare il Col. **"HANNIBAL" SMITH** 


Se volete scopire il [**PIANO**](https://github.com/dmorosinotto/XELabNG1-2/commits/ng2) non dovrete far altro che che seguire tutte le commit (opportunamente commentate) presenti nel [branch ng2 di questa repo](https://github.com/dmorosinotto/XELabNG1-2/tree/ng2)

Se avete letto e seguito questa "guida", avrete intuito che l'approccio che sto suggerendo per la migrazione è si di tipo _"big-bang"_ 
, `ma con una particolarità`: in verità la parte [**BIG** :rocket:](https://github.com/dmorosinotto/XELabNG1-2/compare/1-typescript...2-ng-metadata)
 viene interamente svolta restando sempre dento ad Angular 1.x 
e solamente nella parte finale applichiamo un ultimo [**bang**](https://github.com/dmorosinotto/XELabNG1-2/compare/2-ng-metadata...ng2)
 per passare definitivamente ad NG2 con dei semplici _"Find & Replace"_ (SI NON STO SCHERZANDO :sunglasses: [guardate la commit tag 3.3](https://github.com/dmorosinotto/XELabNG1-2/compare/3.2...3.3)) 
e qualche piccolo ritocco dovuto al cambiamento di [sintassi in NG2 per il binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#binding-syntax)
 dei parametri ed eventi nei template html ([guardate le commit tag 3.5 e 3.4](https://github.com/dmorosinotto/XELabNG1-2/compare/3.3...3.5))

Ma anche se decideste di non migrare ad NG2 vi consiglio vivamente di studiarvi il codice di questa repo, 
perchè IMHO: potreste veramente scoprire come [scrivere meglio un applicazione Angular 1.x](https://github.com/dmorosinotto/XELabNG1-2/compare/0-basics...1.9) 
con del codice decisamente più chiaro e manuntenibile, grazie soprattutto all'uso di [Typescript](https://github.com/dmorosinotto/XELabNG1-2/tree/1-typescript),
 senza contare poi i vantaggi "collaterali" di intellisence e typecheck sull'intero codice che TS vi regala!
Infondo infondo un motivo per cui il [**Team di Angular ha scelto Typescript per scrivere NG2**](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8#.fgkgrxv3v) ci sarà no?!

Se siete stanchi di leggere commit, e volete provare a "sporcarvi le mani" qui trovate le istruzioni per configurare il [LAB e svolgere degli Esercizi](XELab.md). 

> ["Vado matto per i piani ben riusciti!"](https://youtu.be/ROisoQ4MY5k) 
> by Col. John "HANNIBAL" Smith

E a voi non resta che un'ultima cosa da fare: [decidere se migrare da Angular 1.x ad NG2 (video)](https://youtu.be/spOBkd0P5Mc) 






RIFERIMENTI:
- Documentazione ng-metadata
- Style guide John papa
- Best practices Todd Motto x TS
- Articolo su component architecture di Tero



This repo is a walktrought to show step-by-step a way to evolve you code from $scope to NG2, show a "MASTER PLAN" to evolve the co
## PREPARATIVI
- Prima di venire alla sessione verificare di avere i seguenti Pre-requisiti 
installati correttamente sul vostro PC o Mac, eseguendo i seguenti comandi da terminale
```terminal
$> git --version
git version x.y.z    (VA BENE QUALSIASI VERSIONE)

$> node -v
v6.9.1

$> npm -v
3.8.10

$> code -v
1.7.2
```
Se necessario installare le ultime versioni di **VS Code** [download](https://code.visualstudio.com) e **Node + NPM** LTS [download](https://nodejs.org) e di **GIT** [download](https://git-scm.com/)

## DOWNLOAD CODICE

- Scaricare il codice di questa repository:
```terminal
$> git clone https://github.com/dmorosinotto/XELabNG1-2
```


- Ed eseguire i seguenti comandi per installare i pacchetti necessari per lo svolgimento del Lab
```terminal
$> cd XELabNG1-2
$> npm i -g yarn
$> yarn
```
Attendere la fine dell'installazione ed IGNORARE eventuali messaggi di **warning** es:
 ```Incorrect peer dependency "rxjs@5.0.0-beta.12".```
> ATTENZIONE: Su Windows IGNORARE l'errore relativo a **fsevents** ```error Error running install script for optional dependency: "C:\\Dev\\Test\\XELabNG1-2\\node_modules\\fsevents: Command...```
> e provare a proseguire lo stesso, dovrebbe funzionare!

### TEST
- Per verificare che tutto funzioni con NG1 + ng-metadata eseguire:
```
$> git checkout -t origin/test
$> npm start
```
e navigare [http://localhost:8080](http://localhost:8080) dovreste vedere un messaggio di *TUTTO OK in VERDE*!

- Una volta provato, terminare l'esecuzione con `CTRL+C` da teminale, 
- Rifare il test anche per NG2 eseguendo:
```terminal
$> git checkout -t origin/test2
$> npm start
```
e navigare [http://localhost:8080](http://localhost:8080) dovreste vedere un messaggio di *TUTTO OK in VERDE*!

Se tutto è andato secondo i piani, dovreste esser pronti per il corso! 