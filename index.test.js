const { L1 } = require('./index.js');

test('Удаление ложных значений из непустого массива', () => {

    //Arrange
    let l = new L1();

    const array = [45, '', 0, 'hello', 4.7, false];
    const expectedResult = [45, 'hello', 4.7]

    //Act
    const result = l.removeFalsyValues(array);

    //Assert
    expect(result).toEqual(expectedResult);

});

test('Во входном массиве все элементы ложные', () => {

    //Arrange
    let l = new L1();

    const array = ['', 0, false, null, NaN, undefined, 0n];
    const expectedResult = []

    //Act
    const result = l.removeFalsyValues(array);

    //Assert
    expect(result).toEqual(expectedResult);

});

test('Все значения в массиве не ложные', () => {

    //Arrange
    let l = new L1();

    const array = [45, 'hello', 4.7, true, 12n];
    const expectedResult = [45, 'hello', 4.7, true, 12n]

    //Act
    const result = l.removeFalsyValues(array);

    //Assert
    expect(result).toEqual(expectedResult);

});


test('Передача пустого массива', () => {

    //Arrange
    let l = new L1();

    const array = [];
    const expectedResult = []

    //Act
    const result = l.removeFalsyValues(array);

    //Assert
    expect(result).toEqual(expectedResult);

});

test('Исключение при элементе типа массив', () => {
    //Arrange
    let l = new L1();

    const array = [45, '', 0, 'hello', 4.7, [], false];

    //Act

    //Assert
    expect(() => l.removeFalsyValues(array)).toThrow('Элемент массив');

});