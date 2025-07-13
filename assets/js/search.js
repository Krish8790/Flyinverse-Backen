const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');

// Sample data – replace or load from /data.json in production
const data = [
{ name: "Tourism Packages", tags: ["tourism", "vacation"], url: "C:\Users\pc\OneDrive\Desktop\Travel and tours website\FlyinVerse\Packages.html" },
{ name: "Tourism Flights", tags: ["flights", "cheap", "tour"], url: "C:\Users\pc\OneDrive\Desktop\Travel and tours website\FlyinVerse\Flights.html" },
{ name: "Saudi Arabia", tags: ["saudi", "riyadh", "mecca"], url: "C:\Users\pc\OneDrive\Desktop\Travel and tours website\FlyinVerse\Packages.html" }
];

// Called when the user types
function handleInput(event) {
const query = event.target.value.toLowerCase();
suggestionsBox.innerHTML = "";

if (query.length === 0) return;

const matches = data.filter(item =>
item.name.toLowerCase().includes(query) ||
item.tags.some(tag => tag.includes(query))
);

matches.forEach(match => {
const li = document.createElement('li');
li.textContent = match.name;
li.onclick = () => window.location.href = match.url;
suggestionsBox.appendChild(li);
});
}

// Called when the form is submitted (user presses Enter or clicks button)
function handleSubmit(event) {
event.preventDefault();
const query = searchInput.value.toLowerCase();

const match = data.find(function (item) {
return (
item.name.toLowerCase().includes(query) ||
item.tags.some(function (tag) {
return tag.includes(query);
})
);
});

if (match) {
window.location.href = match.url;
} else {
window.location.href = "/search?q=" + encodeURIComponent(query);
}

return false;
}