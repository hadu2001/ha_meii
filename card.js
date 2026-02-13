document.addEventListener('DOMContentLoaded', function () {
  const cardElement = document.querySelector('.card');
  const chosenQuote = localStorage.getItem("chosenQuote");
  const chosenBackgroundClass = localStorage.getItem("chosenBackgroundClass");

  if (chosenQuote) {
    document.getElementById('chosenQuote').innerText = chosenQuote;
  }

  if (chosenBackgroundClass) {
    cardElement.classList.add(chosenBackgroundClass);
  }

  // Fetch configuration and set names.
  fetch('config.json')
    .then(response => response.json())
    .then(config => {
      const spNameStored = config.spName;
      const fpNameStored = config.fpName;
      
      // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
      const spNameWritten = document.querySelector("#spName");
      const fpNameWritten = document.querySelector("#fpName");
      
      spNameWritten.innerText = spNameStored.toLowerCase();
      fpNameWritten.innerText = fpNameStored.toLowerCase();
    })
    .catch(error => console.error('Error loading config:', error));
});
