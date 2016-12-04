# XELabNG1-2
Session XE Lab NG1 to NG2 - 02/12/2016 by Daniele Morosinotto

## PRE-REQUISITES
- Before coming to the session make sure you have the following pre-requisites
properly installed on your PC or Mac, running the following commands from the terminal
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
If needed install latest versions of **VS Code** [download](https://code.visualstudio.com) and **Node + NPM** LTS [download](https://nodejs.org) and **GIT** [download](https://git-scm.com/)

## CODE DOWNLOAD

- To begin start cloning this reopo:
```terminal
$> git clone https://github.com/dmorosinotto/XELabNG1-2
```


- Then execute following commands to install all needed dependecies:
```terminal
$> cd XELabNG1-2
$> npm i -g yarn
$> yarn
```
Wait until installtion finish and IGNORE some **warning** messages es:
 ```Incorrect peer dependency "rxjs@5.0.0-beta.12".```
> WARNING: On Windows IGNORE the erorr reported for **fsevents** ```error Error running install script for optional dependency: "C:\\Dev\\Test\\XELabNG1-2\\node_modules\\fsevents: Command...```
> try to go ahead, it should works without problem!

### TEST
- To verify that all the things are correctly setup with NG1 + ng-metadata running:
```
$> git checkout -t origin/test
$> npm start
```
and then browse to [http://localhost:8080](http://localhost:8080) you should see a green message that states *TUTTO OK*!

- When you have tested, kill the execution with `CTRL+C` from terminal, 
- Do the test even for NG2 running:
```terminal
$> git checkout -t origin/test2
$> npm start
```
and then browse to [http://localhost:8080](http://localhost:8080) you should see a green message that states *TUTTO OK*!

If all went according to plan, you should be ready for the course!

---

## INTRODUCTION

Here you'll find a ["guide" to contents and motivations](ATEAM.md) for this course, I really suggest to read it and watch the funny videos :joy:.

## EXERCISES

Once you have followed the whole [code steps](https://github.com/dmorosinotto/XELabNG1-2/commits/master)
, I recommend you try to solve 4 simple [exercises](https://github.com/dmorosinotto/XELabNG1-2/tree/exercise) 
starts with `$> git checkout -t origin/exercise`:
- **E0**: Handle the keydown of the ENTER keys to easy the confirmation of the input text 
- **E1**: Add a service with ng-metadata to get a list of questions 
- **E2**: Add a smart component with ng-metadata to fill all the answers, showing the questions in a table (reusing ask-cmp)
- **E3**: And then create a last component with "legacy" ng1 code using typescript and interacting with the same service, but building a wizard that shows a single question + navigate next/prev  

Obviously in the repo you'll find a branch with the [solution](https://github.com/dmorosinotto/XELabNG1-2/tree/solution) and some tags for each exercise, 
but I think that it'll be better to try by yourself to solve those and practice with a real cases applying what I have tried to explain in the step-by-step guide
to really see how difficult :scream: it'll be to write some Typescript and ng-metadata code :wink:.

> Typescript all the Things - FTW 
> by Daniele
