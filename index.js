var arrray=document.querySelectorAll(".but");
var n=arrray.length;
document.querySelector(".b2").classList.add("b");
for(var i=0;i<n;i++){

    arrray[i].addEventListener("click",function(){
        var x=this.innerHTML;
        switch(x){

            case "Daily": daily();
                break;


            case "Weekly": weekly()
                    break;

            case "Monthly": monthly()
                break;

        }
        
    })

}

function daily(){

    var a=document.querySelectorAll(".time");
    var b=document.querySelectorAll(".last");


        a[0].innerHTML="5hrs";
        b[0].innerHTML="Last Week - 7hrs";

        a[1].innerHTML="1hrs";
        b[1].innerHTML="Last Week - 2hrs";

        a[2].innerHTML="0hrs";
        b[2].innerHTML="Last Week - 1hrs";

        a[3].innerHTML="1hrs";
        b[3].innerHTML="Last Week - 1hrs";

        a[4].innerHTML="1hrs";
        b[4].innerHTML="Last Week - 3hrs";

        a[5].innerHTML="0hrs";
        b[5].innerHTML="Last Week - 1hrs";

    document.querySelector(".b1").classList.add("b");
    document.querySelector(".b2").classList.remove("b");
}   document.querySelector(".b3").classList.remove("b");

function weekly(){

    var a=document.querySelectorAll(".time");
    var b=document.querySelectorAll(".last");


        a[0].innerHTML="32hrs";
        b[0].innerHTML="Last Week - 36hrs";

        a[1].innerHTML="10hrs";
        b[1].innerHTML="Last Week - 8hrs";

        a[2].innerHTML="4hrs";
        b[2].innerHTML="Last Week - 7hrs";

        a[3].innerHTML="4hrs";
        b[3].innerHTML="Last Week - 5hrs";

        a[4].innerHTML="5hrs";
        b[4].innerHTML="Last Week - 10hrs";

        a[5].innerHTML="2hrs";
        b[5].innerHTML="Last Week - 2hrs";

    document.querySelector(".b2").classList.add("b");
    document.querySelector(".b1").classList.remove("b");
    document.querySelector(".b3").classList.remove("b");

}

function monthly(){

    var a=document.querySelectorAll(".time");
    var b=document.querySelectorAll(".last");


    a[0].innerHTML="103hrs";
    b[0].innerHTML="Last Week - 128hrs";

    a[1].innerHTML="23hrs";
    b[1].innerHTML="Last Week - 29hrs";

    a[2].innerHTML="13hrs";
    b[2].innerHTML="Last Week - 19hrs";

    a[3].innerHTML="11hrs";
    b[3].innerHTML="Last Week - 18hrs";

    a[4].innerHTML="21hrs";
    b[4].innerHTML="Last Week - 23hrs";

    a[5].innerHTML="7hrs";
    b[5].innerHTML="Last Week - 11hrs";

    document.querySelector(".b3").classList.add("b");
    document.querySelector(".b2").classList.remove("b");
    document.querySelector(".b1").classList.remove("b");

}