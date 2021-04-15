# This repo hosts a Cypress project for Wild Code School # 
![example workflow](https://github.com/sylvain-viole/wcs-cypress-quete2-1243/actions/workflows/main.yml/badge.svg)

**author : Sylvain Viole**

---

This test suite challenges preprod.blackmarket register page on basic scenarios for log in and signup.

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
Scenarios are written in Gherkins in `.feature`  files.

Test scripts are in corresponding sub-folders.
Common part of test scripts are in the `common` folder.
---
## How to : ##

```
git clone https://github.com/sylvain-viole/wcs-cypress-quete2-1243
cd wcs-cypress-quete2-1243
npm install
npm run cy:run
```

You can either chose to run :
- login test : `npm run cy:run:login`
or
- signup tests : `npm run cy:run:signup`

 

