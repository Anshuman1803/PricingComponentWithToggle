let checkBox = document.querySelector('#ToggleSwitch');
let BasicPrice = document.getElementById("BasicPrice");
let ProfessionalPrice = document.getElementById("ProfessionalPrice");
let MasterPrice = document.getElementById("MasterPrice");

checkBox.addEventListener('change', function(){
    if(checkBox.checked){
        console.log("You checked the box ");
        BasicPrice.innerHTML = "$19.99"
        ProfessionalPrice.innerHTML = "$24.99"
        MasterPrice.innerHTML = "$39.99"
    } else {
        BasicPrice.innerHTML = "$199.99"
        ProfessionalPrice.innerHTML = "$249.99"
        MasterPrice.innerHTML = "$399.99"
    }
});