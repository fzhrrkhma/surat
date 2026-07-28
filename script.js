const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
});

// Hati berjatuhan
const hearts = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");

    heart.innerHTML = "💙";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.position = "absolute";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animation = `fall ${3 + Math.random() * 3}s linear`;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 300);
const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
});

const hearts = document.querySelector(".hearts");

function createHeart(){
    const heart = document.createElement("span");

    heart.innerHTML = "💙";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random()*20) + "px";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,300);
