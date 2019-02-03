//for sorting depending
//on the type
function filter () {

    var value,type, card, fullCard, i; //variables used 
    value = document.getElementById("value").value.toUpperCase();
    card = document.getElementsByClassName("card-text");
    fullCard = document.getElementsByClassName("card");


    for(i=0; i <card.length; i++){
        type = card[i].getElementsByClassName("type");
        if  (type[0].innerHTML.toUpperCase().indexOf(value)){ 
             fullCard[i].style.display = "none"; //originaly flex 
        } else {
            //$('.card').addClass(".search")
            fullCard[i].style.display = "grid";
        } 
    }
}




//works for now but 
//when i type in 
//a value in it 
//and type new one
//it doesnt work
//
//might have to do with 
//line 16