// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class Hashmap {
  constructor() {
    this.buckets = new Array(16).fill([]);
    this.capacity = this.buckets.length;
    this.loadFactor = 0.75;
    this.size = 0;
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
    let current = bucket[0];

    //walk through the linked list
    while(current) {
      if(current.key === key){
        current.value = value;
        return;
      }
      cur = cur.next;
    }

    //If we get past the previous step, we have a new key. Add a node.
    const newNode = {key, value, next: this.buckets[index]};
    this.buckets[index] = newNode;

    if(this.size / this.capacity > this.loadFactor){
      this.resize();
    }
  }

  resize() {
    const newCapacity = this.capacity * 2;
    const newBuckets = new Array(newCapacity).fill([]);

    //For each bucket, walk down its length and rehash all key-value pairspairs
    for(let i = 0; i < this.capacity; i++){
      let cur = bucket[i];
      while(cur) {
        
        cur = cur.next;
      }
    }
  }

  get(key) {


    return value;
  }

  remove(key){

  }

  length(){

  }

  clear(){

  }

}

module.exports = Hashmap;