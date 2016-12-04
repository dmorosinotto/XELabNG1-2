If you want to migrate your code from [Angular 1.x](https://angularjs.org/) to [NG2](https://angular.io/) you must call the
```
     ___           .___________. _______     ___      .___  ___. 
    /   \          |           ||   ____|   /   \     |   \/   | 
   /  ^  \   ______`---|  |----`|  |__     /  ^  \    |  \  /  | 
  /  /_\  \ |______|   |  |     |   __|   /  /_\  \   |  |\/|  | 
 /  _____  \           |  |     |  |____ /  _____  \  |  |  |  | 
/__/     \__\          |__|     |_______/__/     \__\ |__|  |__| 
                                                                 
```
I'm not [kidding (video)](https://www.youtube.com/watch?v=mD-69PjevyA) :smile: :joy: but with a different casting: 

<img width="50px" align="right" src="http://dm.gl/assets/typescriptLogo.png" alt="Typecript"/>

- [Anders Hejlsberg](https://twitter.com/ahejlsberg) if you manage to hire him :wink: 
, otherwise I think you'll have to use "his baby" starring [**Typescipt**](https://www.typescriptlang.org/) 
 as **Faceman**: becouse IMHO there is a _cleaner and "cool way"_ :sunglasses: to adopt the 
[best](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)-[practices](https://github.com/toddmotto/angular-styleguide) 
of Angular 1.x without writing :100: JS functions. 
(ndr: I :heart: Javascript, and I think that it is the MOST POWERFULL language actually UNIVERSAL available
, but at the same times [_"The brute power is nothing without control"_ (video)](https://www.youtube.com/watch?v=5qanlirrRWs) 
and Typescript gives to you the CONTROL to manage and use the real POWER of JS!)


<img width="50px" align="right" src="https://raw.githubusercontent.com/ngParty/ng-metadata/master/assets/logo/ngMetadata.png" alt="ng-metadata"/>

- [**ng-metadata**](https://github.com/ngParty/ng-metadata) or maybe his father [Martin Hochel](https://twitter.com/martin_hotell) 
starring as **MURDOCK**: becouse only a _"crazy man"_ would be able to create a library that brings _ALL the NG2 @decorators to work **NATIVELY** in NG1_! 


<img height="50px" align="right" src="https://www.loc.gov/exhibits/treasures/images/tm015-th.jpg" alt="We want You!" /> 

- **B.A. BARACUS** starring by **YOU**: because to improve and adapt your code to be ready for migration
you'll have to be willing to literally _"hammer it" _ if needed, especially if you are still using $scope... 


<img width="50px" align="right" src="http://www.sergiobonelli.it/userUpload/1366641829022.jpg" alt="Ziggy" /> 

- And finally **A GOOD PLAN** and I'll try to provide it to you, starring [Me](https://twitter.com/dmorosinotto) as Col. **"HANNIBAL" SMITH** 


If you want to see the [**MASTER PLAN**](https://github.com/dmorosinotto/XELabNG1-2/commits/ng2) you have just to follow all the commits in the [ng2 branch](https://github.com/dmorosinotto/XELabNG1-2/tree/ng2)

If you read all the steps that I commented, you may have guessed that the approach that I'm suggesting is a _"big-bang"_ migration type 
, `but with a special case`: the true is that the [**BIG phase** :rocket:](https://github.com/dmorosinotto/XELabNG1-2/compare/1-typescript...2-ng-metadata)
 is entirely done keep using Angular 1.x , and only at the end we done a latest [**bang step** :boom:](https://github.com/dmorosinotto/XELabNG1-2/compare/2-ng-metadata...ng2)
 to bring-in NG2 with some simple _"Find & Replace"_ (YES I'M NOT KIDDING :sunglasses: [take a look of commit tag 3.3](https://github.com/dmorosinotto/XELabNG1-2/compare/3.2...3.3)) 
and some minor changes due to the [new binding syntax of NG2](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#binding-syntax)
 for [params] and (events) in the template ([take a look of commit tags 3.5 - 3.4](https://github.com/dmorosinotto/XELabNG1-2/compare/3.3...3.5))

In any case, even if you choose not to migrate to NG2, I recommend taking a look at the code of this repo,
because IMHO: you might find a way to [write "better" Angular 1.x app](https://github.com/dmorosinotto/XELabNG1-2/compare/0-basics...1.9) 
with a simpler, cleaner and manageble code! 
This is mainly due to the use of [Typescript](https://github.com/dmorosinotto/XELabNG1-2/tree/1-typescript),
 that as "side effect" gives you all the benefits of :tada: intellisence and typecheck of your full code base :tada:!

If you think, there must be a reason [**why the Angular Team chosen to write NG2 with Typescript](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8#.fgkgrxv3v), don't you agree :exclamation::question::exclamation:

If you are tired of reading commits, and want to try to "get your hands dirty" Here you find the instructions to configure the [Code LAB and try some Exercises](XELab.md). 

Finally you just have one last thing to do: [decide if you'll migrate from Angular 1.x to NG2 (video)](https://www.youtube.com/watch?v=RhlXqYiTz2Q) 

> ["I love it when a plan comes together!"](https://www.youtube.com/watch?v=FPQlXNH36mI) 
> by Col. John "HANNIBAL" Smith
