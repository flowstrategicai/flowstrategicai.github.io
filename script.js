```javascript
// ======================================
// FLOW STRATEGIC AI - FLOW AI CHATBOT
// Make.com Webhook Integration
// ======================================


const MAKE_WEBHOOK_URL =
"https://hook.eu1.make.com/z6v4q85quj2lskggt62p44dmbnaba3rj";




// -------------------------------
// Session Tracking
// -------------------------------


function getSessionId(){

    let session = localStorage.getItem("flow_session_id");

    if(!session){

        session =
        "session_" +
        Math.random()
        .toString(36)
        .substring(2,12);

        localStorage.setItem(
            "flow_session_id",
            session
        );

    }

    return session;

}



function getVisitorId(){

    let visitor =
    localStorage.getItem("flow_visitor_id");


    if(!visitor){

        visitor =
        "visitor_" +
        Date.now();


        localStorage.setItem(
            "flow_visitor_id",
            visitor
        );

    }


    return visitor;

}





// -------------------------------
// Chat Open / Close
// -------------------------------


function openChat(){

    document
    .getElementById("chat-widget")
    .style.display="block";

}



function closeChat(){

    document
    .getElementById("chat-widget")
    .style.display="none";

}






// -------------------------------
// Send Message
// -------------------------------


async function sendMessage(){


const input =
document.getElementById(
"user-message"
);



const message =
input.value.trim();



if(!message){
    return;
}




addUserMessage(message);



input.value="";



const typing =
addAIMessage(
"⏳ Flow AI is thinking..."
);




const payload = {


channel:
"website_chat",


session_id:
getSessionId(),


visitor_id:
getVisitorId(),



name:
"",


email:
"",



message:
message,


page_url:
window.location.href,


timestamp:
new Date()
.toISOString()


};





try {


const response =
await fetch(
MAKE_WEBHOOK_URL,
{

method:"POST",


headers:{

"Content-Type":
"application/json"

},


body:
JSON.stringify(payload)


}
);




const data =
await response.json();





typing.remove();





if(data.reply){


addAIMessage(
data.reply
);


}

else{


addAIMessage(
"Sorry, I could not process that request."
);


}



}



catch(error){


typing.remove();


addAIMessage(
"Connection error. Please try again."
);


console.error(error);


}



}








// -------------------------------
// Display Messages
// -------------------------------


function addUserMessage(text){


const container =
document.getElementById(
"chat-messages"
);



const message =
document.createElement(
"div"
);



message.className =
"ai-message";


message.style.background =
"#003344";


message.style.marginBottom =
"10px";



message.innerHTML =
"You:<br>" + text;



container.appendChild(
message
);



container.scrollTop =
container.scrollHeight;



}







function addAIMessage(text){


const container =
document.getElementById(
"chat-messages"
);



const message =
document.createElement(
"div"
);



message.className =
"ai-message";



message.style.marginBottom =
"10px";



message.innerHTML =
"Flow AI:<br>" + text;



container.appendChild(
message
);



container.scrollTop =
container.scrollHeight;



return message;



}







// Allow Enter key sending

document
.addEventListener(
"keypress",
function(e){

if(
e.key === "Enter"
&&
document.activeElement.id === "user-message"
){

sendMessage();

}


});
```
