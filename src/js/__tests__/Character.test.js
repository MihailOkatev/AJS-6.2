import Character from '../Character';

test('should deal 6 deal', () => {
  const result = new Character('Merlin', 'Wonder');
  result.damage(10);

  expect(result).toEqual({
    name: 'Merlin',
    health: 94,
    type: 'Wonder',
    attack: 10,
    defence: 40,
  });
});

test('health go to zero', () => {
  const result = new Character('Merlin', 'Wonder');
  result.damage(100000);

  expect(result).toEqual({
    name: 'Merlin',
    health: 0,
    type: 'Wonder',
    attack: 10,
    defence: 40,
  });
});

test('damage error', () => {
  function result() {
    const merlin = new Character('Mergin', 'Necromant');
    merlin.damage(-20);
  }
  expect(result).toThrow();
});
