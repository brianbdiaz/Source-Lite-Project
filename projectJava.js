var request = new XMLHttpRequest();
var fortune
function fireAPI(){
    request.open("GET", "https://cors-anywhere.herokuapp.com/http://yerkee.com/api/fortune");
    request.onload = function(){
   // {
    //    console.log(request.response);
    //}
    let result = request.response;
    let resultObj = JSON.parse(result); //javascript obj
    console.log(resultObj)
    fortune = resultObj;
    console.log(fortune);
}
    request.send();
}
function displayFortune(){
    let container = document.getElementById('getFortune');
    let fortuneStr = JSON.stringify(fortune);
    let fortuneStrTextNode = document.createTextNode(fortuneStr);
    container.appendChild(fortuneStrTextNode);
}