let checkName = (firstName, lastName) => {
  if(firstName !== 'kevin' || lastName !=='kim'){
    console.log('You ain\'t Kevin Kim!');
    return('You ain\'t Kevin Kim!')
  } else {
    console.log('YOU ARE KEVIN KIM!');
        return('YOU ARE KEVIN KIM!');
  }
}

checkName('kevin', 'lee');
