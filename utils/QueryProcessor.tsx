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
    return "Riya Kinny";
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

  // Default response if no known query patterns match
  return "Query not recognized";
}
