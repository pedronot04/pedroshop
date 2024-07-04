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
        price: 1300000 
    },
    { 
        id: 7, 
        category: 'military', 
        name: 'Lockheed F-117', 
        description: 'Stealth attack aircraft.',
        image: 'assets/F117.png',
        price: 31000
    },
    { 
        id: 8, 
        category: 'military', 
        name: 'Lun-Class Ekranoplan', 
        description: 'Series of Soviet Ekranoplanes.',
        image: 'assets/LEKRA.png',
        price: 160000
    },
    { 
        id: 9, 
        category: 'commercial', 
        name: 'Mil Mi-26', 
        description: 'Its an Soviet Heavy Helicopter and is the Biggest Helicopter in the World.',
        image: 'assets/MI26.png',
        price: 27500
    },
    { 
        id: 10, 
        category: 'military', 
        name: 'Northrop Tacit Blue', 
        description: 'Prototype of an Stealth Aircraft.',
        image: 'assets/TACIT.png',
        price: 40000
    },
    { 
        id: 11, 
        category: 'military', 
        name: 'North American X-15', 
        description: 'World Fastest Aircraft with an speed of 3000+ MPH.',
        image: 'assets/X15.png',
        price: 600000
    },
    { 
        id: 12, 
        category: 'military', 
        name: 'North American XB-45', 
        description: 'Early Bomber-Jet prototype for the USAF.',
        image: 'assets/XB-45.png',
        price: 30000
    },
    { 
        id: 13, 
        category: 'military', 
        name: 'Republic XF-12', 
        description: 'Cancelled 4 engines bomber for USAF in the middle of WW2.',
        image: 'assets/XB-12.png',
        price: 50000
    },
    { 
        id: 14, 
        category: 'commercial', 
        name: 'Boeing 787-9', 
        description: 'Wide-Body Airliner with 2 Powerful Jet-Engines',
        image: 'assets/7879.png',
        price: 55000
    },
    { 
        id: 14, 
        category: 'commercial', 
        name: 'Airbus A321neo', 
        description: 'Single-Aisle Airliner created by Airbus',
        image: 'assets/A321.png',
        price: 26500
    },

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

// Event listener for DOMContentLoaded to initialize the entire script
document.addEventListener('DOMContentLoaded', function() {
    // Other initialization code here

    // Initialize the hero carousel
    initializeHeroCarousel();
});
// Event listener for DOMContentLoaded to initialize the entire script
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for search form submission
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', searchAircraft);
    }

    // Populate all aircraft on the main page
    populateAllAircraft();

    // Populate specific categories on their respective pages
    populateAircraftByCategory('private');
    populateAircraftByCategory('military');
    populateAircraftByCategory('commercial');
    populateAircraftByCategory('cargo');
    populateAircraftByCategory('boats');

    // Initialize the hero carousel
    initializeHeroCarousel();
});