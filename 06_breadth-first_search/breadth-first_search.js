const data = {
  ['Вы']: [ 'Боб', 'Клэр', 'Алиса' ],
  ['Боб']: [ 'Анудж', 'Пегги' ],
  ['Анудж']: [],
  ['Пегги']: [],
  ['Клэр']: [ 'Том', 'Джонни' ],
  ['Том']: [],
  ['Джонни']: [],
  ['Алиса']: [ 'Пегги' ],
};

const isSeller = (name) => name === 'Том';

const search = (name) => {
  let searchQueue = [...data[name]];
  let searched = [];

  while(searchQueue.length !== 0) {
    const person = searchQueue.shift();
    if (!searched.includes(person)) {
      if (isSeller(person)) {
        console.log(person);
        return true;
      }

      searched.push(person);
      searchQueue.push(...data[person]);
    }
  }

  return false;
}

search('Вы');
