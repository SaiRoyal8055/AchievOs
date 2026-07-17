const chatBody = document.getElementById("chat-body");
const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");

function botMessage(text){

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = text;

    chatBody.appendChild(div);

    scrollBottom();

}

function userMessage(text){

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = text;

    chatBody.appendChild(div);

    scrollBottom();

}

function removeButtons(){

    document.querySelectorAll(".option-btn").forEach(btn=>{

        btn.remove();

    });

}

function createButton(text){

    const btn = document.createElement("button");

    btn.className = "option-btn";

    btn.innerHTML = text;

    btn.onclick = function(){

        removeButtons();

        userMessage(text);

        setTimeout(()=>{

            if(text==="Main Menu"){

                loadChat("start");

            }else{

                loadChat(text);

            }

        },600);

    }

    chatBody.appendChild(btn);

}

function loadChat(key){

    const data = chatbotData[key];

    if(!data){

        botMessage("Answer not found.");

        return;

    }

    botMessage(data.message);

    data.options.forEach(option=>{

        createButton(option);

    });

}

function scrollBottom(){

    chatBody.scrollTop = chatBody.scrollHeight;

}
// Check Promo Code

function checkPromoCode(){

    let code = document.getElementById("promoInput").value;


    if(code.trim() === ""){

        botMessage("Please enter promo code.");

        return;

    }


    fetch("http://127.0.0.1:5000/check-promo",{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            code:code

        })

    })


    .then(response => response.json())


    .then(data => {


        botMessage(data.message);


        createButton("Main Menu");


    })


    .catch(error => {


        botMessage("Unable to connect with server.");

        console.log(error);


    });

}


// Open Chat
chatIcon.onclick = function(){

    chatBox.style.display = "flex";

    chatIcon.style.display = "none";

    if(chatBody.children.length === 0){

        loadChat("start");

    }

}

// Close Chat
closeChat.onclick = function(){

    chatBox.style.display = "none";

    chatIcon.style.display = "flex";

}