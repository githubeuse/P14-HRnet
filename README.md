# HRnet React Application

Cette application est une interface de gestion des employés construite avec React et Vite. 
Elle permet de créer, d'afficher et de trier les employés d'une entreprise.

## Fonctionnalités

- **Créer un employé** : Remplissez le formulaire pour ajouter un nouvel employé.
- **Afficher la liste des employés** : Consultez la liste des employés avec des options de recherche et de pagination.
- **Effacer les employés** : Supprimez tous les employés de la liste.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Vite** : Outil de build rapide pour les projets front-end.
- **Redux** : Gestion de l'état de l'application.
- **React Router** : Gestion de la navigation entre les pages.
- **ESLint** : Outil d'analyse de code pour maintenir la qualité du code.
- **Date-fns** : Bibliothèque pour manipuler les dates.
- **React-Select** : Composant de sélection pour les menus déroulants.
- **React-Datepicker** : Composant de sélection de date.

## Installation
1. Clonez le dépôt :

```sh
git clone https://github.com/githubeuse/P14-HRnet.git
cd P14-HRnet
```
   

2. Installez les dépendances :
```sh
npm install
```

## Scripts
Pour démarrer le serveur de développement 
```sh
npm run dev
```

Pour construire le projet pour la production
 ```sh
npm run build
```

Pour prévisualiser le build pour la production
```sh
npm run preview
```

## Structure du projet

```sh
├── .gitignore
├── desktop.ini
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   └── vite.svg
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   ├── hrnet-ico.ico
│   │   └── logo_hrnet.webp
│   ├── components/
│   │   ├── CustomDatePicker/
│   │   ├── CustomModal/
│   │   ├── DropdownMenu/
│   │   ├── Form/
│   │   ├── Header/
│   │   ├── Pagination/
│   │   ├── SearchBar/
│   │   └── Table/
│   ├── constants/
│   │   ├── departmentOptions.js
│   │   └── stateOptions.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   └── EmployeesList/
│   ├── store/
│   │   ├── features/
│   │   ├── middleware/
│   │   └── store.js
│   └── types/
│       └── githubeuse__modal-plugin-react.d.ts
└── vite.config.js
```

## Licence
Ce projet est sous licence MIT. 

```sh
MIT License

Copyright (c) [2025] [githubeuse]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
