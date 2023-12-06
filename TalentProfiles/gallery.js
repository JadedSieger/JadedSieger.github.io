let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.album img');
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    images.forEach((image, i) => {
        if (i === currentIndex) {
            image.style.opacity = '1';
        } else {
            image.style.opacity = '0';
        }

        console.log(`Image at index ${i}: ${image.src}`);
    });
}

function prevImage() {
    showImage(currentIndex - 1);
}

function nextImage() {
    showImage(currentIndex + 1);
}
function showImage(index) {
    console.log('Requested to show image at index:', index);
    
    const images = document.querySelectorAll('.album img');
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    console.log('Actual index to be shown:', index);

    images.forEach((image, i) => {
        if (i === index) {
            image.style.opacity = '1';
            console.log(`Image at index ${i} set to visible`);
        } else {
            image.style.opacity = '0';
            console.log(`Image at index ${i} set to hidden`);
        }
    });
}

// Initial setup
document.addEventListener('DOMContentLoaded', function () {
    showImage(currentIndex);

    // Attach click event listeners to buttons
    const prevButton = document.querySelector('button[data-action="prev"]');
    const nextButton = document.querySelector('button[data-action="next"]');
    if (prevButton) {
        prevButton.addEventListener('click', prevImage);
    }
    if (nextButton) {
        nextButton.addEventListener('click', nextImage);
    }
});
