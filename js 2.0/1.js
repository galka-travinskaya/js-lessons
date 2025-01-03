// Напиши функцию getAllPropValues(propName) которая принимает
// один параметр propName - имя (ключ) свойства. Функция должна
// вернуть массив всех значений свойства с таким именем из каждого
// объекта в массиве products. Если в объектах нет свойства с таким
// именем, функция должна вернуть пустой массив.

// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];
// console.log(products);

function getAllPropValues(propName) {
  const names = [];
  for (const key of Object.key(propName)) {
      console.log(key.name);
    // if (prop.name === propName) {
        names.push(key.name);
    // }
    return names;
  }
}
