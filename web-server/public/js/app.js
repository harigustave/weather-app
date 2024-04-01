console.log("Client Side Javascript is loaded")


const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
const messageThree=document.querySelector('#message-3')
const header=document.querySelector('header')
const hyperlinks=header.getElementsByTagName('a')
for(let i=0;i<hyperlinks.length;i++){
    let hyperlink=hyperlinks[i];
    hyperlink.addEventListener('mouseover',()=>{
        hyperlink.style.color="red"
    });
    hyperlink.addEventListener('mouseout',()=>{
        hyperlink.style.color="#888888"
    });
}

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const city=search.value
    fetch('/weather?address='+city).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent=data.error
            }else{
                messageOne.textContent='Date/Time:'+data.Date
                messageTwo.textContent='Location:'+data.Address
                messageThree.textContent='Forecast:'+data.WeatherDetails
            }
        })
    })
})