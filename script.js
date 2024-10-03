document.getElementById("forms").addEventListener("submit", function(event){
    event.preventDefault(); 

    if (resultfunction()) {
        console.log("Form submitted successfully");
    }
});

function resultfunction(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var date =document.getElementById("date").value;
    var email= document.getElementById("email").value;
    var gender=document.getElementById("gender").value;
    var linkedin=document.getElementById("linkedin").value;
    var github=document.getElementById("github").value;
    var experience = document.getElementById("experience").value;
    console.log(fname.value);
    console.log(lname.value);
    console.log(date.value);
    console.log(email.value);
    console.log(gender.value);
    console.log(linkedin.value);
    console.log(github.value);
    console.log(experience.value)

    
    var divValues = document.getElementById("divvalues");
    divValues.innerHTML = '';

    var valuesArray = [
        `First Name: ${fname}`,
        `Last Name: ${lname}`,
        `Birthday: ${date}`,
        `Email: ${email}`,
        `Gender: ${gender}`,
        `LinkedIn: ${linkedin}`,
        `GitHub: ${github}`,
        `Experience: ${experience} years`
    ];

    valuesArray.forEach(element => {
        var p = document.createElement("p");
        p.textContent = element;
        divValues.appendChild(p);
    });

    if(fname.value===""){
        alert("name not entered");
        return false
       
    }
    
    else if(lname.value===""){
        alert("last name not entered");
        return false
        
    }

    else if(date.value===""){
        alert("date not entered");
        return false
        
    }

    else if(email.value===""){
        alert("email not entered");
        return false
        
    }

    else if(linkedin.value===""){
        alert("linkedin not entered");
        return false
        
    }


    else if(github.value===""){
        alert("github not entered");
        return false
        
    }

    else{
        return true
    }
    
    
}



