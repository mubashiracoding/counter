let count=0;
document.getElementsByClassName("btn decrease");
function decrease() {
    count-=1;
    document.getElementById("value").innerHTML=count;
}
document.getElementsByClassName("btn increase");
function increase() {
    count+=1;
    document.getElementById("value").innerHTML=count;
}
document.getElementsByClassName("btnreset ");
function reset() {
    count=0;
    document.getElementById("value").innerHTML=count;
}
