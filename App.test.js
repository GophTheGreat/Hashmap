const Hashmap = require('./App')

test('hashing', () => {
  let hashmap = new Hashmap();
  expect(hashmap.hash('A')).toBe(1);
  expect(hashmap.hash('aA')).toBe(0);
  expect(hashmap.hash('Aabbd')).toBe(4);
  expect(hashmap.hash('Afre')).toBe(8);
  expect(hashmap.hash('fAre')).toBe(14);
});

test('set', () => {
  let hashmap = new Hashmap();
  hashmap.set('Group', 'Monster')
  expect(hashmap.buckets[15].key).toBe('Group')
  expect(hashmap.buckets[15].value === 'Monster')

  hashmap.set('Group', 'Ding')
  expect(hashmap.buckets[15].key).toBe('Group')
  expect(hashmap.buckets[15].value).toBe('Ding')

  hashmap.set('O', 'Cool')
  expect(hashmap.buckets[15].key).toBe('O')
  expect(hashmap.buckets[15].value).toBe('Cool')

  console.log(hashmap);
  console.log(hashmap.buckets[15].next);
})