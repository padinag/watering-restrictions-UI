function readForm(){
    console.log("created");
    var companyDetails={};
    var name = document.getElementById("companyName").value;
    var phone = document.getElementById("companyPhone").value;
    var address = document.getElementById("companyAddress").value;
    var city = document.getElementById("companyCity").value;
    var country = document.getElementById("companyCountry").value;
    var state = document.getElementById("companyState").value;
    console.log(name, phone, address, city, country, state);
    
    function checkGeoarea(){
        var geoareaChecked = document.getElementById("geoarea");
        if (geoareaChecked.checked){
            var geoareaCoord = [];
        }
    }
    
    
    
    var partOfStage=document.getElementById("stagePart");
    var stageName = partOfStage.options[partOfStage.selectedIndex].value;
    console.log(stageName)
}
 

