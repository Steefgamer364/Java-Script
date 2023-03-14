function Studeren(leeftijd, opleiding) {
    if (leeftijd >= 10 & opleiding == 'Vmbo') {
      return 'Goed';
    }else{
      return 'Fuck Off';
    }
  }
  
  console.log(Studeren(10, 'Vmbo')); 