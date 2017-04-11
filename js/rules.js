function readForm(){
    console.log("created");
    
//company details
    var companyDetails={};
    var name = document.getElementById("companyName").value;
    var phone = document.getElementById("companyPhone").value;
    var address = document.getElementById("companyAddress").value;
    var city = document.getElementById("companyCity").value;
    var country = document.getElementById("companyCountry").value;
    var state = document.getElementById("companyState").value;
    console.log(name, phone, address, city, country, state);
    
//geoarea  
    var geoareaChecked = document.getElementById("geoarea");
        if (geoareaChecked.checked){
          console.log("geoarea selected");
         }
    
//water restrictions valid from
//    var date = document.getElementById("dp6").value;
//      console.log(date);

//stage    
    var partOfStage=document.getElementById("stagePart");
    var stageName = partOfStage.options[partOfStage.selectedIndex].value;
    console.log(stageName)
    
//property type  
    var typeResidential = document.getElementById("IrrigationTypeResidential");
        if (typeResidential.checked){
            console.log("Residential");
        }
    
    var typeCommercial = document.getElementById("IrrigationTypeCommercial");
        if (typeCommercial.checked){
            console.log("Commercial");
        }
    
    var typePublic = document.getElementById("IrrigationTypePublic");
    if (typePublic.checked){
            console.log("Public");
        }
    
//Day
    var checkSunday = document.getElementById("weekday1");
    if (checkSunday.checked){
        console.log("Sunday");
    }
    
    var checkMonday = document.getElementById("weekday2");
    if (checkMonday.checked){
        console.log("Monday");
    }
    
    var checkTuesday = document.getElementById("weekday3");
    if (checkTuesday.checked){
        console.log("Tuesday");
    }
    
    var checkWednesday = document.getElementById("weekday4");
    if (checkWednesday.checked){
        console.log("Wednesday");
    }
    
    var checkThursday = document.getElementById("weekday5");
    if (checkThursday.checked){
        console.log("Thursday");
    }
    
    var checkFriday = document.getElementById("weekday6");
    if (checkFriday.checked){
        console.log("Friday");
    }
    
var checkSaturday = document.getElementById("weekday7");
    if (checkSaturday.checked){
        console.log("Saturday");
    }
}
 

