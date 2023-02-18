// QUESTION 3
function classSubjects(value) {
    let dept = value.toLowerCase()
    let general = 'English, Mathematics'
    let science = 'Physics, Chemistry, Biology, Technical Drawing'
    let socialScience = 'Accounting, Commerce, Marketing, Geography'
    let arts = 'Government, Economics, Literature, History'
  
    if (dept === 'science') {
      console.log(`Bolatito, your subjects are ${general}, ${science}`)
    } else if (dept === 'social science') {
      console.log(`Bolatito, your subjects are ${general}, ${socialScience}`)
    } else if (dept === 'arts') {
      console.log(`Bolatito, your subjects are ${general}, ${arts}`)
    } else {
      console.log(`Bolatito, your subjects are ${general}.`)
    }
  }
  
  classSubjects('Science')
  
  // QUESTION 4
  for (let i = 1; i < 20; i += 7) {
    console.log(i)
  }
  
  // Question 5
  function nearestPower(num) {
    let powers = []
  
    for (let i = 1; i <= num; i += 1) {
      let powerTwo = 2 ** i
      if (powerTwo <= num) {
        powers.push(powerTwo)
      } else {
        break
      }
    }
  
    let res = powers[powers.length - 1]
    console.log(`The number ${res} is the power of 2 nearest to ${num}.`)
  }
  
  nearestPower(40)