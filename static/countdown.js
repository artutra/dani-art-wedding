const weddingDate = new Date("06/01/24"); // MM/DD/YYYY
const today = new Date();
const countdown = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
document.getElementById("countdown").innerText = `(faltam ${countdown} dias)`;