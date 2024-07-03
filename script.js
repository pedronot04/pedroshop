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
        const exampleVehicles = [
            aircraftData.find(v => v.category === 'commercial'),
            aircraftData.find(v => v.category === 'private'),
            aircraftData.find(v => v.category === 'military'),
            aircraftData.find(v => v.category === 'boats') // Include boats as an example
        ];

        exampleVehicles.forEach(vehicle => {
            if (vehicle) {
                const card = createCard(vehicle);
                searchResults.appendChild(card);
            }
        });
    }
}

// Event listener for search form submission
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', searchAircraft);
}


// Function to populate private aircraft on private.html
document.addEventListener('DOMContentLoaded', function() {
    const privateList = document.getElementById('privateList');
    if (privateList) {
        populateAircraftByCategory('private'); // Call a function to populate private aircraft cards
    }
});

// Function to populate military aircraft on military.html
document.addEventListener('DOMContentLoaded', function() {
    const militaryList = document.getElementById('militaryList');
    if (militaryList) {
        populateAircraftByCategory('military'); // Call a function to populate military aircraft cards
    }
});

// Function to populate commercial aircraft on commercial.html
document.addEventListener('DOMContentLoaded', function() {
    const commercialList = document.getElementById('commercialList');
    if (commercialList) {
        populateAircraftByCategory('commercial'); // Call a function to populate commercial aircraft cards
    }
});

// Function to populate cargo aircraft on cargo.html
document.addEventListener('DOMContentLoaded', function() {
    const cargoList = document.getElementById('cargoList');
    if (cargoList) {
        populateAircraftByCategory('cargo'); // Call a function to populate cargo aircraft cards
    }
});

// Function to populate boats on boats.html
document.addEventListener('DOMContentLoaded', function() {
    const boatsList = document.getElementById('boatsList');
    if (boatsList) {
        populateAircraftByCategory('boats'); // Call a function to populate boats cards
    }
});

// Generic function to populate aircraft by category
function populateAircraftByCategory(category) {
    const filteredAircraft = aircraftData.filter(vehicle => vehicle.category === category);

    const listElementId = `${category}List`;
    filteredAircraft.forEach(vehicle => {
        const card = createCard(vehicle);
        document.getElementById(listElementId).appendChild(card);
    });
}
