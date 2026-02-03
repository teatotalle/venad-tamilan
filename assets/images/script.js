/**
 * Explore Kanyakumari - Tourism Website JavaScript
 * Data-driven architecture with dynamic rendering
 */

// ============================================
// DATA ARRAYS
// ============================================

// Tourist Places Data
const touristPlaces = [
    {
        id: 1,
        name: "Vivekananda Rock Memorial",
        description: "A magnificent memorial built on a small island commemorating Swami Vivekananda's historic speech here in 1892. Offers stunning panoramic views where three oceans meet.",
        image: "https://www.makemytrip.com/tripideas/attractions/vivekananda-rock-memorial",
        imageAlt: "Vivekananda Rock Memorial at sunset",
        tag: "Must Visit",
        location: "Vivekananda Rock",
        duration: "2-3 hours",
        mapLink: "https://www.google.com/maps/place/Vivekananda+Rock+Memorial/@8.0779072,77.5530968,17z/data=!4m6!3m5!1s0x3b04ed29495d24c1:0x7999eb8488b3a3c0!8m2!3d8.0779019!4d77.5556717!16zL20vMDdqNWdk?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 2,
        name: "Thiruvalluvar Statue",
        description: "A towering 133-foot tall statue of the renowned Tamil poet Thiruvalluvar, standing proudly on a small island near the Rock Memorial. The world's 3rd largest statue of a poet.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        imageAlt: "Thiruvalluvar Statue silhouette",
        tag: "Iconic",
        location: "Thiruvalluvar Statue",
        duration: "1-2 hours",
        mapLink: "https://www.google.com/maps/place/Thiruvalluvar+Statue/@8.0778127,77.5514608,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed29248e505b:0xa9250292482cd3a7!8m2!3d8.0778074!4d77.5540357!16s%2Fm%2F02pwcxw?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 3,
        name: "Kanyakumari Beach",
        description: "The pristine beach at India's southernmost point offers golden sands, powerful waves, and breathtaking views of sunrises and sunsets. Perfect for peaceful contemplation.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
        imageAlt: "Kanyakumari Beach golden sands",
        tag: "Beach",
        location: "Main Beach Road",
        duration: "1-2 hours",
        mapLink: "https://www.google.com/maps/place/Kanyakumari+Beach/@8.0865247,77.5529715,18z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed310b4e670d:0xa41f5be93b4cba9a!8m2!3d8.0866137!4d77.5544412!16s%2Fg%2F11btmdd9f_?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 4,
        name: "Gandhi Memorial",
        description: "A beautiful memorial honoring Mahatma Gandhi. Features unique architecture that allows sunlight to fall on the floor exactly on his birthday (October 2nd).",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop",
        imageAlt: "Gandhi Memorial sunset view",
        tag: "Historical",
        location: "Gandhi Memorial Rd",
        duration: "1 hour",
        mapLink: "https://www.google.com/maps/place/Gandhi+memorial+mandabam/@8.0891835,77.5421705,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed0077c39c59:0xc137df1ea9e2454d!8m2!3d8.0891782!4d77.5447454!16s%2Fg%2F11mm0290x3?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 5,
        name: "Sunset View Point",
        description: "The perfect spot to witness magical sunsets where the sun appears to set directly into the ocean. Offers panoramic views of the confluence of three seas.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        imageAlt: "Sunset View Point panorama",
        tag: "Best View",
        location: "Sunset Point",
        duration: "1 hour",
        mapLink: "https://www.google.com/maps/place/Sunset+View+Point/@8.0790678,77.5392376,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed8b97ca7e61:0xa0627f022c4d7fd3!8m2!3d8.0790625!4d77.5418125!16s%2Fg%2F11n014_nmg?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 6,
        name: "Kumari Amman Temple",
        description: "An ancient temple dedicated to goddess Kanyakumari (Parvati). Known for its unique architecture, religious significance, and beautiful sea-facing location.",
        image: "https://images.unsplash.com/photo-1596356455266-8566d2c5fc1c?w=600&h=400&fit=crop",
        imageAlt: "Kumari Amman Temple entrance",
        tag: "Religious",
        location: "Near Beach Road",
        duration: "1-2 hours",
        mapLink: "https://www.google.com/maps/place/Arulmigu+Devi+Kanyakumari+Bhagavati+Amman+Temple/@8.079309,77.5484025,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed2f5a7fd99b:0x8232feae39a4f448!8m2!3d8.0793037!4d77.5509774!16s%2Fg%2F1txfml1z?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    }
];

// Restaurants Data
const restaurants = [
    {
        id: 1,
        name: "Sea View Restaurant",
        cuisine: "Fresh seafood with stunning ocean views",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=350&fit=crop",
        imageAlt: "Sea View Restaurant interior",
        tags: ["Non-Veg", "Seafood"],
        distance: "0.5 km from Beach",
        specialty: "Fish Curry, Prawns Fry",
        categories: ["seafood", "non-veg"],
        mapLink: "https://goo.gl/maps/SeaViewRestaurant"
    },
    {
        id: 2,
        name: "Hotel Saravana Bhavan",
        cuisine: "Pure vegetarian South Indian cuisine",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=350&fit=crop",
        imageAlt: "Hotel Saravana Bhavan south indian thali",
        tags: ["Veg"],
        distance: "1 km from Main Bus Stand",
        specialty: "Dosai, Idli Sambar",
        categories: ["veg"],
        mapLink: "https://goo.gl/maps/SaravanaBhavan"
    },
    {
        id: 3,
        name: "The Fisherman's Wharf",
        cuisine: "Authentic coastal Kerala cuisine",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=350&fit=crop",
        imageAlt: "The Fisherman's Wharf seafood platter",
        tags: ["Non-Veg", "Seafood"],
        distance: "2 km from Vivekananda Rock",
        specialty: "Crab Masala, Fish Pollichathu",
        categories: ["seafood", "non-veg"],
        mapLink: "https://goo.gl/maps/FishermansWharf"
    },
    {
        id: 4,
        name: "Hotel Tamilnadu",
        cuisine: "Traditional Tamil & Chettinad cuisine",
        image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=600&h=350&fit=crop",
        imageAlt: "Hotel Tamilnadu traditional thali",
        tags: ["Veg"],
        distance: "1.5 km from Gandhi Memorial",
        specialty: "Chettinad Veg, Appam",
        categories: ["veg"],
        mapLink: "https://goo.gl/maps/HotelTamilnadu"
    },
    {
        id: 5,
        name: "Muttuckal Fish Restaurant",
        cuisine: "Famous for Kerala-style fish preparations",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=350&fit=crop",
        imageAlt: "Muttuckal Fish Restaurant Kerala style fish curry",
        tags: ["Non-Veg", "Seafood"],
        distance: "3 km from Kanyakumari",
        specialty: "Kerala Fish Curry, Meen Fry",
        categories: ["seafood", "non-veg"],
        mapLink: "https://goo.gl/maps/MuttuckalFish"
    },
    {
        id: 6,
        name: "Sri Murugan Biryani",
        cuisine: "South Indian & North Indian favorites",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=350&fit=crop",
        imageAlt: "Sri Murugan Biryani biryani platter",
        tags: ["Veg"],
        distance: "0.8 km from Bus Stand",
        specialty: "Veg Biryani, Parotta",
        categories: ["veg"],
        mapLink: "https://goo.gl/maps/SriMuruganBiryani"
    }
];

// Hotels Data
const hotels = {
    budget: [
        {
            id: 1,
            name: "Hotel Seashore",
            rating: "⭐⭐⭐",
            description: "Clean and comfortable rooms with partial sea views, near the beach",
            price: "₹800 - ₹1,500/night",
            location: "Beach Road, Near Main Beach",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop",
            imageAlt: "Hotel Seashore beach view room",
            phone: "+919876543210"
        },
        {
            id: 2,
            name: "Hotel Govind",
            rating: "⭐⭐⭐",
            description: "Budget-friendly accommodation with essential amenities",
            price: "₹600 - ₹1,200/night",
            location: "Main Road, Near Bus Stand",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=350&fit=crop",
            imageAlt: "Hotel Govind standard room",
            phone: "+919876543211"
        },
        {
            id: 3,
            name: "Hotel Chellam",
            rating: "⭐⭐⭐",
            description: "Great value for money with friendly staff and clean rooms",
            price: "₹700 - ₹1,300/night",
            location: "Near Bus Stand",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=350&fit=crop",
            imageAlt: "Hotel Chellam cozy room",
            phone: "+919876543212"
        }
    ],
    "mid-range": [
        {
            id: 1,
            name: "Hotel Sangam",
            rating: "⭐⭐⭐⭐",
            description: "Comfortable stay with beautiful sea view rooms",
            price: "₹2,500 - ₹4,000/night",
            location: "Beach Road",
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=350&fit=crop",
            imageAlt: "Hotel Sangam sea view room",
            phone: "+919876543213"
        },
        {
            id: 2,
            name: "Hotel Lee MDS",
            rating: "⭐⭐⭐⭐",
            description: "Modern amenities and excellent location near temples",
            price: "₹2,000 - ₹3,500/night",
            location: "Near Kumari Temple",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=350&fit=crop",
            imageAlt: "Hotel Lee MDS modern interior",
            phone: "+919876543214"
        },
        {
            id: 3,
            name: "Hotel Maadhuri",
            rating: "⭐⭐⭐⭐",
            description: "Friendly staff and clean, spacious rooms",
            price: "₹1,800 - ₹3,000/night",
            location: "Main Market Area",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=350&fit=crop",
            imageAlt: "Hotel Maadhuri family room",
            phone: "+919876543215"
        }
    ],
    premium: [
        {
            id: 1,
            name: "The Gopinivas Grand",
            rating: "⭐⭐⭐⭐⭐",
            description: "Luxury stay with ocean views, spa, and rooftop restaurant",
            price: "₹6,000 - ₹12,000/night",
            location: "Beach Road",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=350&fit=crop",
            imageAlt: "The Gopinivas Grand luxury suite",
            phone: "+919876543216"
        },
        {
            id: 2,
            name: "Hotel Sparln",
            rating: "⭐⭐⭐⭐⭐",
            description: "Premium amenities, excellent service, and sea views",
            price: "₹5,000 - ₹10,000/night",
            location: "Near Vivekananda Rock",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=350&fit=crop",
            imageAlt: "Hotel Sparln executive room",
            phone: "+919876543217"
        },
        {
            id: 3,
            name: "Sea Lagoon",
            rating: "⭐⭐⭐⭐⭐",
            description: "Beachfront luxury with swimming pool and fine dining",
            price: "₹7,000 - ₹15,000/night",
            location: "Coast Road",
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=350&fit=crop",
            imageAlt: "Sea Lagoon beachfront pool",
            phone: "+919876543218"
        }
    ]
};

// Services Data
const services = [
    {
        id: 1,
        name: "Cabs & Auto Services",
        icon: "🚕",
        items: [
            { name: "Prakash Cabs", action: "call", value: "+919876543220" },
            { name: "Kanyakumari Tours", action: "call", value: "+919876543221" },
            { name: "Auto Rickshaw Union", action: "call", value: "+919876543222" },
            { name: "Ola/Uber Available", action: "note", value: "App-based" }
        ]
    },
    {
        id: 2,
        name: "Boat Services",
        icon: "🛥️",
        items: [
            { name: "Rock Memorial Ferry", action: "note", value: "₹50-100/person" },
            { name: "Sunset Boat Ride", action: "note", value: "₹200-500/person" },
            { name: "Private Boat Charter", action: "note", value: "₹2000-5000/hour" },
            { name: "Boat Booking Office", action: "call", value: "+919876543223" }
        ]
    },
    {
        id: 3,
        name: "Tour Guides",
        icon: "🎓",
        items: [
            { name: "Official Tourism Guides", action: "note", value: "Certified" },
            { name: "Local Guide Association", action: "call", value: "+919876543224" },
            { name: "Private Tour Operators", action: "note", value: "Full day packages" }
        ]
    },
    {
        id: 4,
        name: "Emergency Services",
        icon: "🚑",
        items: [
            { name: "Police Station", action: "call", value: "+919876543225" },
            { name: "Government Hospital", action: "call", value: "+919876543226" },
            { name: "Fire Station", action: "call", value: "+919876543227" },
            { name: "Women Helpline", action: "call", value: "1091" }
        ]
    },
    {
        id: 5,
        name: "ATMs & Banks",
        icon: "🏧",
        items: [
            { name: "State Bank of India", action: "note", value: "Main Road" },
            { name: "Indian Bank ATM", action: "note", value: "Beach Road" },
            { name: "Canara Bank ATM", action: "note", value: "Bus Stand" },
            { name: "HDFC Bank ATM", action: "note", value: "Market Area" }
        ]
    },
    {
        id: 6,
        name: "Medical & Pharmacy",
        icon: "💊",
        items: [
            { name: "Government Hospital", action: "call", value: "+919876543228" },
            { name: "Kumari Medicals", action: "call", value: "+919876543229" },
            { name: "Apollo Pharmacy", action: "call", value: "+919876543230" },
            { name: "24/7 Medical Store", action: "note", value: "Near Bus Stand" }
        ]
    }
];

// Travel Tips Data
const travelTips = [
    {
        id: 1,
        title: "Best Time to Visit",
        icon: "🌡️",
        items: [
            "<strong>Oct-Mar:</strong> Ideal weather (20-30°C), peak tourist season",
            "<strong>Dec-Jan:</strong> Book accommodations early, pleasant weather",
            "<strong>Apr-Jun:</strong> Hot and humid, avoid if heat-sensitive",
            "<strong>Jul-Sep:</strong> Monsoon season, heavy rainfall possible"
        ]
    },
    {
        id: 2,
        title: "Ideal Duration",
        icon: "⏰",
        items: [
            "<strong>Minimum:</strong> 1 day to see main attractions",
            "<strong>Recommended:</strong> 2-3 days for a relaxed experience",
            "<strong>Extended:</strong> 4-5 days to explore nearby areas"
        ],
        note: "🌅 Sunrise: 5:30-6:00 AM | Sunset: 6:00-6:30 PM"
    },
    {
        id: 3,
        title: "Safety Tips",
        icon: "💡",
        items: [
            "Stay hydrated and carry sunscreen (SPF 50+)",
            "Be cautious near cliffs and rocky areas",
            "Keep belongings secure in crowded areas",
            "Use official taxis, avoid unmarked vehicles",
            "Carry ID proof (Aadhar/PAN) at all times"
        ]
    },
    {
        id: 4,
        title: "Local Customs",
        icon: "🙏",
        items: [
            "Dress modestly when visiting temples",
            "Remove footwear before entering temples",
            "Respect local traditions and customs",
            "Learn basic Tamil greetings - locals appreciate it!",
            "Bargain at local markets for souvenirs"
        ]
    },
    {
        id: 5,
        title: "Do's",
        icon: "✅",
        items: [
            "✅ Visit during sunrise and sunset for best views",
            "✅ Carry cash - some places don't accept cards",
            "✅ Book ferry tickets in advance (peak season)",
            "✅ Try local seafood and authentic Tamil cuisine",
            "✅ Hire certified guides for historical sites"
        ]
    },
    {
        id: 6,
        title: "Don'ts",
        icon: "❌",
        items: [
            "❌ Swim in restricted areas near rocks",
            "❌ Litter - keep beaches and surroundings clean",
            "❌ Photograph inside temples without permission",
            "❌ Venture into the sea during rough weather",
            "❌ Rely solely on mobile data - download offline maps"
        ]
    }
];

// Packing List Data
const packingList = {
    clothing: {
        title: "👕 Clothing",
        items: [
            "Light cotton clothes",
            "Modest attire for temples",
            "Comfortable walking shoes",
            "Swimsuit (if beach activities)",
            "Hat/cap for sun protection",
            "Light jacket for evenings"
        ]
    },
    essentials: {
        title: "🧴 Essentials",
        items: [
            "Sunscreen (SPF 50+)",
            "Sunglasses (UV protected)",
            "Umbrella/raincoat",
            "Power bank",
            "First aid kit",
            "Insect repellent"
        ]
    },
    documents: {
        title: "📄 Documents",
        items: [
            "ID proof (Aadhar/PAN)",
            "Hotel bookings copy",
            "Travel insurance",
            "Credit/Debit cards",
            "Cash (small denominations)",
            "Passport photos (if needed)"
        ]
    }
};

// Contact Info Data
const contactInfo = [
    {
        id: 1,
        title: "📍 Tourism Office",
        items: [
            "Kanyakumari Tourist Centre",
            "+91 4652 246076",
            "tourism@kanyakumari.tn.gov.in"
        ]
    },
    {
        id: 2,
        title: "🚨 Emergency Helplines",
        items: [
            "Police: 100",
            "Ambulance: 102 / 108",
            "Fire: 101",
            "Women Helpline: 1091"
        ]
    },
    {
        id: 3,
        title: "🚌 Transport Contacts",
        items: [
            "Kanyakumari Bus Stand: +91 4652 246232",
            "Nagercoil Railway: +91 4652 226565"
        ]
    },
    {
        id: 4,
        title: "🕐 Office Hours",
        items: [
            "Mon - Sat: 9:00 AM - 6:00 PM",
            "Sun: 10:00 AM - 5:00 PM",
            "Open on all public holidays"
        ]
    }
];

// FAQ Data
const faqData = [
    {
        id: 1,
        question: "What is the best time to see sunrise? 🌅",
        answer: "Arrive at the viewpoint by 5:30 AM. Sunrise is visible from 6:00 AM to 6:30 AM depending on the season. During full moon days, you can also witness the beautiful \"Moonrise\" from the same point. The view is absolutely spectacular!"
    },
    {
        id: 2,
        question: "How to reach Vivekananda Rock? 🛥️",
        answer: "Ferries operate from Kanyakumari Jetty (8:00 AM to 4:00 PM). Ticket costs ₹50-100 per person for the round trip. Private boats are also available for ₹1500-2000 for groups. It's a 10-minute boat ride to the island."
    },
    {
        id: 3,
        question: "Are there ATMs available? 🏧",
        answer: "Yes! There are ATMs from SBI, Indian Bank, Canara Bank, HDFC, and more located near the bus stand, main road, and beach road. Most accept international cards. It's recommended to carry some cash for small vendors."
    },
    {
        id: 4,
        question: "Is it safe to swim at the beach? 🏊",
        answer: "Swimming is allowed only in designated safe areas. The waves can be strong, especially during monsoon season (June-September). Always follow warning signs and lifeguard instructions. Avoid swimming near rocks or during rough weather."
    }
];

// Nearby Places Data
const nearbyPlaces = [
    { name: "Vivekananda Rock", distance: "2 km", lat: 8.0783, lng: 77.5494 },
    { name: "Kanyakumari Beach", distance: "0.5 km", lat: 8.0794, lng: 77.5500 },
    { name: "Gandhi Memorial", distance: "1 km", lat: 8.0815, lng: 77.5482 },
    { name: "Thiruvalluvar Statue", distance: "2.5 km", lat: 8.0778, lng: 77.5510 },
    { name: "Sunset View Point", distance: "1.5 km", lat: 8.0820, lng: 77.5475 }
];

// ============================================
// DOM Elements Selection
// ============================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');

// ============================================
// RENDERING FUNCTIONS
// ============================================

// Render Tourist Places
function renderTouristPlaces() {
    const container = document.getElementById('places-container');
    if (!container) return;
    
    container.innerHTML = touristPlaces.map(place => `
        <article class="place-card" data-id="${place.id}" role="listitem">
            <div class="place-image">
                <img src="${place.image}" alt="${place.imageAlt}" loading="lazy">
                <span class="place-tag">${place.tag}</span>
            </div>
            <div class="place-content">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <div class="place-meta">
                    <span class="location">📍 ${place.location}</span>
                    <span class="duration">⏱️ ${place.duration}</span>
                </div>
                <a href="${place.mapLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">View on Map</a>
            </div>
        </article>
    `).join('');
}

// Render Restaurants
function renderRestaurants(filter = 'all') {
    const container = document.getElementById('restaurants-container');
    if (!container) return;
    
    const filteredRestaurants = filter === 'all' 
        ? restaurants 
        : restaurants.filter(r => r.categories.includes(filter));
    
    container.innerHTML = filteredRestaurants.map((restaurant, index) => `
        <article class="restaurant-card" data-category="${restaurant.categories.join(' ')}" role="listitem" style="animation-delay: ${index * 0.1}s">
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.imageAlt}" loading="lazy">
            </div>
            <div class="restaurant-content">
                <div class="restaurant-header">
                    <h3>${restaurant.name}</h3>
                </div>
                <p class="cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-tags">
                    ${restaurant.tags.map(tag => `<span class="tag tag-${tag.toLowerCase().replace(' ', '-')}">${tag}</span>`).join('')}
                </div>
                <p class="distance">📍 ${restaurant.distance}</p>
                <p class="specialty">⭐ Special: ${restaurant.specialty}</p>
                <a href="${restaurant.mapLink}" target="_blank" rel="noopener noreferrer" class="btn btn-small">View on Map</a>
            </div>
        </article>
    `).join('');
}

// Render Hotels by Category
function renderHotels() {
    // Budget hotels
    const budgetContainer = document.getElementById('budget-hotels-container');
    if (budgetContainer) {
        budgetContainer.innerHTML = hotels.budget.map(hotel => createHotelCard(hotel)).join('');
    }
    
    // Mid-range hotels
    const midrangeContainer = document.getElementById('midrange-hotels-container');
    if (midrangeContainer) {
        midrangeContainer.innerHTML = hotels["mid-range"].map(hotel => createHotelCard(hotel)).join('');
    }
    
    // Premium hotels
    const premiumContainer = document.getElementById('premium-hotels-container');
    if (premiumContainer) {
        premiumContainer.innerHTML = hotels.premium.map(hotel => createHotelCard(hotel, true)).join('');
    }
}

function createHotelCard(hotel, isPremium = false) {
    return `
        <article class="hotel-card ${isPremium ? 'premium' : ''}">
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.imageAlt}" loading="lazy">
            </div>
            <div class="hotel-content">
                <h3>${hotel.name}</h3>
                <p class="rating">${hotel.rating}</p>
                <p class="description">${hotel.description}</p>
                <p class="price">💰 ${hotel.price}</p>
                <p class="location">📍 ${hotel.location}</p>
                <a href="tel:${hotel.phone}" class="btn btn-small">📞 Book Now</a>
            </div>
        </article>
    `;
}

// Render Services
function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    container.innerHTML = services.map(service => `
        <article class="service-card">
            <span class="service-icon" aria-hidden="true">${service.icon}</span>
            <h3>${service.name}</h3>
            <div class="service-list">
                ${service.items.map(item => `
                    <div class="service-item">
                        <span class="service-name">${item.name}</span>
                        ${item.action === 'call' 
                            ? `<a href="tel:${item.value}" class="btn btn-small">📞 Call</a>`
                            : `<span class="service-note">${item.value}</span>`
                        }
                    </div>
                `).join('')}
            </div>
        </article>
    `).join('');
}

