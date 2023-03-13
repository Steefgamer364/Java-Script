function bigNumber(num1) {
    if (num1 >= 1000) {
      return 'Ja';
    } else {
      return 'Nee';
    }
  }

  console.log(bigNumber(1001));