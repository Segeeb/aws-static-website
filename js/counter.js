// Function to retrieve the visitor count from your API Gateway
function getVisitorCount() {
    fetch("https://dx1l2fs2ja.execute-api.us-east-1.amazonaws.com/GEdeploy/lanbealambda") // Replace with your API Gateway URL for the GET request
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("visitorCount").textContent = data.count;
        })
        .catch((error) => {
            console.error("Error getting visitor count:", error);
        });
}

// Function to increment the visitor count via your API Gateway
function updateVisitorCount() {
    fetch("https://448qq0l8jd.execute-api.us-east-1.amazonaws.com/POSTdeploy/lanbealambda", {
        method: "POST" // Make a POST request to update the count
    })
        .then(() => {
            getVisitorCount(); // Refresh the displayed count
        })
        .catch((error) => {
            console.error("Error updating visitor count:", error);
        });
}

// Load the initial count and periodically update it (e.g., every minute)
getVisitorCount();
setInterval(updateVisitorCount, 1000); // 60,000 milliseconds = 1 minute
