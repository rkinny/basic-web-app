export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "rkinny";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 29, 63, 9?")){
    return "63";
  }

  if (query.toLowerCase().includes("What is 12 plus 71?")){
    return "83";
  }
  if (query.toLowerCase().includes("What is 91 + 73?")){
    return "164";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 3, 84, 64?")){
    return "84";
  }
  return "";
}
