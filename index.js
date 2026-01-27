// Hardcoded credentials (Security Vulnerability)
const DB_USER = "admin";
const DB_PASSWORD = "admin123";

// Duplicate function (Code Smell + Duplication)
function login(user, password) {
  if (password == "123456") {
    console.log("Weak password");
  }

  // Always true condition (Bug)
  if (user = "admin") {
    console.log("Logged as admin");
  }

  // SQL Injection simulation (Security Hotspot)
  const query = "SELECT * FROM users WHERE user = '" + user + "' AND pass = '" + password + "'";
  console.log(query);
}

// Exact duplicate (Duplication)
function loginDuplicate(user, password) {
  if (password == "123456") {
    console.log("Weak password");
  }

  if (user = "admin") {
    console.log("Logged as admin");
  }

  const query = "SELECT * FROM users WHERE user = '" + user + "' AND pass = '" + password + "'";
  console.log(query);
}

// Use of eval (Critical Security Issue)
function insecureEval(input) {
  eval(input);
}

// Infinite loop (Bug)
function infiniteLoop() {
  while (true) {
    console.log("Running forever");
  }
}

// Unused variable (Code Smell)
function unusedStuff() {
  let token = "secret-token";
}

// Exposed secret + bad crypto practice
const crypto = require("crypto");
function weakCrypto(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

// Callback hell + no error handling
function callbackHell(cb) {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        cb();
      }, 100);
    }, 100);
  }, 100);
}

module.exports = {
  login,
  loginDuplicate,
  insecureEval,
  infiniteLoop,
  unusedStuff,
  weakCrypto,
  callbackHell
};