// Render Travel Tips
function renderTravelTips() {
    const container = document.getElementById('tips-container');
    if (!container) return;
    
    container.innerHTML = travelTips.map(tip => `
        <article class="tip-card">
            <span class="tip-icon" aria-hidden="true">${tip.icon}</span>
            <h3>${tip.title}</h3>
            <ul>
                ${tip.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
            ${tip.note ? `<p class="tip-note">${tip.note}</p>` : ''}
        </article>
    `).join('');
}

// Render Packing List
function renderPackingList() {
    const container = document.getElementById('packing-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="packing-category">
            <h4>${packingList.clothing.title}</h4>
            <ul>${packingList.clothing.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="packing-category">
            <h4>${packingList.essentials.title}</h4>
            <ul>${packingList.essentials.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="packing-category">
            <h4>${packingList.documents.title}</h4>
            <ul>${packingList.documents.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
    `;
}

// Render Contact Info
function renderContactInfo() {
    const container = document.getElementById('contact-info-container');
    if (!container) return;
    
    container.innerHTML = `
        <h3>🏛️ Tourist Help Information</h3>
        ${contactInfo.map(info => `
            <div class="info-card">
                <h4>${info.title}</h4>
                ${info.items.map(item => `<p>${item}</p>`).join('')}
            </div>
        `).join('')}
    `;
}

// Render FAQ
function renderFAQ() {
    const container = document.getElementById('faq-list');
    if (!container) return;
    
    container.innerHTML = faqData.map(faq => `
        <div class="faq-item">
            <button class="faq-question" aria-expanded="false">${faq.question}</button>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// Render Nearby Places
function renderNearbyPlaces() {
    const container = document.getElementById('nearby-places-list');
    if (!container) return;
    
    container.innerHTML = nearbyPlaces.map(place => `
        <li>
            <a href="#" class="place-link" data-lat="${place.lat}" data-lng="${place.lng}" data-name="${place.name}">
                📍 ${place.name} (${place.distance})
            </a>
        </li>
    `).join('');
    
    // Re-initialize click handlers
    initNearbyLinks();
}

// ============================================
// Mobile Navigation Toggle
// ============================================
function initMobileNav() {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
        navMenu.classList.toggle('active');
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Navbar Scroll Effect
// ============================================
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// Smooth Scrolling
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ============================================
// Restaurant Filter Functionality
// ============================================
function initRestaurantFilter() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            renderRestaurants(button.getAttribute('data-filter'));
        });
    });
}

// ============================================
// Hotel Tabs Functionality
// ============================================
function initHotelTabs() {
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            
            const tabId = button.getAttribute('data-tab');
            document.querySelectorAll('.hotel-content').forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', item.classList.contains('active'));
        });
    });
}

