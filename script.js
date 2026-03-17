function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function checkPrime() {
  const number = Number(document.getElementById("numberInput").value);
  const result = document.getElementById("result");

  if (isNaN(number)) {
    result.textContent = "Будь ласка введіть число";
    return;
  }

  if (isPrime(number)) {
    result.textContent = number + " — просте число";
  } else {
    result.textContent = number + " — не просте число";
  }
}
