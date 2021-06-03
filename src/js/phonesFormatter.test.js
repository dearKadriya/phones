import phonesFormatter from './phonesFormatter';

test('Проверка, что будут удалены пробелы, _, -, ()', () => {
  const result = phonesFormatter('+7 960 000 00 00');
  expect(result).toBe('+79600000000');
});

test('Проверка, что будет добавлен + в начале строки и заменена 8 на 7', () => {
  const result = phonesFormatter('8 (927) 000-00-00');
  expect(result).toBe('+79270000000');
});

test('Проверка, что будет распознан другой код страны и 8 останется', () => {
  const result = phonesFormatter('+86 000 000 0000');
  expect(result).toBe('+860000000000');
});

test('Проверка, что если придет номер не из задачи и вначале будет оставлена та цифра, что была', () => {
  const result = phonesFormatter('+999 000 000 0000');
  expect(result).toBe('+9990000000000');
});
