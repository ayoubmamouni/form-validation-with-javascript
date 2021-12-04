//elements
//get main form
const mainForm = document.querySelector(".main-form");

//p tag, bellow every form item (label and input).
const textErrBelowElemet = document.querySelectorAll(".err-text");

//all inputs includes textarea
const inputItem = document.querySelectorAll(".input-item");

//all input, when user start typing, remove any error message..
inputItem.forEach((i) => {
  const inputHandler = () => {
    textErrBelowElemet.forEach((i) => {
      i.classList.remove("active");
    });
  };
  i.addEventListener("input", inputHandler);
});

//error p tag
const errTxtInFname = document.querySelector(".err-text.err-in-fname"),
  errTxtInLname = document.querySelector(".err-text.err-in-lname"),
  errTxtInAge = document.querySelector(".err-text.err-in-age"),
  errTxtInSub = document.querySelector(".err-text.err-in-sub"),
  errTxtInMsg = document.querySelector(".err-text.err-in-msg");

//main input fields
const fname = document.querySelector("#fname"),
  lname = document.querySelector("#lname"),
  age = document.querySelector("#age"),
  sub = document.querySelector("#sub"),
  msg = document.querySelector("#msg");

//errors elements
const errorContent = document.querySelector(".errorMsg");
const errorTxt = document.querySelector(".errorMsg .err");

let everythingIsOk = false;

let fNameIsOk = false;
let lNameIsOk = false;
let ageIsOk = false;
let subjectIsOk = false;
let messageIsOk = false;

function showErr() {
  errorContent.classList.add("active");
  errorTxt.innerText = "Form not submitted, fix the errors and try again!";
  setTimeout(() => errorContent.classList.remove("active"), 3000);
}

const errInFname = (textError) => {
  errTxtInFname.classList.add("active");
  errTxtInFname.innerText = textError;
  everythingIsOk = false;
  showErr();
};
const errInLname = (textError) => {
  errTxtInLname.classList.add("active");
  errTxtInLname.innerText = textError;
  everythingIsOk = false;
  showErr();
};
const errInAge = (textError) => {
  errTxtInAge.classList.add("active");
  errTxtInAge.innerText = textError;
  everythingIsOk = false;
  showErr();
};
const errInSub = (textError) => {
  errTxtInSub.classList.add("active");
  errTxtInSub.innerText = textError;
  everythingIsOk = false;
  showErr();
};
const errInMsg = (textError) => {
  errTxtInMsg.classList.add("active");
  errTxtInMsg.innerText = textError;
  everythingIsOk = false;
  showErr();
};

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //first name handling
  const firstname = fname.value;
  const lastname = lname.value;
  const userAge = parseInt(age.value);
  const TheSubject = sub.value;
  const userMsg = msg.value;

  if (!firstname) {
    errInFname("First name is required");
  } else if (firstname.length > 0 && firstname.length <= 2) {
    //if firstname is less than 2 characters/ I think there is no name less than 2 characters ;)
    errInFname(
      "The first name is too short, should be greater than 2 characters"
    );
  } else if (firstname.length >= 16) {
    errInFname("The first name should be less than 15 characters!");
  } else {
    fNameIsOk = true;
  }
  //last name handling
  if (!lastname) {
    errInLname("Last name is required");
  } else if (lastname.length > 0 && lastname.length <= 1) {
    errInLname("1 character as a last name is not allowed");
  } else if (lastname.length >= 21) {
    errInLname("The last name should be less than 20 characters!");
  } else {
    lNameIsOk = true;
  }

  //Age handling
  if (!userAge) {
    errInAge("Age is required");
  } else if (userAge < 10 || userAge > 100) {
    errInAge("Age must be between 10 and 100");
  } else {
    ageIsOk = true;
  }

  //subject
  if (!TheSubject) {
    errInSub("The subject is required");
  } else if (TheSubject.length > 0 && TheSubject.length <= 4) {
    errInSub("The subject must contain at least 5 characters!");
  } else if (TheSubject.length > 30) {
    errInSub("Only 30 characters allowed in the subject!");
  } else {
    subjectIsOk = true;
  }

  //User message
  if (!userMsg) {
    errInMsg("The message is empty! You should write somthing.");
  } else if (userMsg.length > 0 && userMsg.length <= 4) {
    errInMsg("You should write at least 5 characters!");
  } else if (userMsg.length > 300) {
    errInMsg("Only 300 characters allowed in the message!");
  } else {
    messageIsOk = true;
  }
  //if everything is good
  const noError = () => {
    //send info to server
    // Now we can send the user info to the server with fetch API for example..
    //But for now we will show success html page to the user!
    //we don't have to do this but just for testing.. ;)
    window.location.href = "/success.html";
  };
  if (fNameIsOk && lNameIsOk && ageIsOk && subjectIsOk && messageIsOk) {
    everythingIsOk = true;
  }
  everythingIsOk && noError();
});
