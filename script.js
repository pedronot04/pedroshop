// Simulated data for demonstration
const aircraftData = [
    { 
        id: 1, 
        category: 'military', 
        name: 'Northrop Grumman RQ-4', 
        description: 'Long-endurance unmanned aerial vehicle used for recon.', 
        image: 'assets/RQ4.png', 
        price: 700000 
    },
    { 
        id: 2, 
        category: 'military', 
        name: 'Northrop Grumman B-2', 
        description: 'Stealth bomber aircraft.', 
        image: 'assets/B2SP.png', 
        price: 50000 
    },
    { 
        id: 3, 
        category: 'cargo', 
        name: 'Antonov AN-225', 
        description: 'Heavy cargo aircraft.', 
        image: 'assets/AN225.png', 
        price: 2000000 
    },
    { 
        id: 4, 
        category: 'military', 
        name: 'General Atomics MQ-9', 
        description: 'Unmanned combat aerial vehicle.', 
        image: 'assets/MQ9.png', 
        price: 23000 
    },
    { 
        id: 5, 
        category: 'military', 
        name: 'Lockheed U-2', 
        description: 'High-altitude reconnaissance aircraft.', 
        image: 'assets/U2.png', 
        price: 60000 
    },
    { 
        id: 6, 
        category: 'boats', 
        name: 'LK-60Ya Icebreaker', 
        description: 'Series of Russian nuclear-powered icebreakers.',
        image: 'assets/lk60a.png',
        price: 1200000 
    }
];

// Function to create a single aircraft card
function createCard(vehicle) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${vehicle.name}</h3>
        <img src="${vehicle.image}" alt="${vehicle.name}">
        <p>${vehicle.description}</p>
        <p><strong>${vehicle.price} WP</strong></p>
        <a href="https://discord.com/users/870065855134834799" class="btn send-btn">Send</a>
    `;
    return card;
}

// Function to handle search across all pages
function searchAircraft(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    const filteredAircraft = aircraftData.filter(vehicle => 
        vehicle.name.toLowerCase().includes(searchTerm) ||
        vehicle.description.toLowerCase().includes(searchTerm)
    );

    if (filteredAircraft.length > 0) {
        filteredAircraft.forEach(vehicle => {
            const card = createCard(vehicle);
            searchResults.appendChild(card);
        });
    } else {
        searchResults.innerHTML = '<p>No results found. Please try a different search term.</p>';
    }
}

// Event listener for search form submission
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', searchAircraft);
}

// Function to populate aircraft by category
function populateAircraftByCategory(category) {
    const filteredAircraft = aircraftData.filter(vehicle => vehicle.category === category);
    const listElementId = `${category}List`;
    
    const listElement = document.getElementById(listElementId);
    if (listElement) {
        filteredAircraft.forEach(vehicle => {
            const card = createCard(vehicle);
            listElement.appendChild(card);
        });
    }
}

// Event listeners for different category pages
document.addEventListener('DOMContentLoaded', function() {
    const categoryPages = ['private', 'military', 'commercial', 'cargo', 'boats'];
    categoryPages.forEach(category => {
        const listElement = document.getElementById(`${category}List`);
        if (listElement) {
            populateAircraftByCategory(category);
        }
    });
});
