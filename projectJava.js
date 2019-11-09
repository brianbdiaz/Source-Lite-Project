var request = new XMLHttpRequest();
var fortune
var cleanFortuneStr
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
    for (i= 0; i <fortuneStr.length-1; i++){
        console.log(fortuneStr.substring(i,i+2));
        if (fortuneStr.charAt(i) === "\\"){
        //if (fortuneStr.charAt(i+1) === "t" || fortuneStr.charAt(i+1) == "n")
        //{
            fortuneStr = fortuneStr.replace(fortuneStr.substring(i, i+2), "  ");
            //fortuneStr = fortuneStr.replace(fortuneStr.charAt(i+1), "  ");
            console.log(fortuneStr);
        //}
    }
    }
    let fortuneStrTextNode = document.createTextNode(fortuneStr);
    container.appendChild(fortuneStrTextNode);
}