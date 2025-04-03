function signUp() {
/*
    let uName = document.getElementById("uname").value;
    let email = document.getElementById("em").value;
    let pass = document.getElementById("pass").value;
    let shipAdd = document.getElementById("shipA").value;
    let contact = document.getElementById("cont").value;

    if (pass.length < 8 || pass.length > 16) {
        alert("8-16 character password only.");
        return;
    }

    // Store user data
    localStorage.setItem("uName", uName);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    localStorage.setItem("shipAdd", shipAdd);
    localStorage.setItem("contact", contact);

    console.log("User registered:", { uName, email, pass, shipAdd, contact });
    */
    window.open("login.html", "_blank"); 
}

function login(){

    let LoginUser = document.getElementById("unameL").value;
    //let loginEmail = document.getElementById("emL").value;
    let loginPass = document.getElementById("passL").value;

    let storedUName = "admin123";
    //localStorage.getItem("uName");
    //let storedEmail = "admin123@gmail.com";
    //localStorage.getItem("email");
    let storedPass = "admin123";
    //localStorage.getItem("pass");

    if ((LoginUser !== storedUName && LoginUser !== storedEmail) ||  loginPass !== storedPass) {
        alert("Wrong email/username or password.");
        document.getElementById("loginBtn").disabled = true;
        setTimeout(()=>{
        alert("try again now.");
        document.getElementById("loginBtn").disabled = false;
        },10000);
    } else{
        console.log("Login successful!");
        window.open("login.html", "_blank");
    }
}

