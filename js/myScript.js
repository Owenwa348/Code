function myFunction(){

    alert("Hello CSMJU");
    console.log("Hello JS");
    
    console.log(document.getElementById("header1").innerText);
    document.getElementById("header1").innerHTML="Change.....";
    document.getElementById("header1").style.color = "#FF0000";
    var x = 8;
    var y = 20;
    var z = 3;
    document.getElementById("header2").innerHTML =((x+y+z)/3).toFixed(2);  /*ทศนิยม 2ตำแหน่ง*/ 
    // document.getElementById("header2").innerHTML =((x+y+z)/3).toPrecision(2); เอาทศนิยมออก

}
function likeFunction(){
    // document.getElementById("result").innerHTML = (+1);
    var counter =
    parseInt(document.getElementById("result").innerText);
    counter++;
    document.getElementById("result").innerText = counter;
    document.getElementById("result").style.fontSize = 10+counter+"%";
    
}
function loveFunction(){
    // document.getElementById("result").innerHTML = (+10);
    var counter =
    parseInt(document.getElementById("result").innerText);
    counter = counter+10;
    document.getElementById("result").innerText = counter;
    document.getElementById("result").style.fontSize = 10+counter+"%";
}
function SadFunction(){
    // document.getElementById("result").innerHTML = (+10);
    var counter =
    parseInt(document.getElementById("result").innerText);
    counter = counter-10;
    document.getElementById("result").innerText = counter;
    document.getElementById("result").style.fontSize = 10+counter+"%";
}