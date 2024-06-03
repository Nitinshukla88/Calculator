
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
    
    
    if(text!="="){
        newdiv.innerHTML = text
    }
    // newdiv.style.margin="200px"
    newdiv.style.textAlign= "center"
    newdiv.style.fontSize="1.7rem"
    newdiv.style.marginLeft="20px"
    newdiv.style.color="white"
    document.querySelector('.displayarea').appendChild(newdiv)
    if(text=="AC" && flag ==0){
        document.querySelector('.displayarea').style.visibility= "hidden"
        flag=1
    }
    if(text=="="){
        // document.querySelector('.displayarea').replaceChildren()

        // replaceChildren() can be used to clear the element
        
        ans= document.createElement('div')
        ans.style.height="75px"
        ans.style.lineHeight="7"
        ans.style.paddingLeft="143px"
        ans.style.color="white"
        ans.innerHTML= eval(string)
        // console.log(eval(string))
        ans.style.textAlign="center"
        document.querySelector('.displayarea').appendChild(ans)
        isequalpressed= true
        string =""
    }
    if(text!="AC" && text!="="){
        string+=text
    }
})

