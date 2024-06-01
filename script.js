
flag =0

string = ""

isequalpressed =false

childcount=0

document.addEventListener("click",function(event){
    if(isequalpressed== true){
        document.querySelector('.displayarea').replaceChildren()
        isequalpressed=false
    }
    elementr = event.target
    text = elementr.textContent
    if(flag==1 && text!="AC"){
        document.querySelector('.displayarea').replaceChildren()
        document.querySelector('.displayarea').style.visibility= "visible"
        flag=0
    }
    newdiv = document.createElement('span')
    
    
    if(text!="="){
        newdiv.innerHTML = text
    }
    // newdiv.style.margin="200px"
    newdiv.style.position="absolute"
    newdiv.style.right="0"
    newdiv.style.textAlign= "center"
    document.querySelector('.displayarea').appendChild(newdiv)
    if(text=="AC" && flag ==0){
        document.querySelector('.displayarea').style.visibility= "hidden"
        flag=1
    }
    if(text=="="){
        document.querySelector('.displayarea').replaceChildren()
        ans= document.createElement('span')
        ans.innerHTML= eval(string)
        document.querySelector('.displayarea').appendChild(ans)
        isequalpressed= true
        string =""
    }
    if(text!="AC" && text!="="){
        string+=text
    }
})

