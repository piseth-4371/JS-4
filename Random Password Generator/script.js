const passBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^*()_+~|}{[]<>/-=";

const allchars = upperCase + lowerCase +symbol +number;

function createPass(){
    let pass ="";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    // pass += symbol[Math.floor(Math.random() * symbol.length)];
    
    
    while(lenght > pass.length){
        pass += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passBox.value = pass;
}

function copyPass(){
    passBox.select();
    document.execCommand("copy");
    // navigator.clipboard.writeText(passBox.value);
}