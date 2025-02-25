export default function QueryProcessor(query: string): string {
  query = query.toLowerCase(); // Normalize the query to lowercase for consistent processing

  // Handle Shakespeare-related query
  if (query.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  // Respond with a hardcoded name for queries including "name"
  if (query.includes("name")) {
    return "Rohan";
  }

  // Respond with a hardcoded Andrew ID for relevant queries
  if (query.includes("andrew id")) {
    return "rkinny";
  }

  // Dynamic processing for finding the largest number
  if (query.includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const maxNumber = Math.max(...numbers.map(Number));
      return maxNumber.toString();
    }
  }

  // Dynamic addition processing
  if (query.includes("what is") && query.includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
      return sum.toString();
    }
  }

  // Dynamic multiplication processing
  if (query.includes("what is") && query.includes("multiplied by")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) { // Ensure two numbers are present
      const product = numbers.reduce((acc, num) => acc * Number(num), 1);
      return product.toString();
    }
  }

  // Check if the number is both a square and a cube (sixth power)
  if (query.includes("which of the following numbers is both a square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const sixthPowers = numbers.filter(num => {
        let sixthRoot = Math.pow(Number(num), 1/6);
        return sixthRoot === Math.floor(sixthRoot); // Check if the sixth root is an integer
      });
      if (sixthPowers.length > 0) {
        return sixthPowers.join(", "); // Return all valid numbers
      }
      return "None";
    }
  }
  // Check if the number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// Process prime number query
if (query.includes("which of the following numbers are primes")) {
  const numbers = query.match(/\d+/g);
  if (numbers) {
    const primeNumbers = numbers.filter(num => isPrime(Number(num)));
    return primeNumbers.length > 0 ? primeNumbers.join(", ") : "None are prime";
  }
}

// Process subtraction query
if (query.includes("what is") && query.includes("minus")) {
  const numbers = query.match(/\d+/g);
  if (numbers && numbers.length === 2) {
    const result = Number(numbers[0]) - Number(numbers[1]);
    return result.toString();
  }
}

  // Default response if no known query patterns match
  return "Query not recognized";
}
