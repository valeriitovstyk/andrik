const login = document.querySelector('.login');

function validateInput(e) {
    const input = e.target.value;
    const isName = /[a-z]+/.exec(input);
    const isDigit = /\d+/.exec(input);
    if (isName) {
        console.log({"login": input})
        return {"login": input};
    }
    return isDigit
        ? console.log({"email": input})
        : console.log("say user fuck");

}
login.addEventListener("blur", validateInput);

