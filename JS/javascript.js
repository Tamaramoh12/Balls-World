
// validation rule 

var type = prompt("please write the number that refers to your favorite type ('1 for lazy cake, 2 for coconut, 3 for oat') ");

    if(type == 1)
        alert("you chose lazy cake");
    else if (type == 2)
        alert("you chose coconut");
    else if (type == 3)
        alert("you chose oat");
    else{
        alert("you didn't choose anything ");
        type = prompt("please write 1,2, or 3 ");
        while(type <1 && type >3)
            alert("please write 1,2, or 3 ");
            type++;
    }


