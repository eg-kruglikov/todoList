function checkEmail(email) {
  const regexForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  return regexForEmail.test(email) 
}


function checkNick(nick) {
  
  return nick.length > 3
}


function checkPass(pass) {
  
  return pass.length > 7
}

export {
  checkEmail,
  checkNick,
  checkPass 
}