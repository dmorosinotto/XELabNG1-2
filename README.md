# XELabNG1-2
Sessione XE Lab NG1 to NG2 del 02/12/2016 by Daniele Morosinotto

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