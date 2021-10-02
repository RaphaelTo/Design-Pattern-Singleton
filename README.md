# Design Pattern Singleton

## À quoi il sert ?

Son but va d'être d'éviter qu'une classe soit instancier plusieurs fois. 

## Comment il fonctionne

Il faut : 

- créer une class avec un constructeur privé 
- un attribut privé static qui va contenir l'instance
- une methode getInstance static qui va vérifier si dans l'attribut il y a une instance. Après la condition il retourne l'instance qui est stocké dans l'attribut static.

https://refactoring.guru/fr/design-patterns/singleton/typescript/example#lang-features