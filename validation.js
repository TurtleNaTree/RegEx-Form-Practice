// validation script here
// reg holds a regular express. Regular expressions are inside of two '/'.
/* var reg = /[a-z]/gi; */
// reg2 is the second way regular expressions are made
/* var reg2 = new RegExp(/[a-z]/, "i"); */

console.log("Hello World");

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation function
function validate(field, regex){
    //console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.className = 'valid';
    }
    else {
        field.className = 'invalid';
    }
}


inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});