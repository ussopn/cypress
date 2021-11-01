Écrire une série de tests "end to end" à l'aide de Cypress. Faire les tests sur "personal_project".

Installation de personal_project:

Go to javascript project: cd personal_project
  - Install dependencies: npm i
  - Launch javascript project: npm run dev
La documentation de cypress: https://docs.cypress.io/guides/overview/why-cypress. Elle contient notamment des best practices et des anti-pattern.

Scénarii de test (exemple: un textarea / tester que l'app renvoie bien un message d'erreur lorsqu'il est vide et qu'on veut submit, etc.). Le but étant de pouvoir apprécier : L'approche quant à la définition du périmètre de test; La qualité du test en lui même.

Il faut 5-10 scenarii (un scenario étant défini comme une "feature" à tester, par exemple un bouton, et chaque scénario pouvant contenir plusieurs tests).

Il faut une commande permettant de faire tourner les tests (par ex. : yarn test:e2e).

Installation:
  - Go to cypress project: cd CypressProject
  - Create cypress folder: npx cypress open
