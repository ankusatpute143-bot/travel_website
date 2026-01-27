const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

const responses = {
    "hello": "Hello! How can I help you plan your trip today?",
    "hi": "Hi there! Which place are you interested in?",
    "goa": "Goa is famous for beaches and nightlife. Best time to visit: November to February.",
    "jaipur": "Jaipur is known as the Pink City. Don't miss Amber Fort and City Palace.",
    "mumbai": "Mumbai is the financial capital of India. Visit Gateway of India, Marine Drive.",
    "delhi": "Delhi has Red Fort, India Gate and lots of historical places.",
    "budget": "You can plan a trip anywhere in India for ₹10,000-₹20,000 depending on your preferences.",
    "default": "I am here to help you with travel info. Try asking about a city or travel tips!"
};

function sendMessage() {
    const userText = userInput.value.trim().toLowerCase();
    if(userText === "") return;

    const userDiv = document.createElement("div");
    userDiv.className = "userMsg";
    userDiv.innerText = userInput.value;
    chatbox.appendChild(userDiv);

    userInput.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;

    let aiResponse = responses["default"];
    for (let key in responses) {
        if(userText.includes(key)) {
            aiResponse = responses[key];
        }
    }

    setTimeout(() => {
        const aiDiv = document.createElement("div");
        aiDiv.className = "aiMsg";
        aiDiv.innerText = aiResponse;
        chatbox.appendChild(aiDiv);
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
}
