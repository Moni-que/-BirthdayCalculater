// function myDetails() {
//     let days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
//     let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     let femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
//     let maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

// }

// writing a function with a variable
function time() {
    let name = document.getElementById("name").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let gender = document.getElementById("gender").value
    let endMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let today = new Date ();
    let realDays = today.getDate ();
    let realMonths = today.getMonth ();
    let realYears = today.getFullYear ();
}
// writing if statements to display answers