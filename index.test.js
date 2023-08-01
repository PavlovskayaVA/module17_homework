const temp = require('./index');

describe('tests for temp.js', () => {
    const tempC = 15; //при tempF = const, и при tempC, равным любому другому значению, получим ошибку
    const tempF = 59; //при tempC = const, и при tempF, равным любому другому значению, получим ошибку
    const string = 'ten';
    it('tests for tempC-tempF, empty and string', () => {
      expect(temp(tempC)).toBe(`${tempC} градусов по Цельсию равны ${tempF} градусам по Фаренгейту`);
      expect(temp('string')).toBe(`Вы ввели некорректное значение`);
      expect(temp()).toBe(`Вы ввели некорректное значение`);
      expect(temp( )).toBe(`Вы ввели некорректное значение`);
      expect(temp(false)).toBe(`Вы ввели некорректное значение`);
    });
  });
