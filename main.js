var num = 0;
function calculate(){
    num = Number(document.getElementById("multi").value);
area = num * num;
peri = num * 4;
document.getElementById("area").innerHTML = area;
document.getElementById("length").innerHTML = peri;
}