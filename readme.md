# This repo hosts a simple Fonctionnal test suite on a signup Form # 
![example workflow](https://github.com/sylvain-viole/wcs-cypress-quete2-1243/actions/workflows/main.yml/badge.svg)

**author : Sylvain Viole**

---

### This test suite challenges preprod.blackmarket signup Form on Register page on various scenarios. ###

Scenarios are written in Gherkins in `.feature`  files and linked to steps with `Cypress-cucumber-preprocessor`.

Basic `Page Object Model` and `OOP` is implemented to handle :
- SignupForm : locators can be updated in a single place
- User: Random user creation with `faker``
- Wait: Waiting times are variables, so they are easy to modify or bypass.

---

## CI Actions : ##

Tests are automatically launched at each push

---

## Dependencies : ##
|Dependency|version|
|:-|:-|
|Cypress|`7.1.0`|
|Cypress-cucumber-preprocessor| `4.0.3`|
|faker| `5.5.3`|

---

## How to : ##

```
git clone https://github.com/sylvain-viole/wcs-cypress-quete2-1243
cd wcs-cypress-quete2-1243
npm install
npm run cy:run
```

---
CHEERS !


 

