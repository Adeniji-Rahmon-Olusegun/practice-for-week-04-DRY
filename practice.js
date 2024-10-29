function largeNumber(num1, num2) {
  let bigger;

  if (num1 > num2) {
    bigger = num1;
  } else {
    bigger = num2;
  }

  return bigger;
}

function smallerNumber(num1, num2) {
  let smaller;

  if (num1 < num2) {
    smaller = num1;
  } else {
    smaller = num2;
  }

  return smaller;
}

function multiplyBiggerNumByTwo(num1, num2) {
  
  let bigNum = largeNumber(num1, num2);

  return bigNum * 2;

}

function divideBiggerNumByThree(num1, num2) {

  let bigNum = largeNumber(num1, num2);

  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  
  let bigNum = largeNumber(sum1, sum2);

  return `I ate ${bigNum} tacos.`
}

function adoptSmallerDog(weight1, weight2) {
  
  let smallDog = smallerNumber(weight1, weight2);

  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};