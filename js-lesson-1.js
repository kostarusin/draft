try {
  const data = JSON.parse('{"username": "Mango"}');
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // "Unexpected token u in JSON at position 1"
}

console.log("✅ This is fine, we handled parse error in try...catch");