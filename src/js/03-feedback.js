import throttle from 'lodash.throttle';
const form=document.querySelector('.feedback-form');
const input=document.querySelector('input')
const textarea=document.querySelector('textarea')

form.addEventListener('input',throttle(onFormInput,500) )
form.addEventListener('submit',onFormSubmit)
const STATE="feedback-form-state";
let data= {};

if(localStorage.getItem(STATE))
{
    data=JSON.parse(localStorage.getItem(STATE)) 
}

reNew();

function onFormSubmit(evt)
{
evt.preventDefault();
evt.target.reset();
localStorage.removeItem(STATE);
}

function onFormInput(evt)
{
data[evt.target.name]=evt.target.value
const newData=JSON.stringify(data);
localStorage.setItem(STATE,newData)
console.log(data)

}

function reNew()
{
 const elements=JSON.parse(localStorage.getItem(STATE))
 if(!elements)
 {
    return
 }
 if(elements.email)
 {
 input.value=elements.email
 }
 if(elements.message)
 {
    textarea.value=elements.message
 }
 
}