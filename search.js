//for sorting depending
//on the type
function filter () {

    var value,type, card, i;
    value = document.getElementById("value").value.toUpperCase();
    card = document.getElementsByClassName("card");

    for(i=0; i <card.length; i++){
        type = card[i].getElementsByClassName("type");
        if  (type[0].innerHTML.toUpperCase().indexOf(value)){
            card[i].style.display = "grid"; //originaly flex 
        } else {
            card[i].style.display = "none";
        }
    }
}

//not actually sorting 
// on type
//
//when function runs
//it displays weirdly 
//not reading the right
//thing maybe