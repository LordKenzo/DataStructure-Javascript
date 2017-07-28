/*
Una Linked List è rappresentata da un insieme di Nodi. Abbiamo un nodo speciale detto testa (HEAD) e un nodo speciale detto coda (TAIL). In una LL vuota la testa e la coda coincidono. Ogni nodo conosce il proprio nodo successore (NEXT) e predecessore (PREV). La testa non avrà predecessori (null) e la coda non ha successori (null).
*/

function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value, next = null, prev = null){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
  let node = new Node(value, this.head, null);
  !this.head ? this.tail = node : this.head.prev = node;
  this.head = node;
}

LinkedList.prototype.addToTail = function(value){
  let node = new Node(value, null, this.tail);
  !this.tail ? this.head = node : this.tail.next = node;
  this.tail = node;
}

LinkedList.prototype.removeFromHead = function(){
  
  if(!this.head) return null;

  let value = this.head.value;

  /*
  Se ho un nodo solo e lo elimino allora head e tail coincidono a null (parte else)
  Se ho due o + nodi, allora la nuova head avrà il prev a null
  */

  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;

  return value;
  
}

LinkedList.prototype.removeFromTail = function(){
  if(!this.tail) return null;
  let value = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return value;
}

LinkedList.prototype.printFromNode = function(startNode = this.head){
  if(startNode){
    console.log(startNode.value);
    this.printFromNode(startNode.next);
  }
}

LinkedList.prototype.printList = function(){
  let that = this;

  let printMe = (function(){
    let node = that.head;
    return function(){
      if(!node) return null;
      let value = node.value;
      node = node.next;
      return value;
    }
  })();

  let val = printMe();
  while(val){
    console.log(val)
    val = printMe();
  }
  
}

LinkedList.prototype.search = function(searchValue){
  let node = null;
  this.map(function(e){
    if(e.value === searchValue) node = e;
  });
  return node;
}

LinkedList.prototype.map = function(callback){
  let currentNode = this.head;
  let count = 0;
  while(currentNode){
    callback(currentNode, count);
    count = count + 1;
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function(searchValue){
  let index = -1;
  this.map(function(e, i){
    if(e.value === searchValue) index = i;
  });
  return index;
}

LinkedList.prototype.indexesOf = function(searchValue){
  let index = []
  this.map(function(e, i){
    if(e.value === searchValue) index.push(i);
  })
  return index;
}

let ll = new LinkedList();
ll.addToHead(53);
ll.addToHead(890);
ll.addToHead('Ciao');
ll.addToTail(199);
ll.addToTail(890);
ll.addToTail({nome:'Lorenzo', cognome:'Franceschini'});
ll.addToTail(890);
ll.addToTail(12);
//console.log(ll)
//ll.printNode();
//console.log('Remove from Head', ll.removeFromHead());
//console.log('Remove from Head', ll.removeFromHead());
//console.log('Remove from Head', ll.removeFromHead());
//console.log('Remove from Tail', ll.removeFromTail());
//console.log('Remove from Tail', ll.removeFromTail());
//console.log('Remove from Tail', ll.removeFromTail());
//ll.printFromNode();
//console.log(ll)
//ll.printList();
console.log(ll.search(890));
ll.map(function(e, i){
  if(e.value === 199){
    console.log('trovato in posizione', i+1)
  }
});
console.log(ll.indexOf(890));
console.log(ll.indexesOf(890));