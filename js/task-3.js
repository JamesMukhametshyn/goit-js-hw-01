function checkForSpam(_message) {

  const one = 'spam';
  const two = 'sale';



  const hasSpam = _message.toLowerCase().includes(one) || _message.toLowerCase().includes(two);
  {return hasSpam;
}

  // if (hasSpam) {
  //   console.log("true");
  // } else {
  //   console.log("false");

  // }
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true