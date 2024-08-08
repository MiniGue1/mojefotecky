document.addEventListener("DOMContentLoaded", () => {
    const numStars = 200; // Total number of stars to generate
    const starContainer = document.getElementById('stars');

    // Function to create a single star
    const createStar = () => {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random initial position within the container
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        
        // Randomize star size
        const size = Math.random() * 2 + 1; // Star size between 1px and 3px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        return star;
    };

    // Create and append stars
    for (let i = 0; i < numStars; i++) {
        starContainer.appendChild(createStar());
    }

    // Add an additional set of stars to ensure seamless scrolling
    for (let i = 0; i < numStars; i++) {
        const star = createStar();
        star.style.left = `${Math.random() * 50 + 100}vw`; // Position these to start off-screen to the right
        starContainer.appendChild(star);
    }
});
