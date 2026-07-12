document.addEventListener("DOMContentLoaded", () => {


const chatButton =
document.createElement("button");

chatButton.id="fsai-chat-button";

chatButton.innerHTML="💬";


document.body.appendChild(chatButton);



const chatBox =
document.createElement("div");

chatBox.id="fsai-chat-box";


chatBox.innerHTML=`

<div class="fsai-header">

${SITE_CONFIG.chatbot.botName}

<span id="fsai-close">×</span>

</div>


<div id="fsai-messages">

<p class="bot-message">

${SITE_CONFIG.chatbot.welcomeMessage}

</p>

</div>


<div class="fsai-input-area">

<input 
id="fsai-input"
placeholder="Ask your question..."
>


<button id="fsai-send">
Send
</button>

</div>

`;


document.body.appendChild(chatBox);



chatButton.onclick=()=>{

chatBox.style.display="flex";

};



document
.getElementById("fsai-close")
.onclick=()=>{

chatBox.style.display="none";

};




async function sendMessage(){


const input =
document.getElementById("fsai-input");


const message =
input.value.trim();


if(!message)return;



addMessage(
message,
"user-message"
);



input.value="";



addMessage(
"Thinking...",
"bot-message"
);



try{


const response =
await fetch(
SITE_CONFIG.chatbot.webhookURL,
{

method:"POST",

headers:
{
"Content-Type":"application/json"
},


body:
JSON.stringify({

channel:"website_chat",

session_id:
"session_"+Date.now(),

visitor_id:
"visitor_"+Date.now(),

name:"Website Visitor",

email:"",

message:message,

page_url:
window.location.href,

timestamp:
new Date().toISOString()

})


});



const data =
await response.json();



removeThinking();



addMessage(
data.reply,
"bot-message"
);



}

catch(error){


removeThinking();


addMessage(
"Sorry, I could not connect right now. Please email us at flowstrategicai@gmail.com",
"bot-message"
);


}



}




function addMessage(text,type){

const messages =
document.getElementById("fsai-messages");


const div =
document.createElement("p");


div.className=type;

div.innerText=text;


messages.appendChild(div);


messages.scrollTop =
messages.scrollHeight;


}



function removeThinking(){

const thinking =
document.querySelector(".bot-message:last-child");


if(thinking &&
thinking.innerText==="Thinking...")
{

thinking.remove();

}

}




document
.getElementById("fsai-send")
.onclick=sendMessage;



document
.getElementById("fsai-input")
.addEventListener(
"keypress",
(e)=>{

if(e.key==="Enter")
sendMessage();

});


});
