// Exercise 1

function exercise_1(word) {
  const a = {};

  for (let b = 0; b < word.length; b++) {
    const c = word[b];
    if (a.hasOwnProperty(c)) {
      a[c].push(b);
    } else {
      a[c] = [b];
    }
  }

  return a;
}

console.log(exercise_1("dodo"));
console.log(exercise_1("froggy"));
console.log(exercise_1("grapes"));

// Exercise 2

function exercise_2(items, budget) {
  const a = [];

  for (const [b, c] of Object.entries(items)) {
    const d = parseFloat(c.replace(/[^0-9.-]+/g, ""));
    if (d <= parseFloat(budget)) {
      a.push(b);
    }
  }

  a.sort();

  return a;
}

console.log(
  exercise_2(
    {
      Water: "$1",
      Bread: "$3",
      TV: "$1,000",
      Fertilizer: "$20",
    },
    "$300"
  )
);

console.log(
  exercise_2(
    {
      Apple: "$4",
      Honey: "$3",
      Fan: "$14",
      Bananas: "$10",
      Pan: "$100",
      Spoon: "$2",
    },
    "$100"
  )
);

console.log(
  exercise_2(
    {
      Phone: "$999",
      Speakers: "$300",
      Laptop: "$5,000",
      PC: "$1200",
    },
    "$1"
  )
);

// Exercise 3

function exercise_3(students) {
  return students.map((student) => {
    const a = student.notes.length > 0 ? Math.max(...student.notes) : 0;
    return {
      name: student.name,
      topNote: a,
    };
  });
}

const students = [
  { name: "John", notes: [3, 5, 4] },
  { name: "Max", notes: [1, 4, 6] },
  { name: "Zygmund", notes: [1, 2, 3] },
];

console.log(exercise_3(students));

// Exercise 4

function exercise_4(jewelry) {
  let a = 0;
  let b = "";

  for (const [c, d] of Object.entries(jewelry)) {
    if (d > a) {
      a = d;
      b = c;
    }
  }

  return `Самая дорогая бижутерия это ${b}`;
}

console.log(
  exercise_4({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
  })
);

console.log(
  exercise_4({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500,
  })
);

// Exercise 5

function exercise_5(arr) {
  if (arr.includes(7)) {
    return "Boom!";
  } else {
    return "В массиве нет цифры 7";
  }
}

console.log(exercise_5([1, 2, 3, 4, 5, 6, 7]));
console.log(exercise_5([8, 6, 33, 100]));
console.log(exercise_5([2, 55, 60, 97, 86, 7]));
