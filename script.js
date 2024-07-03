// Simulated data for demonstration
const aircraftData = [
    { id: 1, category: 'military', name: 'Northrop Grumman RQ-4', description: 'Long-endurance unmanned aerial vehicle used for recon.', image: 'assets/RQ4.png', price: 700000 },
    { id: 2, category: 'military', name: 'Northrop Grumman B-2', description: 'Stealth bomber aircraft.', image: 'assets/B2SP.png', price: 50000 },
    { id: 3, category: 'cargo', name: 'Antonov AN-225', description: 'Heavy cargo aircraft.', image: 'assets/AN225.png', price: 2000000 },
    { id: 4, category: 'military', name: 'General Atomics MQ-9', description: 'Unmanned combat aerial vehicle.', image: 'assets/MQ9.png', price: 23000 },
    { id: 5, category: 'military', name: 'Lockheed U-2', description: 'High-altitude reconnaissance aircraft.', image: 'assets/U2.png', price: 60000 },
    { id: 6, category: 'military', name: 'McDonnell Douglas F-15 ACTIVE', description: 'Advanced fighter aircraft.', image: 'assets/F15STMD.png', price: 70000 },
];

// Function to create a single aircraft card
function createCard(aircraft) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${aircraft.name}</h3>
        <img src="${aircraft.image}" alt="${aircraft.name}">
        <p>${aircraft.description}</p>
        <p><strong>${aircraft.price} WP</strong></p>
        <a href="https://discord.com/users/870065855134834799" target="_blank" class="btn">Buy it</a>
    `;
    return card;
}

// Function to handle search across all pages
function searchAircraft(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    const filteredAircraft = aircraftData.filter(aircraft => 
        aircraft.name.toLowerCase().includes(searchTerm) ||
        aircraft.description.toLowerCase().includes(searchTerm)
    );

    if (filteredAircraft.length > 0) {
        filteredAircraft.forEach(aircraft => {
            const card = createCard(aircraft);
            searchResults.appendChild(card);
        });
    } else {
        const exampleAircraft = [
            aircraftData.find(a => a.category === 'commercial'),
            aircraftData.find(a => a.category === 'private'),
            aircraftData.find(a => a.category === 'military')
        ];

        exampleAircraft.forEach(aircraft => {
            const card = createCard(aircraft);
            searchResults.appendChild(card);
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
        populatePrivateAircraft(); // Call a function to populate private aircraft cards
    }
});

function populatePrivateAircraft() {
    // Example: Filter aircraftData for private category
    const privateAircraft = aircraftData.filter(aircraft => aircraft.category === 'private');

    privateAircraft.forEach(aircraft => {
        const card = createCard(aircraft);
        document.getElementById('privateList').appendChild(card);
    });
}

// Function to populate military aircraft on military.html
document.addEventListener('DOMContentLoaded', function() {
    const militaryList = document.getElementById('militaryList');
    if (militaryList) {
        populateMilitaryAircraft(); // Call a function to populate military aircraft cards
    }
});

function populateMilitaryAircraft() {
    // Example: Filter aircraftData for military category
    const militaryAircraft = aircraftData.filter(aircraft => aircraft.category === 'military');

    militaryAircraft.forEach(aircraft => {
        const card = createCard(aircraft);
        document.getElementById('militaryList').appendChild(card);
    });
}

// Function to populate commercial aircraft on commercial.html
document.addEventListener('DOMContentLoaded', function() {
    const commercialList = document.getElementById('commercialList');
    if (commercialList) {
        populateCommercialAircraft(); // Call a function to populate commercial aircraft cards
    }
});

function populateCommercialAircraft() {
    // Example: Filter aircraftData for commercial category
    const commercialAircraft = aircraftData.filter(aircraft => aircraft.category === 'commercial');

    commercialAircraft.forEach(aircraft => {
        const card = createCard(aircraft);
        document.getElementById('commercialList').appendChild(card);
    });
}

// Function to populate cargo aircraft on cargo.html
document.addEventListener('DOMContentLoaded', function() {
    const cargoList = document.getElementById('cargoList');
    if (cargoList) {
        populateCargoAircraft(); // Call a function to populate cargo aircraft cards
    }
});

function populateCargoAircraft() {
    // Example: Filter aircraftData for cargo category
    const cargoAircraft = aircraftData.filter(aircraft => aircraft.category === 'cargo');

    cargoAircraft.forEach(aircraft => {
        const card = createCard(aircraft);
        document.getElementById('cargoList').appendChild(card);
    });
}
