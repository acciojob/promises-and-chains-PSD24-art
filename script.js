let age = document.getElementById("age");
let name = document.getElementById("name");
let btn = document.getElementById("btn");
let userForm = document.getElementById("userForm");

btn.addEventListener("click", (e) => {
  if (name.value === "" || age.value === "") {
    alert("Please enter valid details");
    return;
  }
  e.preventDefault();

  if (age.value >= 18) {
    resolvePromise().then((data) => {
      setTimeout(() => {
        alert(`Welcome, ${name.value}. You can vote.`);
        name.value = "";
        age.value = "";
      }, 4000);
    });
  } else if (age.value < 18) {
    rejectedPromise().catch((e) => {
      setTimeout(() => {
        alert(`Oh sorry ${name.value}. You aren't old enough.`);
        name.value = "";
        age.value = "";
      }, 4000);
    });
  }
});

function resolvePromise() {
  let promise = new Promise((res, rej) => {
    res();
  });

  return promise;
}

function rejectedPromise() {
  let promise = new Promise((res, rej) => {
    rej();
  });
  return promise;
}
