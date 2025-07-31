const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
fs.readFile('./firstname.txt', 'utf-8')
  .then(firstname => {
    return fs.readFile('./lastname.txt', 'utf-8')
      .then(lastname => ({ firstname, lastname }));
  })
  .then(data => {
    return fs.readFile('./age.txt', 'utf-8')
      .then(age => ({ ...data, age }));
  })
  .then(data => {
    return fs.readFile('./hobbies.txt', 'utf-8')
      .then(hobbies => {
        const hobbyArr = hobbies.split(',');
        data.hobbies = hobbyArr;
        return data;
      });
  })
  .then(data => {
    console.log(`${data.firstname} ${data.lastname} is ${data.age} years old and his hobbies are ${data.hobbies[0]} and ${data.hobbies[1]}`);
  })
  .catch(err => {
    console.error("Error with then-catch:", err);
  });


// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readFiles() {
  try {
    const firstname = await fs.readFile('./firstname.txt', 'utf-8');
    const lastname = await fs.readFile('./lastname.txt', 'utf-8');
    const age = await fs.readFile('./age.txt', 'utf-8');
    const hobbiesData = await fs.readFile('./hobbies.txt', 'utf-8');
    const hobbies = hobbiesData.split(',');

    console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`);
  } catch (err) {
    console.error("Error with async/await:", err);
  }
}

readFiles();