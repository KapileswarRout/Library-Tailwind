function search() {
    // Get the search box value
    const searchText = document.getElementById('search-box').value.toLowerCase();
    
    // Get all the textbook names
    const textbookNames = document.querySelectorAll('.textbook-name');
  
    // Loop through all the textbook names and hide/show them based on the search box value
    for (let i = 0; i < textbookNames.length; i++) {
      const name = textbookNames[i].textContent.toLowerCase();
      const textbook = textbookNames[i].closest('.rounded');
      if (name.includes(searchText)) {
        textbook.style.display = '';
      } else {
        textbook.style.display = 'none';
      }
    }
  }
  document.getElementById('search-box').addEventListener('input', search);
