// Файл: js/trips-data.js
// Опис: JavaScript-модуль, який містить структуру даних для списку "Featured Trips".

/**
 * @typedef {Object} Trip
 * @property {number} id - Унікальний ідентифікатор туру.
 * @property {string} title - Назва туру.
 * @property {string} location - Розташування (місто, країна).
 * @property {number} duration - Тривалість туру в днях.
 * @property {number} price - Ціна туру в доларах США (USD).
 * @property {number} rating - Рейтинг туру (від 1 до 5).
 * @property {number} reviewsCount - Кількість відгуків.
 * @property {string} imageUrl - URL (шлях) до зображення туру для фону.
 */

/**
 * Масив об'єктів, що представляють "Featured Trips" на головній сторінці.
 * Кожен об'єкт відповідає структурі {@link Trip}.
 */
const featuredTrips = [
    {
        id: 1,
        title: "Centipede Tour - Guided Arizona. Desert Tour by ATV",
        location: "Paris, France",
        duration: 4,
        price: 189.25,
        rating: 4.8,
        reviewsCount: 243,
        imageUrl: "images/Centipede Tour.png"
    },
    {
        id: 2,
        title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
        location: "New York, USA",
        duration: 4,
        price: 225.00,
        rating: 4.8,
        reviewsCount: 243,
        imageUrl: "images/Molokini.png"
    },
    {
        id: 3,
        title: "Westminster Walking Tour & Westminster Abbey Entry",
        location: "London, UK",
        duration: 4,
        price: 943.00,
        rating: 4.8,
        reviewsCount: 243,
        imageUrl: "images/Westminster.png"
    },
    {
        id: 4,
        title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
        location: "New York, USA",
        duration: 4,
        price: 771.00,
        rating: 4.8,
        reviewsCount: 243,
        imageUrl: "images/All Inclusive Ultimate Circle Island.png"
    }
];

console.log("Дані про тури:", featuredTrips);
export { featuredTrips };