// ============================================
// Contact Form Validation
// ============================================
function initContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        const errors = [];
        
        if (name.length < 2) {
            errors.push('Please enter a valid name (at least 2 characters)');
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!subject) {
            errors.push('Please select a subject');
        }
        
        if (message.length < 20) {
            errors.push('Message must be at least 20 characters long');
        }
        
        if (errors.length > 0) {
            showNotification(errors[0], 'error');
        } else {
            showNotification('Thank you for your message! We will get back to you within 24 hours.', 'success');
            contactForm.reset();
        }
    });
}

// ============================================
// Nearby Places Links
// ============================================
function initNearbyLinks() {
    document.querySelectorAll('.place-link[data-lat]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lat = link.getAttribute('data-lat');
            const lng = link.getAttribute('data-lng');
            const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
            window.open(url, '_blank', 'noopener,noreferrer');
        });
    });
}

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Close notification">&times;</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        padding: 16px 20px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10000;
        animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        font-family: 'Segoe UI', sans-serif;
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            @keyframes slideOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(120%); opacity: 0; } }
            .notification-close { background: rgba(255, 255, 255, 0.2); border: none; color: white; font-size: 1.25rem; cursor: pointer; padding: 4px 8px; border-radius: 4px; }
            .notification-close:hover { background: rgba(255, 255, 255, 0.3); }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 6000);
}

