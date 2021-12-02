## src
[src1] https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/
[src2] https://webpack.js.org/guides/progressive-web-application/



## 1 - manifest.json 
le manifest sert à dire que c'est une pwa et à définir quelque options pour le lancement sur mobile (icon, couelur, plein écran, ...)
j'ai pris celui de [react-create-app] un peu modifié


## 2 - serviceworker
sans l'enregistrement d'un service worker ce n'est pas encore détecté comme pwa
je suis sur un version simple : l'enregistrement du serviceworker pat le plugin workbox-webpack-plugin [src2] et l'enregistrement dans index.tsx