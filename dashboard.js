// // dashboard.js

// // Function to display the appropriate dashboard based on the user's role
// function showDashboard(role) {
//     // Hide all sections initially
//     document.getElementById('admin-dashboard').style.display = 'none';
//     document.getElementById('staff-dashboard').style.display = 'none';
//     document.getElementById('patient-portal').style.display = 'none';

//     // Show the relevant section based on the role
//     if (role === 'Admin') {
//         document.getElementById('admin-dashboard').style.display = 'block';
//     } else if (role === 'Staff') {
//         document.getElementById('staff-dashboard').style.display = 'block';
//     } else if (role === 'Patient') {
//         document.getElementById('patient-portal').style.display = 'block';
//     }
// }

// Example usage: Call this function with the user's role after login
// Replace 'Admin' with the actual role obtained during login
showDashboard('Admin');
// Sample data for metrics - you can replace this with actual data from the backend
const metrics = {
    patientInflow: 120,
    bedOccupancy: 85,
    inventoryLevels: 'Running low'
};

// Function to update the metrics on the dashboard
function updateMetrics() {
    document.querySelector('.metric:nth-child(1) p').innerText = `${metrics.patientInflow} patients today`;
    document.querySelector('.metric:nth-child(2) p').innerText = `${metrics.bedOccupancy}% occupied`;
    document.querySelector('.metric:nth-child(3) p').innerText = `${metrics.inventoryLevels}`;
}

// Function to handle notifications (e.g., dismissing them)
function handleNotifications() {
    const notifications = document.querySelectorAll('.notifications span');
    notifications.forEach(notification => {
        notification.addEventListener('click', () => {
            notification.style.display = 'none'; // Dismiss notification
        });
    });
}

// Function to simulate recent activities (you can update this with actual backend data)
function loadRecentActivities() {
    const activities = [
        '📝 New patient admission processed',
        '🛏️ Bed assigned to a patient',
        '📦 Inventory updated'
    ];
    const activityList = document.querySelector('.recent-activities ul');
    activityList.innerHTML = ''; // Clear existing activities
    activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = activity;
        activityList.appendChild(listItem);
    });
}

// Initialize the dashboard when the page loads
window.onload = function() {
    updateMetrics();
    handleNotifications();
    loadRecentActivities();
};


