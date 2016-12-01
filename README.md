# XELabNG1-2
Sessione XE Lab NG1 to NG2 del 02/12/2016 by Daniele Morosinotto

## PREPARATIVI
1. Prima di venire alla sessione verificare di avere i seguenti Pre-requisiti 
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


2. Scaricare il codice di questa repository:
```terminal
$> git clone https://github.com/dmorosinotto/XELabNG1-2
```


3. Ed eseguire i seguenti comandi per installare i pacchetti necessari per lo svolgimento del Lab
```terminal
$> cd XELabNG1-2
$> npm i -g yarn
$> yarn
...IGNORARE I 3 MESSAGGI warning Incorrect peer dependency "rxjs@5.0.0-beta.12".
$> npm start
```
Se tutto è andato secondo i piani, dovreste poter accedere a [http://localhost:8080](http://localhost:8080) e vedere un messaggio di benvenuto in VERDE!
