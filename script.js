let theButton = document.getElementById("submission");
theButton.onclick=()=>{
    let theDisplay = document.getElementById("empty");
    let name = document.getElementById("name").value;
    let theDate = document.getElementById("date").value;
    let gender = document.myform.gender.value;
    let today = new Date(theDate);
    let realDays = today.getDay();
    let femaleAkanNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleAkanNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    event.preventDefault();


    if(name==="" || date==="" || gender===""){
        alert("please fill the form");
    }else if(gender==="male"){
        theDisplay.innerHTML=`Your Akan name is ${femaleAkanNames[realDays]} <br> Thank You`;
    }else{
        theDisplay.innerHTML=`Your Akan name is ${femaleAkanNames[realDays]} <br> Thank You`;
    }
}
