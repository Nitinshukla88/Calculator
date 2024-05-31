document.addEventListener("click",function(event){
    // elementr = event.target
    // text = elementr.textContent
    // newdiv = document.createElement('span')
    // newdiv.innerHTML = text
    // document.querySelector('.displayarea').appendChild(newdiv)
    // s

    elementr = event.target
    text = elementr.textContent
    while(text!='='){
        newdiv = document.createElement('span')
        newdiv.innerHTML = text
        document.querySelector('.displayarea').appendChild(newdiv)
        string=""
        string+=text
    }
    seldiv= document.getElementsByTagName('span')
    seldiv.innerHTML= eval(string)
})