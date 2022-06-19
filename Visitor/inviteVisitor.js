function popups() {
    let pop = document.getElementById("place");
    if (pop.value === "general")
    {
        window.alert("Badge color is Green");
    }else if (pop.value === "academic"){
        window.alert("Badge color is Blue");
    } else if (pop.value === "residence")
    {
        window.alert("Badge color is White");
    }

}
function carselect() {
    let car = document.getElementById("car");
    let park = document.getElementById("parkingType");
    if (car.value === "yes") {
        park.removeAttribute("hidden")
    } else if (car.value === "no") {
        park.setAttribute("hidden", "hidden");
    }
}

function type(status){
        let place = document.getElementById("place");
        let valuepla = place.options[0].value.ge;
        let select = document.getElementById('duration');
        let valuesel = select.options[select.selectedIndex].value;

    if (status === "student") {
           valuesel[1].setAttribute("hidden", "hidden")
            valuepla.setAttribute("hidden", "hidden")
        }
}
