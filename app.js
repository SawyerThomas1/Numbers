let userNum = document.getElementById("number");
userNum.addEventListener("keydown", function (e)  {
 if (e.keyCode === 13) {
     test(e);
 }
});
userNum.focus();

let counter = 0;

function test() {
   rand()
   User()
   compare()
}

function rand(){
    var rando = Math.floor(Math.random() * 10) + 1;
    var key = document.getElementById("random");
    key.innerHTML = rando;
    key.style.textAlign = "center";
   return rando
}

function User() {
    let user12 = document.getElementById("number").value;
    // alert(user12)
    var y = document.getElementById("userid");
    y.innerHTML= user12
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user12
}

function compare() {
    var a = User();
    var b = rand();
    var z =  document.getElementById("results");
    var c = document.getElementById("counter");



    if(a!= b){
        z.innerHTML = (`Better luck next time the number was ${b} and you picked ${a}`)
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++
        c.innerHTML = "you have tried " + counter + " times"
        c.style.padding = "20px";
        c.style.textAlign = "center";
        c.style.backgroundColor = "red";
    } else {
        z.innerHTML = (`You win good job you got ${a} and we got ${b}`)
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "you got it in " + counter + " tries"
        c.style.padding = "20px";
        c.style.textAlign = "center";
        c.style.backgroundColor = "green";
        counter = 0;
    }
    resetinput();
}

function resetinput() {
    document.getElementById("number").value = "";
}