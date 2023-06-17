(() => {
  const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const avengers: string[] = ["Captain America", "Hulk", "Iron Man"];

  avengers.push("Thor");

  console.log({ numbers, avengers })

  avengers.forEach((av) => {
    console.log(av);
  });

})();
