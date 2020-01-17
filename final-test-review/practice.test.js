const tasks = require('./index')
  
describe('Task 1', () => {
  test('should return phrase from 2 words', () => {
      expect(tasks.task1('Hello', 'Maksym')).toBe('Hello, Maksym');
  });
})
 
describe('Task 2', () => {
  test('should return arr length', () => {
      expect(tasks.task2(['item1', 'item2'])).toBe('В массиве 2 элементов')
  });
  test('should return empty arr', () => {
    expect(tasks.task2([])).toBe('Массив пустой')
  });
})