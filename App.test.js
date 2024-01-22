const Hashmap = require('./App')

test('hashing', () => {
  let hashmap = new Hashmap();
  expect(hashmap.hash('A')).toBe(1);
  expect(hashmap.hash('aA')).toBe(0);
  expect(hashmap.hash('Aabbd')).toBe(4);
});

test('set', () => {
  let hashmap = new Hashmap();
  hashmap.set('Group', 'Monster')
  expect(hashmap.buckets[7].key).toBe('Group')
  expect(hashmap.buckets[7].value === 'Monster')

  hashmap.set('Group', 'Ding')
  expect(hashmap.buckets[7].key).toBe('Group')
  expect(hashmap.buckets[7].value).toBe('Ding')

  hashmap.set('O', 'Cool')
  expect(hashmap.buckets[7].key).toBe('O')
  expect(hashmap.buckets[7].value).toBe('Cool')
})


test('get', () => {
  let hashmap = new Hashmap();
  hashmap.set('Modod', 'Monster')
  expect(hashmap.get('Modod')).toBe('Monster')
  expect(hashmap.get('doo')).toBe(null);

  hashmap.set('Chill', 'Screwby')
  expect(hashmap.get('Chill')).toBe('Screwby')
})

test('resize', () => {
  let hashmap = new Hashmap();
  hashmap.set('Modod', 'Monster')
  hashmap.set('AFdadf', 'Cool')
  hashmap.set('Hat', 'Hot')
  hashmap.set('Charming', 'Wet')
  hashmap.set('Binned', 'Derivative')
  hashmap.set('Delicious', 'Sixty 6')
  hashmap.set('Cataphract', 'Freedom')
})

test('has', () => {
  let hashmap = new Hashmap();
  hashmap.set('Modod', 'Monster')
  expect(hashmap.has('Modod')).toBe(true)
  expect(hashmap.has('asfasfsa')).toBe(false);
  expect(hashmap.has('doo')).toBe(false);
})

test('remove', () => {
  let hashmap = new Hashmap();
  hashmap.set('Modod', 'Monster')
  expect(hashmap.remove('Modod')).toBe(true);
  expect(hashmap.remove('Tree')).toBe(false);

  
  hashmap.set('bC', 'Dead')
  hashmap.set('Ab', 'Erudite')
  expect(hashmap.remove('bC')).toBe(true);
})

test('length', () => {
  let hashmap = new Hashmap();
  hashmap.set('bC', 'Dead')
  hashmap.set('Ab', 'Erudite')
  hashmap.set('bC', 'Dead')
  hashmap.set('Ab', 'Erudite')
  expect(hashmap.length()).toBe(2);

  hashmap.set('asdwer', 'Dead')
  hashmap.set('AOFAOD', 'Erudite')
  expect(hashmap.length()).toBe(4);
})

test('clear', () => {
  let hashmap = new Hashmap();
  hashmap.set('bC', 'Dead')
  hashmap.set('Ab', 'Erudite')
  hashmap.set('bC', 'Dead')
  hashmap.set('Ab', 'Erudite')

  hashmap.clear()
  expect(hashmap.length()).toBe(0);
})

test('keys', () => {
  let hashmap = new Hashmap();
  hashmap.set('AAA', 'AAA')
  hashmap.set('BBB', 'BBB')
  hashmap.set('CCC', 'CCC')
  hashmap.set('DDD', 'DDD')

  const keys = hashmap.keys();
  expect(keys.includes('AAA')).toBe(true);
  expect(keys.includes('BBB')).toBe(true);
  expect(keys.includes('CCC')).toBe(true);
  expect(keys.includes('DDD')).toBe(true);
  expect(keys.includes('eeeerw')).toBe(false);
})

test('values', () => {
  let hashmap = new Hashmap();
  hashmap.set('AAA', 'LAMB')
  hashmap.set('BBB', 'BBCATB')
  hashmap.set('CCC', 'STARWOLF')
  hashmap.set('DDD', 'UNICORN')

  const values = hashmap.values();
  expect(values.includes('LAMB')).toBe(true);
  expect(values.includes('BBCATB')).toBe(true);
  expect(values.includes('STARWOLF')).toBe(true);
  expect(values.includes('UNICORN')).toBe(true);
  expect(values.includes('eeeerw')).toBe(false);
})

test('entries', () => {
  let hashmap = new Hashmap();
  hashmap.set('AAA', 'LAMB')
  hashmap.set('BBB', 'BBCATB')
  hashmap.set('CCC', 'STARWOLF')
  hashmap.set('DDD', 'UNICORN')

  const entries = hashmap.entries();
  console.log(entries);
  expect(entries.some(element => element[0] === 'AAA' && element[1] === 'LAMB')).toBe(true);
  expect(entries.some(element => element[0] === 'BBB' && element[1] === 'BBCATB')).toBe(true);
  expect(entries.some(element => element[0] === 'CCC' && element[1] === 'STARWOLF')).toBe(true);
  expect(entries.some(element => element[0] === 'DDD' && element[1] === 'UNICORN')).toBe(true);
  expect(entries.some(element => element[0] === 'EEE' && element[1] === 'EEEEE')).toBe(false);

})