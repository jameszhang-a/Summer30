// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  {
    first  : 'Albert',
    last   : 'Einstein',
    year   : 1879,
    passed : 1955
  },
  {
    first  : 'Isaac',
    last   : 'Newton',
    year   : 1643,
    passed : 1727
  },
  {
    first  : 'Galileo',
    last   : 'Galilei',
    year   : 1564,
    passed : 1642
  },
  {
    first  : 'Marie',
    last   : 'Curie',
    year   : 1867,
    passed : 1934
  },
  {
    first  : 'Johannes',
    last   : 'Kepler',
    year   : 1571,
    passed : 1630
  },
  {
    first  : 'Nicolaus',
    last   : 'Copernicus',
    year   : 1473,
    passed : 1543
  },
  {
    first  : 'Max',
    last   : 'Planck',
    year   : 1858,
    passed : 1947
  },
  {
    first  : 'Katherine',
    last   : 'Blodgett',
    year   : 1898,
    passed : 1979
  },
  {
    first  : 'Ada',
    last   : 'Lovelace',
    year   : 1815,
    passed : 1852
  },
  {
    first  : 'Sarah E.',
    last   : 'Goode',
    year   : 1855,
    passed : 1905
  },
  {
    first  : 'Lise',
    last   : 'Meitner',
    year   : 1878,
    passed : 1968
  },
  {
    first  : 'Hanna',
    last   : 'Hammarström',
    year   : 1829,
    passed : 1909
  }
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank'
];

// For displaying the problem and solutions involving the inventers array
const displayArrObj = (arr, question) => {
  // For each small object
  arr.forEach((element) => {
    let row = '<tr>';
    for (const key in element) {
      const value = element[key];
      row += '<td>' + value + '</td>';
    }
    row += '</tr>';
    document.querySelector(`tbody#${question}`).innerHTML += row;
  });
};

const displayArr = (arr, question) => {
  let row = '';
  arr.map((item) => {
    row += '<tr>';
    row += '<td>' + item + '</td>';
    row += '</tr>';
  });
  document.querySelector(`tbody#${question}`).innerHTML += row;
};

displayArrObj(inventors, 'original');

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500 = inventors.filter(
  (person) => person.year >= 1500 && person.year <= 1599
);

displayArrObj(inventors1500, 'Q1');

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorNamesFull = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});

displayArr(inventorNamesFull, 'Q2');

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventor = inventors.sort((a, b) => a.year - b.year);
displayArrObj(sortedInventor, 'Q3');

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((sum, curr) => {
  sum + (curr.passed - curr.year);
}, 0);
document.querySelector('p#Q4').innerHTML += totalYears;

// 5. Sort the inventors by years lived
const sortedByAge = inventors.sort((a, b) => {
  const ageA = a.passed - a.year;
  const ageB = b.passed - b.year;
  return ageA - ageB;
});
displayArrObj(sortedByAge, 'Q5');

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
/*
const url = 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris';
const list = document.querySelector('.mw-category');
const names = Array.from(list.querySelectorAll('a'));

// Flatmap adds the return value to a new array, flattens by removing empty []
const de = names.flatMap(
  (name) => (name.innerText.includes('de') ? name.innerText : [])
);
*/

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedLastName = people.sort((a, b) => a.localeCompare(b));
console.log(sortedLastName);
displayArr(sortedLastName, 'Q7');

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
];

const occur = data.reduce((sum, curr) => {
  if (!(curr in sum)) sum[curr] = 0;
  sum[curr] += 1;
  return sum;
}, {});

// Append each item and occurance to the table
for (item in occur) {
  let row = '<tr>';
  row = row + '<td>' + item + '</td>';
  row = row + '<td>' + occur[item] + '</td>';
  row += '</tr';

  document.querySelector('tbody#Q8').innerHTML += row;
}
