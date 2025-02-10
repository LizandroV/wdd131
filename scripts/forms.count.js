// Function to update and display the review count
function updateReviewCount() {
    // Retrieve the current count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");
    
    // If no count exists, initialize it to 0
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        // Convert the count to a number
        reviewCount = parseInt(reviewCount, 10);
    }
    
    // Increment the count
    reviewCount++;
    
    // Save the updated count back to localStorage
    localStorage.setItem("reviewCount", reviewCount);
    
    // Display the count on the page
    document.getElementById("reviewCount").textContent = `Total Reviews Submitted: ${reviewCount}`;
    }
    
    // Call the function when the page loads
    updateReviewCount();
