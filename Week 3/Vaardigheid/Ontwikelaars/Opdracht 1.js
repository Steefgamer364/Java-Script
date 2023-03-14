function calculateAge(birthdate) {
    const dob = new Date(birthdate);
    
    const ageInMs = Date.now() - dob.getTime();
    
    const years = Math.floor(ageInMs / 31556952000);
    const days = Math.floor((ageInMs % 31556952000) / 86400000);
    
    return { years, days };
  }
  
  const birthdate = '1990-05-21';
  const age = calculateAge(birthdate);
  console.log(`You are ${age.years} years and ${age.days} days old.`);