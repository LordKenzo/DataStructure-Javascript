# Definizione

Big O è una notazione che ci indica quanto è scalabile una funzione/algoritmo e ci permette di stimare il caso peggiore dell'algoritmo a runtime o quanto ci mette un algoritmo a completarsi, in base all'input. In pratica ci indica quanto sarà lento un algoritmo se l'input di questo aumenta nel tempo. Ad es. se ho un array di 1000 elementi o di 10 elementi, un certo algoritmo come risponderà a questo cambiamento? Crescerà in maniera proporzionale al numero di elementi? Avrà un andamento esponenziale? Rimarrà costante? O cambia in un qualsiasi altro modo? La notazione Big-O ci descrive le performance del nostro algoritmo.

```javascript
function log(array){
  console.log(array[0]);
  console.log(array[1]);
}
```

Questa funzione è *costante* sia per array di 10 elementi, che di 10000 elementi. Pertanto il costo a runtime dell'algoritmo è costante e si indica con "O(1)".

```javascript
function logAll(array){
  for(var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}
```

Questa funzione è *lineare*, ovvero cresce con numero degli elementi dell'array in maniera proporzionale al numero di elementi e si indica con "O(n)".

```javascript
function addAndLog(array){
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      console.log(array[i] + array[j]);
    }
  }
}
```

Questa funzione crea tutte le coppie possibili dell'array. Con 3 elementi ho 9 coppie, con 4 elementi ho 16 coppie, ho un andamento quadratico ovvero n elevato a 2. Il costo di questa funzione è *esponenziale* e si indica con "O(n^2)". Algoritmi di questo tipo sono molto costosi e inefficienti!!!

```javascript
function binarySearch(array, key){
  var low = 0;
  var high = array.length - 1;
  var mid, element;
  
  while(low <= high){
    mid = Math.floor((low+high) / 2, 10);
    element = array[mid];
    if(element < key){
      low = mid + 1;
    } else if (element > key){
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
```

Questa funzione divide il numero degli elementi di input ad ogni iterazione. Il costo di questa funzione è *logaritmica* e si indica con "O(log n)". Anche se ho tantissimi elementi, vado comunque a scansionare una frazione di questa dimensione. Pensa a quando cerchi una parola in un dizionario. Non aprirò certo alla prima pagina (a meno di cercare una parola con la A), ma aprirò a metà e poi andrò nella prima o nella seconda metà e così via. Il suo costo diventa, con l'aumentare dell'input, approssimativamente ad un costo lineare. Per pochissimi elementi, il suo costo è più alto di tutti gli altri casi. 