// Code your solutions in this file
// writeCards(["Ada", "Brendan", "Ali"], "birthday");
// [
//     "Thank you, Ada, for the wonderful birthday gift!",
//     "Thank you, Brendan, for the wonderful birthday gift!",
//     "Thank you, Ali, for the wonderful birthday gift!"
//   ];

  function writeCards(people, event) {
      const newArray = []
      for (let i = 0; i < people.length; i++) {
        newArray.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
      }
    return newArray
  }

  function countDown(num) {
    let i = 0
    while (i < 11) {
      console.log(i);
      i++
    }
    return num

  }
