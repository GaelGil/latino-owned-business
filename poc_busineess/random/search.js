//for sorting depending
//on the type
function filter(type) {

    var value,type, card, fullCard, i; //variables used
    //value = document.getElementById("value").value.toUpperCase();
    value = type;
    card = document.getElementsByClassName("card-text");
    fullCard = document.getElementsByClassName("card");


    for(i=0; i <fullCard.length; i++){
        type = fullCard[i].getElementsByClassName("type");
        if  (type[0].innerHTML.toUpperCase().indexOf(value)){
             fullCard[i].style.display = "none"; //originaly flex
        } else {
            $('.card').addClass(".search")
            //fullCard[i].style.display = "grid";
        }
    }
}


//copy of function above to mess around with
/*
function ot() {

    var value,type, card, fullCard, i; //variables used
    //value = document.getElementById("value").value.toUpperCase();
    value = type;
    card = document.getElementsByClassName("card-text");
    fullCard = document.getElementsByClassName("card");


    for(i=0; i <fullCard.length; i++){
        type = fullCard[i].getElementsByClassName("type");
        if  (type[0].innerHTML.toUpperCase().indexOf(value)){
             fullCard[i].style.display = "none"; //originaly flex
        } else {
            $('.card').addClass(".search")
            //fullCard[i].style.display = "grid";
        }
    }
}*/


//works for now but
//when i type in
//a value in it
//and type new one
//it doesnt work
//
//might have to do with
//line 16
