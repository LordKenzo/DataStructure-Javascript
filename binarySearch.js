function binarySearch(array, searchKey){
  let inizio = 0;
  let fine = array.length - 1;
  let meta, elemento;
  
  while(inizio <= fine){
    meta = Math.floor((inizio + fine) / 2, 10);
    elemento = array[meta];
    if(elemento < searchKey){
      inizio = meta + 1;
    } else if (elemento > searchKey){
      fine = meta - 1;
    } else {
      return meta;
    }
  }

  return -1;
}

var val = binarySearch([10,20,30,40,50,60,70,80], 80);
console.log(val);