// ============================================
// Get Directions Function
// ============================================
function getDirections() {
    const fromLocation = document.getElementById('fromLocation').value.trim();
    if (!fromLocation) {
        showNotification('Please enter your starting point', 'error');
        return;
    }
    const toLocation = document.getElementById('toLocation').value;
    const url = `https://www.google.com/maps/dir/${encodeURIComponent(fromLocation)}/${encodeURIComponent(toLocation)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

// ============================================
// Scroll Reveal Animation
// ============================================
function initScrollReveal() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.place-card, .restaurant-card, .hotel-card, .service-card, .tip-card, .stat-card, .info-card').forEach((el, index) => {
        el.classList.add('reveal');
        el.style.setProperty('--delay', index % 5 * 0.1);
        observer.observe(el);
    });

    if (!document.querySelector('#reveal-styles')) {
        const style = document.createElement('style');
        style.id = 'reveal-styles';
        style.textContent = `
            .reveal { opacity: 0; transform: translateY(40px); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); transition-delay: var(--delay, 0s); }
            .reveal.revealed { opacity: 1; transform: translateY(0); }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// Console Welcome Message
// ============================================
function initConsoleMessage() {
    console.log('%c🌊 Welcome to Explore Kanyakumari! 🌊', 'color: #0077b6; font-size: 28px; font-weight: bold;');
    console.log('%cYour complete travel guide to India\'s southernmost point', 'color: #48cae4; font-size: 14px;');
    console.log('%c🗺️ Data-driven architecture with dynamic rendering', 'color: #f77f00; font-size: 12px;');
}

// ============================================
// Initialize All Functions
// ============================================
function init() {
    // Render all data
    renderTouristPlaces();
    renderRestaurants();
    renderHotels();
    renderServices();
    renderTravelTips();
    renderPackingList();
    renderContactInfo();
    renderFAQ();
    renderNearbyPlaces();
    
    // Initialize interactions
    initMobileNav();
    initNavbarScroll();
    initBackToTop();
    initSmoothScroll();
    initRestaurantFilter();
    initHotelTabs();
    initFAQ();
    initContactForm();
    initScrollReveal();
    initConsoleMessage();
}

// Run on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
