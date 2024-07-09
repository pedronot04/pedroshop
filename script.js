// Simulated data for demonstration
const aircraftData = [
    { 
        id: 0, 
        category: 'military', 
        name: 'EXAMPLE', 
        description: 'EXAMPLE', 
        image: 'assets/', 
        price: 0
    }
];

// Function to format price with thousand separators
function formatPrice(price) {
    return price.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

// Function to create a single aircraft card
function createCard(vehicle) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.name}">
        <h3>${vehicle.name}</h3>
        <p>${vehicle.description}</p>
        <h4><strong>${formatPrice(vehicle.price)} </strong> WP</h4>
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

// Function to populate all aircraft on the main page
document.addEventListener('DOMContentLoaded', function() {
    const aircraftList = document.getElementById('aircraftList');
    if (aircraftList) {
        aircraftData.forEach(vehicle => {
            const card = createCard(vehicle);
            aircraftList.appendChild(card);
        });
    }
});
