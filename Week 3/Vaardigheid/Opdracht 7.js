function isHerderName(name) {
    let uppercasename = name.toUpperCase()
    if (uppercasename === 'HERDER') {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isHerderName('Herder')); 
  console.log(isHerderName('Jansen')); 