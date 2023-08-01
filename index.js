function temp(tempC) {
  let tempF;
  let result;
  if (typeof tempC == 'number') {
    tempF = (tempC*9/5)+32;
    result = `${tempC} градусов по Цельсию равны ${tempF} градусам по Фаренгейту`;
    return result
  } else {
    result = `Вы ввели некорректное значение`;
    return result;
  }
}

module.exports = temp;

