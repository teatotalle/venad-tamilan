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
        image: "assets/images/viv2.jpg",
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
        image: "assets/images/thiru1.jpg",
        imageAlt: "Thiruvalluvar Statue silhouette",
        tag: "Iconic",
        location: "Thiruvalluvar Statue",
        duration: "1-2 hours",
        mapLink: "https://www.google.com/maps/place/Thiruvalluvar+Statue/@8.0778127,77.5514608,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed29248e505b:0xa9250292482cd3a7!8m2!3d8.0778074!4d77.5540357!16s%2Fm%2F02pwcxw?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 3,
        name: "Sunset View Point",
        description: "A breathtaking spot to watch the sun dip into the ocean, offering panoramic views where the sky and sea meet in brilliant shades of gold and orange.",
        image: "assets/images/sun1.jpeg",
        imageAlt: "Sunset View Point panorama",
        tag: "Best View",
        location: "Sunset Point",
        duration: "1 hour",
        mapLink: "https://www.google.com/maps/place/Sunset+View+Point/@8.0790678,77.5392376,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed8b97ca7e61:0xa0627f022c4d7fd3!8m2!3d8.0790625!4d77.5418125!16s%2Fg%2F11n014_nmg?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 4,
        name: "Gandhi Memorial",
        description: "A beautiful memorial honoring Mahatma Gandhi. Features unique architecture that allows sunlight to fall on the floor exactly on his birthday (October 2nd).",
        image: "assets/images/gan.jpg",
        imageAlt: "Gandhi Memorial sunset view",
        tag: "Historical",
        location: "Gandhi Memorial Rd",
        duration: "1 hour",
        mapLink: "https://www.google.com/maps/place/Gandhi+memorial+mandabam/@8.0891835,77.5421705,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed0077c39c59:0xc137df1ea9e2454d!8m2!3d8.0891782!4d77.5447454!16s%2Fg%2F11mm0290x3?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 5,
        name: "Thirparappu Waterfalls",
        description: "A scenic waterfall surrounded by lush greenery, perfect for relaxing, photography, and enjoying the soothing sound of flowing water.",
        image: "assets/images/tiru.jpeg",
        imageAlt: "Thirparappu Waterfalls",
        tag: "Best Waterfalls",
        location: "Thirparappu",
        duration: "1 hour",
        mapLink: "https://www.google.com/maps/place/Thirparappu+Waterfalls/@8.391347,77.2545582,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04532184a9be51:0x5a2e420cc55ecbf!8m2!3d8.3913417!4d77.2594291!16s%2Fg%2F11lkhn9f88?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 6,
        name: "Mathoor Thottipalam",
        description: "A peaceful hanging bridge over the Kodayar River, offering scenic views, cool breezes, and a calm atmosphere surrounded by lush greenery.",
        image: "assets/images/tp.jpeg",
        imageAlt: "Thottipalam",
        tag: "View",
        location: "Manalikarai",
        duration: "1-2 hours",
        mapLink: "https://www.google.com/maps/place/Mathoor+Aqueduct/@8.3361255,77.2921453,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04569ba95b6b03:0x13b1fe7b264eee95!8m2!3d8.3361202!4d77.2947202!16s%2Fm%2F03whzv1?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
    id: 7,
    name: "Netta",
    description: "A peaceful village near Kanyakumari known for its greenery, calm atmosphere, and authentic local life, ideal for travelers seeking a quiet escape.",
    image: "assets/images/netta.jpeg",
    imageAlt: "Netta village Kanyakumari",
    tag: "Village",
    location: "Near Kanyakumari",
    duration: "30–60 mins",
    mapLink: "https://www.google.com/maps?q=Netta,+Kanyakumari,+Tamil+Nadu"
    },
    {
    id: 8,
    name: "Koodal River",
    description: "A peaceful and scenic river spot near Eden Water Falls Resort, surrounded by greenery and natural beauty, perfect for relaxing and enjoying a quiet offbeat experience.",
    image: "assets/images/koodal.jpeg",
    imageAlt: "Koodal River near Eden Water Falls Resort",
    tag: "Nature",
    location: "Near Eden Water Falls Resort, Kanyakumari",
    duration: "30–60 mins",
    mapLink: "https://www.google.com/maps?q=Koodal+River+near+Eden+Water+Falls+Resort+Kanyakumari"
},
{
    id: 9,
    name: "Chothavilai Beach",
    description: "One of the longest beaches in Tamil Nadu, known for its calm waves and open shoreline.",
    image: "images/chot.jpg",
    imageAlt: "Chothavilai Beach",
    tag: "Beach",
    location: "Near Nagercoil",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Chothavilai+Beach"
},
{
    id: 10,
    name: "Colachel",
    description: "A historic coastal town known for its harbor, beaches, and colonial-era history.",
    image: "assets/images/col.jpg",
    imageAlt: "Colachel town",
    tag: "Town",
    location: "Colachel",
    duration: "1–2 hours",
    mapLink: "https://www.google.com/maps?q=Colachel"
},
{
    id: 11,
    name: "Perunchilampu Waterfalls",
    description: "A lesser-known waterfall surrounded by greenery, ideal for nature lovers.",
    image: "assets/images/per.jpg",
    imageAlt: "Perunchilampu Waterfalls",
    tag: "Waterfall",
    location: "Near Kodayar",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Perunchilampu+Waterfalls"
},
{
    id: 12,
    name: "Kalikesam",
    description: "A forested eco-tourism spot surrounded by hills, streams, and wildlife.",
    image: "assets/images/kal.jpg",
    imageAlt: "Kalikesam forest",
    tag: "Nature",
    location: "Western Ghats (Kanyakumari)",
    duration: "2–3 hours",
    mapLink: "https://www.google.com/maps?q=Kalikesam"
},
{
    id: 13,
    name: "Keeriparai Reserve Forest",
    description: "A lush green forest area with waterfalls, wildlife, and scenic hill views.",
    image: "assets/images/keer.jpg",
    imageAlt: "Keeriparai forest",
    tag: "Nature",
    location: "Near Nagercoil",
    duration: "2–3 hours",
    mapLink: "https://www.google.com/maps?q=Keeriparai+Reserve+Forest"
},
{
    id: 14,
    name: "Palliyadi Appa Thiruthalam",
    description: "A sacred Christian pilgrimage site with historical and spiritual importance.",
    image: "assets/images/pal.jpg",
    imageAlt: "Palliyadi Appa Thiruthalam",
    tag: "Religious",
    location: "Palliyadi",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=Palliyadi+Appa+Thiruthalam"
},
{
    id: 15,
    name: "Kumari Amman Temple",
    description: "An ancient temple dedicated to Goddess Kanyakumari, located at India’s southernmost tip.",
    image: "assets/images/kum.jpg",
    imageAlt: "Kumari Amman Temple",
    tag: "Temple",
    location: "Kanyakumari",
    duration: "30–45 mins",
    mapLink: "https://www.google.com/maps?q=Kumari+Amman+Temple"
},
{
    id: 16,
    name: "Manakudi Bird Sanctuary",
    description: "A peaceful estuary that attracts migratory birds, ideal for bird watching and photography.",
    image: "assets/images/man.jpeg",
    imageAlt: "Manakudi Bird Sanctuary",
    tag: "Nature",
    location: "Manakudi",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Manakudi+Bird+Sanctuary"
},
{
    id: 17,
    name: "Muttom Beach",
    description: "A rocky beach known for its lighthouse, cliffs, and dramatic ocean views.",
    image: "assets/images/muttum.jpeg",
    imageAlt: "Muttom Beach",
    tag: "Beach",
    location: "Muttom",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Muttom+Beach"
},
{
    id: 18,
    name: "Our Lady of Ransom Church",
    description: "A beautiful white Gothic-style church facing the sea, one of Kanyakumari’s landmarks.",
    image: "assets/images/our.jpg",
    imageAlt: "Our Lady of Ransom Church",
    tag: "Church",
    location: "Kanyakumari",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=Our+Lady+of+Ransom+Church+Kanyakumari"
},
{
    id: 19,
    name: "Padmanabhapuram Palace",
    description: "A historic wooden palace showcasing traditional Kerala architecture and royal heritage.",
    image: "assets/images/pad1.jpeg",
    imageAlt: "Padmanabhapuram Palace",
    tag: "Historical",
    location: "Padmanabhapuram",
    duration: "2 hours",
    mapLink: "https://www.google.com/maps?q=Padmanabhapuram+Palace"
},
{
    id: 20,
    name: "Sanguthurai Beach",
    description: "A scenic beach with unique rock formations and a peaceful environment.",
    image: "assets/images/san.jpg",
    imageAlt: "Sanguthurai Beach",
    tag: "Beach",
    location: "Sanguthurai",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Sanguthurai+Beach"
},
{
    id: 21,
    name: "Suchindram Temple",
    description: "A famous temple dedicated to the trinity of Shiva, Vishnu, and Brahma.",
    image: "assets/images/suc.jpg",
    imageAlt: "Suchindram Temple",
    tag: "Temple",
    location: "Suchindram",
    duration: "45 mins",
    mapLink: "https://www.google.com/maps?q=Suchindram+Temple"
},
{
    id: 22,
    name: "Vattakottai Fort",
    description: "A seaside fort offering panoramic ocean views and historical charm.",
    image: "assets/images/vat.jpeg",
    imageAlt: "Vattakottai Fort",
    tag: "Historical",
    location: "Near Nagercoil",
    duration: "1–2 hours",
    mapLink: "https://www.google.com/maps?q=Vattakottai+Fort"
},
{
    id: 23,
    name: "Thuckalay Pallivasal",
    description: "A historic mosque in Thuckalay reflecting cultural harmony and heritage.",
    image: "assets/images/pal1.jpg",
    imageAlt: "Thuckalay Pallivasal",
    tag: "Religious",
    location: "Thuckalay",
    duration: "20–30 mins",
    mapLink: "https://www.google.com/maps?q=Thuckalay+Pallivasal"
},
{
    id: 24,
    name: "Lemur Beach",
    description: "A quiet and lesser-known beach in Kanyakumari, ideal for peaceful walks and enjoying untouched coastal beauty.",
    image: "assets/images/lemur.jpg",
    imageAlt: "Lemur Beach Kanyakumari",
    tag: "Beach",
    location: "Near Kanyakumari",
    duration: "45–60 mins",
    mapLink: "https://www.google.com/maps?q=Lemur+Beach+Kanyakumari"
},
{
    id: 25,
    name: "Thengapattanam Beach",
    description: "A scenic coastal beach near the Kerala border where a river meets the sea, offering calm surroundings and beautiful views.",
    image: "assets/images/thenga.jpg",
    imageAlt: "Thengapattanam Beach",
    tag: "Beach",
    location: "Thengapattanam",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Thengapattanam+Beach"
},
{
    id: 26,
    name: "Aralvaimozhi Devasahayam Mount",
    description: "A sacred hilltop site associated with Saint Devasahayam, offering spiritual significance and panoramic views.",
    image: "assets/images/idev.jpg",
    imageAlt: "Aralvaimozhi Devasahayam Mount",
    tag: "Religious",
    location: "Aralvaimozhi",
    duration: "45 mins",
    mapLink: "https://www.google.com/maps?q=Devasahayam+Mount+Aralvaimozhi"
},
{
    id: 27,
    name: "Kumaracoil Murugan Temple",
    description: "A famous Murugan temple located at the foothills of the Western Ghats, surrounded by natural beauty.",
    image: "assets/images/kumar.jpg",
    imageAlt: "Kumaracoil Murugan Temple",
    tag: "Temple",
    location: "Kumaracoil",
    duration: "45 mins",
    mapLink: "https://www.google.com/maps?q=Kumaracoil+Murugan+Temple"
},
{
    id: 28,
    name: "Valli Chunai",
    description: "A small natural water stream associated with Lord Murugan, set amidst greenery and rocky terrain.",
    image: "assets/images/vali.jpg",
    imageAlt: "Valli Chunai",
    tag: "Nature",
    location: "Kumaracoil",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=Valli+Chunai+Kanyakumari"
},
{
    id: 29,
    name: "Black Rock Falls",
    description: "A seasonal waterfall known for its dark rocky surroundings and serene natural environment.",
    image: "assets/images/black.jpg",
    imageAlt: "Black Rock Falls",
    tag: "Waterfall",
    location: "Near Nagercoil",
    duration: "45–60 mins",
    mapLink: "https://www.google.com/maps?q=Black+Rock+Falls+Kanyakumari"
},
{
    id: 30,
    name: "Aruvikarai",
    description: "A natural stream and picnic spot popular for its fresh water flow and peaceful surroundings.",
    image: "assets/images/aruv.jpg",
    imageAlt: "Aruvikarai",
    tag: "Nature",
    location: "Aruvikarai",
    duration: "30–45 mins",
    mapLink: "https://www.google.com/maps?q=Aruvikarai+Kanyakumari"
},
{
    id: 31,
    name: "Aadhikesava Perumal Temple",
    description: "A unique religious site blending local traditions and spiritual importance.",
    image: "assets/images/adi.jpg",
    imageAlt: "Aadhikesava Perumal Temple",
    tag: "Religious",
    location: "Kanyakumari District",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps/place/Sree+Adi+Kesava+Perumal+Temple/@8.3297154,77.2660786,17z/data=!3m1!4b1!4m6!3m5!1s0x3b045437abf739ad:0x2a3fe423076b5c03!8m2!3d8.3297154!4d77.2660786!16zL20vMDdqc19r?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
},
{
    id: 32,
    name: "Kottar St. Xavier’s Church",
    description: "A historic church in Kottar known for its architecture and religious heritage.",
    image: "assets/images/kot.jpg",
    imageAlt: "Kottar St Xavier Church",
    tag: "Church",
    location: "Kottar, Nagercoil",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=St+Xavier+Church+Kottar"
},
{
    id: 33,
    name: "Chitharal Malai Jain Temple",
    description: "An ancient Jain cave temple carved into a hill, featuring historic inscriptions and sculptures.",
    image: "assets/images/chit.jpg",
    imageAlt: "Chitharal Malai Jain Temple",
    tag: "Historical",
    location: "Chitharal",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Chitharal+Malai+Jain+Temple"
},
{
    id: 34,
    name: "Kalimalai",
    description: "A small hill area known for its scenic views and calm atmosphere.",
    image: "assets/images/kal1.jpg",
    imageAlt: "Kalimalai",
    tag: "Nature",
    location: "Near Kanyakumari",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=Kalimalai+Kanyakumari"
},
{
    id: 35,
    name: "Chittar I Dam",
    description: "A reservoir surrounded by greenery, popular for scenic views and peaceful outings.",
    image: "assets/images/chit1.jpg",
    imageAlt: "Chittar I Dam",
    tag: "Dam",
    location: "Near Nagercoil",
    duration: "45 mins",
    mapLink: "https://www.google.com/maps?q=Chittar+Dam+Kanyakumari"
},
{
    id: 36,
    name: "Pechiparai Dam",
    description: "A major dam surrounded by forested hills, offering cool climate and scenic beauty.",
    image: "assets/images/pech.jpeg",
    imageAlt: "Pechiparai Dam",
    tag: "Dam",
    location: "Pechiparai",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Pechiparai+Dam"
},
{
    id: 37,
    name: "Kodayar Powerhouse",
    description: "A hydroelectric powerhouse area surrounded by lush greenery and river views.",
    image: "assets/images/kod.jpg",
    imageAlt: "Kodayar Powerhouse",
    tag: "Nature",
    location: "Kodayar",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=Kodayar+Powerhouse"
},
{
    id: 38,
    name: "Mukoodal Dam",
    description: "A scenic dam located at the confluence of rivers, offering peaceful surroundings.",
    image: "assets/images/muk.jpg",
    imageAlt: "Mukoodal Dam",
    tag: "Dam",
    location: "Mukoodal",
    duration: "45 mins",
    mapLink: "https://www.google.com/maps?q=Mukoodal+Dam"
},
{
    id: 39,
    name: "Ulakai Aruvi",
    description: "A hidden waterfall spot known for its natural charm and forest surroundings.",
    image: "assets/images/ula.jpg",
    imageAlt: "Ulakai Aruvi",
    tag: "Waterfall",
    location: "Near Kodayar",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Ulakai+Aruvi"
},
{
    id: 40,
    name: "Nagaraja Temple",
    description: "A famous temple in Nagercoil dedicated to Nagaraja, blending Hindu and Jain traditions.",
    image: "assets/images/nag.jpg",
    imageAlt: "Nagaraja Temple Nagercoil",
    tag: "Temple",
    location: "Nagercoil",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=Nagaraja+Temple+Nagercoil"
},
{
    id: 41,
    name: "Perunchani Dam",
    description: "A large dam surrounded by hills and forests, popular for scenic views.",
    image: "assets/images/per.jpg",
    imageAlt: "Perunchani Dam",
    tag: "Dam",
    location: "Perunchani",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Perunchani+Dam"
},
{
    id: 42,
    name: "Periyakadu Church & Beach",
    description: "A peaceful coastal area with a church and beach, offering calm and scenic surroundings.",
    image: "assets/images/peri.jpg",
    imageAlt: "Periyakadu Church and Beach",
    tag: "Beach",
    location: "Periyakadu",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Periyakadu+Beach"
},
{
    id: 43,
    name: "Thiruvithancode Arappally",
    description: "One of the oldest Christian churches in India, with great historical and religious importance.",
    image: "assets/images/mal.jpg",
    imageAlt: "Thiruvithancode Arappally",
    tag: "Historical",
    location: "Thiruvithancode",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=Thiruvithancode+Arappally"
},
{
    id: 44,
    name: "Thirunanthikarai Cave Temple",
    description: "An ancient rock-cut cave temple dedicated to Lord Shiva, showcasing early Dravidian architecture.",
    image: "assets/images/thirum.jpg",
    imageAlt: "Thirunanthikarai Cave Temple",
    tag: "Temple",
    location: "Thirunanthikarai",
    duration: "30–45 mins",
    mapLink: "https://www.google.com/maps?q=Thirunanthikarai+Cave+Temple"
},
{
    id: 45,
    name: "Thirunanthikarai Garden",
    description: "A landscaped garden near the cave temple, ideal for relaxing and family visits.",
    image: "assets/images/thirun.jpg",
    imageAlt: "Thirunanthikarai Garden",
    tag: "Park",
    location: "Thirunanthikarai",
    duration: "30 mins",
    mapLink: "https://www.google.com/maps?q=Thirunanthikarai+Garden"
},
{
    id: 46,
    name: "Mandaikadu Bhagavathi Amman Temple",
    description: "A famous coastal temple dedicated to Goddess Bhagavathi, visited by devotees throughout the year.",
    image: "assets/images/manda.jpg",
    imageAlt: "Mandaikadu Bhagavathi Amman Temple",
    tag: "Temple",
    location: "Mandaikadu",
    duration: "45 mins",
    mapLink: "https://www.google.com/maps?q=Mandaikadu+Bhagavathi+Amman+Temple"
},
{
    id: 47,
    name: "Twin Falls Kodayar",
    description: "Twin waterfalls located in the Kodayar forest region, offering scenic views and fresh air.",
    image: "assets/images/twin.jpeg",
    imageAlt: "Twin Falls Kodayar",
    tag: "Waterfall",
    location: "Kodayar",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Twin+Falls+Kodayar"
},
{
    id: 48,
    name: "Ganapathipuram Backwater",
    description: "A calm backwater region known for boating, greenery, and sunset views.",
    image: "assets/images/gana.jpg",
    imageAlt: "Ganapathipuram Backwater",
    tag: "Backwater",
    location: "Ganapathipuram",
    duration: "1 hour",
    mapLink: "https://www.google.com/maps?q=Ganapathipuram+Backwater"
},



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
// Only Tour Guides service is active
const services = [
    /*
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
    */
    {
        id: 3,
        name: "Tour Guides",
        icon: "🎓",
        items: [
            { name: "Official Tourism Guides", action: "note", value: "Certified" },
            { name: "Local Guide Association", action: "call", value: "+919682116101" },
            { name: "Private Tour Operators", action: "note", value: "Full day packages" }
        ]
    }
    /*
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
    */
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
        title: "📍 Venad Tamilan",
        items: [
            "Kanyakumari Tourist Guide",
            "+91 96821 16101",
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

    const currentPage = document.body.dataset.page;

    const sortedPlaces = [...touristPlaces].sort((a, b) =>
    a.name.localeCompare(b.name)
);

const placesToRender =
    currentPage === "home"
        ? sortedPlaces.slice(0, 6)
        : sortedPlaces;


    container.innerHTML = placesToRender.map(place => `

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

    <a href="${place.mapLink}"
       target="_blank"
       rel="noopener noreferrer"
       class="btn btn-secondary">
        View on Map
    </a>
</div>
            </div>
        </article>
    `).join('');

    // Render "More Places" button on home page only
    const morePlacesContainer = document.getElementById('more-places-container');
    if (morePlacesContainer && currentPage === 'home') {
        morePlacesContainer.innerHTML = `
            <div style="text-align: center; margin-top: 32px;">
                <a href="places.html" class="btn btn-primary">More Places</a>
            </div>
        `;
    }
}

// Render Restaurants
function renderRestaurants(filter = 'all') {
    const container = document.getElementById('restaurants-container');
    const section = document.getElementById('restaurants');
    
    // Skip rendering on home page
    if (section && section.getAttribute('data-page') === 'home') return;
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
    const section = document.getElementById('hotels');
    
    // Skip rendering on home page
    if (section && section.getAttribute('data-page') === 'home') return;
    
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
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone')?.value || '';
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        const errors = [];

        if (name.length < 2) {
            errors.push('Please enter a valid name');
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
            return;
        }

        // ✅ EMAILJS SEND
        emailjs.send(
            'service_anurbvd',
            'template_ajuoux2',
            {
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            }
        )
        .then(() => {
            showNotification(
                'Message sent successfully! We will get back to you soon.',
                'success'
            );
            contactForm.reset();
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            showNotification(
                'Failed to send message. Please try again later.',
                'error'
            );
        });
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

