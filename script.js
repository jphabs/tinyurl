// API Key
const API_KEY = "6ZwPtLozMRMWXSdwuduAUvaj5pyVg3bTURl3EtiC94DC6lKCuJ9478LUZ1RF";

// DOM Elements
const shortenBtn = document.getElementById("shortenBtn");
const longUrlInput = document.getElementById("longUrl");
const shortUrlResult = document.getElementById("shortUrl");
const yearSpan = document.getElementById("year");

// Auto Set Year
yearSpan.textContent = new Date().getFullYear();

// Shorten URL Functionality
shortenBtn.addEventListener("click", async () => {
  const longUrl = longUrlInput.value.trim();

  if (!longUrl) {
    shortUrlResult.textContent = "Please enter a valid URL.";
    return;
  }

  try {
    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: longUrl }),
    });

    if (!response.ok) {
      throw new Error("Failed to shorten URL.");
    }

    const data = await response.json();
    shortUrlResult.innerHTML = `Shortened URL: <a href="${data.data.tiny_url}" target="_blank">${data.data.tiny_url}</a>`;
  } catch (error) {
    shortUrlResult.textContent = `Error: ${error.message}`;
  }
});

// Show/Hide Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Scroll to Top on Click
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});