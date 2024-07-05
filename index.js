// sets up a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    
    const paragraph = document.getElementById('text');// Selects the paragraph with '#text'
    
    paragraph.textContent = 'This is really cool!'; // Change the text content of the paragraph
});