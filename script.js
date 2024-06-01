
flag =0

string = ""

isequalpressed =false

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
    document.querySelector('.displayarea').appendChild(newdiv)
    if(text!="="){
        newdiv.innerHTML = text
    }
    newdiv.style.textAlign= "center"
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
    console.log(string)
    
    
})

