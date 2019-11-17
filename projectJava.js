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
    //if (container.ChildNode !== null){
  // container.parentNode.removeChild(container);
//}
    let fortuneStr = JSON.stringify(fortune); //turn json into string
    let fortuneStrShort = fortuneStr.replace(fortuneStr.substring(0,11), ""); // start of string manipulation to eliminate 
                                                                            // nasty json leftovers and make fortune easier to read
        fortuneStrShort = fortuneStrShort.replace(fortuneStrShort.substring(fortuneStrShort.length -1, fortuneStrShort.length), "");
    for (i= 0; i <fortuneStrShort.length-1; i++){
        console.log(fortuneStrShort.substring(i,i+2));
        if (fortuneStrShort.charAt(i) === "\\"){
        
            fortuneStrShort = fortuneStrShort.replace(fortuneStrShort.substring(i, i+2), "  ");
            console.log(fortuneStrShort);
    }
    
    }
    let fortuneStrWithSpace = (fortuneStrShort + "\n"); //  \n didn't do anything and 
                                                        //fortuneStrWithSpace is the same as fortuneStrShort.
                                                        // left in since it doesn't affect anything. createElement(br) did tho add
                                                        //the  line break needed
    console.log (fortuneStrWithSpace);
    let fortuneStrTextNode = document.createTextNode(fortuneStrWithSpace);
    container.appendChild(fortuneStrTextNode);
    container.appendChild(document.createElement("br")); //could be thought of creating more code in html file; needed to 
                                                        //make new fortunes appear under the old ones
}

function atSameTime()
{
    fireAPI();
    displayFortune();
}