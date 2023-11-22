// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
const channelElement = document.getElementById("channels");

async function getChannels() {
  const response = await fetch("https://api.sr.se/api/v2/channels/?format=json");
  const data = await response.json();


data.channels.forEach((channel) => {
const channelEl = document.createElement("div");
channelEl.className = "channel";
channelEl.style.backgroundColor = `#${channel.color}`
channelEl.innerHTML = `<img src="${channel.image}"><div class="content"><div class="name">${channel.name}<div class="audio"><audio controls><source src="${channel.liveaudio.url}" type="audio/mpeg" /></audio></div></div></div>`;
channelElement.appendChild(channelEl); 
});
console.log(data);
}

getChannels();

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
