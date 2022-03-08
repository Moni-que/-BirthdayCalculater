// writing a function with a variable
let button = document.getElementById("submission");
button.onclick=()=>{
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let gender = document.myform.gender.value;
    let endMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let today = new Date ();
    let realDays = today.getDate ();
    let realMonths = today.getMonth ();
    let realYears = today.getFullYear ();
    let femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// writing if statements to display answers
    if (date === "" || month === "" || year === "" || name === "" || gender === ""){
        alert ("please fill the form");
    }

}
