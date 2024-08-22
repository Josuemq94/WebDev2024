

let weight = 70;
let height = 1.74;

function bmiCalculator(weight,height) {
    
    let bmi = weight/ (height*height);
    return (Math.round(bmi));
}


if (bmi < 18.5)
  return ("Your BMI is" +bmi+", so you are underweight.");

if (bmi > 18.5 && bmi < 24.9 )
    return ("Your BMI is" +bmi+ ", so you have a normal weight.");

if (bmi => 24.9 )
    return ("Your BMI is" +bmi+ ", so you are overweight.");

  