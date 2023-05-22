function level1(numbers) {
  //   debugger;
  let checkRow = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let checkColumn = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let checkSquar = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //   for (let i = 0; i < numbers.length; i++) {
  //     for (let j = 0; j < numbers[i].length; j++) {
  //       checkRow[numbers[i][j]]++;
  //     }

  //     for (let i = 1; i < 10; i++) {
  //       if (checkRow[i] != 1) {
  //         return false;
  //         console.log(false);
  //       }
  //       checkRow[i] = 0;
  //     }

  //     return true;
  //   }
  //   for (let i = 0; i < 10; i++) {
  //     if (checkColumn[i] != 1) {
  //       return false;
  //       console.log(false);
  //     }
  //     checkColumn[i] = 0;
  //   }

  for (let i = 0; i < numbers.length; i++) {
    let j = 0;
    while (j < numbers[i]) {
      checkColumn[numbers[i++][j]];
    }
  }
  //   for (let i = 0; i < 10; i++) {
  //     if (checkColumn[i] != 1) {
  //       return false;
  //       console.log(false);
  //     }
  //     checkColumn[i] = 0;

  //     return true;
  //   }
}

level1([
  [8, 3, 5, 4, 1, 6, 9, 2, 7],
  [2, 9, 6, 8, 5, 7, 4, 3, 1],
  [4, 1, 7, 2, 9, 3, 6, 5, 8],
  [5, 6, 9, 1, 3, 4, 7, 8, 2],
  [1, 2, 3, 6, 7, 8, 5, 4, 9],
  [7, 4, 8, 5, 2, 9, 1, 6, 3],
  [6, 5, 2, 7, 8, 1, 3, 9, 4],
  [9, 8, 1, 3, 4, 5, 2, 7, 6],
  [3, 7, 4, 9, 6, 2, 8, 1, 5],
]);
