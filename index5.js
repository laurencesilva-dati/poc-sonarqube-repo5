function greet(name) {
  if (!name) {
    return "Hello";
  }

  return `Hello ${name}`;
}

//teste na EKS 2026-01-23

module.exports = { greet };