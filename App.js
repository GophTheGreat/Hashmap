// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class Hashmap {
  constructor() {
    this.startingSize = 8;
    this.buckets = new Array(this.startingSize).fill([]);
    this.capacity = 0;
    this.loadFactor = 0.75;
  }

  stringToNumber(string) {
    let hashCode = 0;
    const primeNumber = 31;

    for(let i = 0; i < string.length;  i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  }

  hash(string){
    let hashCode = this.stringToNumber(string);
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    let current = bucket;

    //walk through the linked list
    while(current) {
      if(current.key === key){
        current.value = value;
        return;
      }
      current = current.next;
    }

    //If we get past the previous step, we have a new key. Add a node
    const newNode = {key, value, next: this.buckets[index]};
    this.buckets[index] = newNode;
    this.capacity++;

    //Resize hashmap if size is too full
    if(this.capacity / this.buckets.length > this.loadFactor){
      this.resize();
    }
  }

  resize() {
    const oldBuckets = this.buckets;
    const newSize = oldBuckets.length * 2;
    this.buckets = new Array(newSize).fill([]);
    this.capacity = 0;

    //For each old bucket, walk down its length and rehash all key-value pairs
    for(let i = 0; i < oldBuckets.length; i++){
      let current = oldBuckets[i];
      while(current) {
        if(current.key){
          this.set(current.key, current.value);
        }
        current = current.next;
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    let current = bucket;

    //walk through the linked list. If it contains the key, return the value.
    while(current) {
      if(current.key === key){
        return current.value;
      }
      current = current.next;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    let current = bucket;

    //walk through the linked list. If it contains the key, return true.
    while(current) {
      if(current.key === key){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    let current = bucket;
    let prev = null;

    //walk through the linked list. If it contains the key, remove the object and link list appropriately.
    while(current) {
      if(current.key === key){
        if(prev){
          prev.next = current.next;
        }
        else{
          this.buckets[index] = [];
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  length() {
    return this.capacity;
  }

  clear() {
    this.buckets = new Array(this.startingSize).fill([]);
    this.capacity = 0;
  }

  keys() {
    let keys = [];
    //Loop through every bucket
    for(let i = 0; i < this.buckets.length; i++){
      //Within each bucket, walk down each linked list
      let current = this.buckets[i];
      while(current){
        if(current.key){
          keys.push(current.key);
        }
        current = current.next;
      }
    }
    return keys;
  }


  values() {
    let values = [];
    //Loop through every bucket
    for(let i = 0; i < this.buckets.length; i++){
      //Within each bucket, walk down each linked list
      let current = this.buckets[i];
      while(current){
        if(current.key){
          values.push(current.value);
        }
        current = current.next;
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    //Loop through every bucket
    for(let i = 0; i < this.buckets.length; i++){
      //Within each bucket, walk down each linked list
      let current = this.buckets[i];
      while(current){
        if(current.key){
          entries.push([current.key, current.value]);
        }
        current = current.next;
      }
    }
    return entries;
  }

}

module.exports = Hashmap;