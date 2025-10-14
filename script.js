// Counter functionality
let counter = 0;

function incrementCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
    
    // Add animation effect
    const counterElement = document.getElementById('counter');
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 200);
}

function resetCounter() {
    counter = 0;
    document.getElementById('counter').textContent = counter;
}

// Alert function
function showAlert() {
    alert('Welcome! This is a demo page built with Bootstrap, CSS, and JavaScript.');
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Table row click effect
    const tableRows = document.querySelectorAll('.table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            const product = this.cells[1].textContent;
            console.log('Selected product:', product);
        });
    });
    
    // Add transition to counter
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.style.transition = 'transform 0.2s ease';
    }
});

// Console message
console.log('Demo page loaded successfully!');
