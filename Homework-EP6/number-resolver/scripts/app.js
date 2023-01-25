const maxInput = document.getElementById('max-input')
const minInput = document.getElementById('min-input')
const resultText = document.getElementById('result-text')

const findLargest = () => {
  const max = maxInput.value
  const min = minInput.value

  let index = max
  let prime = 0

  do {
    let loop = 2
    let limit = index
    let isPrime = true

    do {
      if (index % loop === 0) {
        isPrime = false
        break
      }

      loop++
    } while (loop < limit)

    if (isPrime) {
      prime = index
      break
    }

    index--
  } while (index >= min)

  if (prime !== 0) {
    resultText.innerHTML = prime
  } else {
    resultText.innerHTML = 'No prime number found'
  }

  console.log(prime)
}

const findLowest = () => {
  const max = maxInput.value
  const min = minInput.value

  let primes = []

  for (let i = min; i <= max; i++) {
    let isPrime = true
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }

  if (primes[0] !== 0) {
    resultText.innerHTML = primes[0]
  } else {
    resultText.innerHTML = 'No prime number found'
  }
}



