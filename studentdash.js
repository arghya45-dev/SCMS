document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('studentProgressChart').getContext('2d');
    const ctx2 = document.getElementById('subjectPerformanceChart').getContext('2d');
    const ctx3 = document.getElementById('scrollingChart').getContext('2d');
    const ctx4 = document.getElementById('attendanceChart').getContext('2d');


     // Data for the charts
     const weeklyPerformanceData = [10, 75, 80, 40, 90, 85, 70, 95, 92, 30, 90, 79];
     const attendanceData = [95, 90, 92, 85, 88, 90, 93, 89, 87, 92, 94, 91];
 
     // Calculate averages
     const avgWeeklyPerformance = weeklyPerformanceData.reduce((a, b) => a + b, 0) / weeklyPerformanceData.length;
     const avgAttendance = attendanceData.reduce((a, b) => a + b, 0) / attendanceData.length;
 
     // Update the average display
     document.getElementById('scrollingChartAvg').innerText = `Average Weekly Performance: ${avgWeeklyPerformance.toFixed(2)}%`;
     document.getElementById('attendanceChartAvg').innerText = `Average Attendance: ${avgAttendance.toFixed(2)}%`;

    // Student Progress Chart (Bar Chart)
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Math', 'Science', 'English', 'History', 'Geography'],
            datasets: [{
                label: 'Overall Performance (%)',
                data: [90, 85, 88, 80, 75],
                backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 99, 132, 0.5)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Subject Performance Chart (Pie Chart)
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Math', 'Science', 'English', 'History', 'Geography'],
            datasets: [{
                label: 'Performance by Subject',
                data: [90, 85, 88, 80, 75],
                backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 99, 132, 0.5)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Scrolling Line Chart (Line Chart)
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
            datasets: [{
                label: 'Weekly Performance',
                data: weeklyPerformanceData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'x'
                    },
                    zoom: {
                        enabled: true,
                        mode: 'x',
                        speed: 0.05
                    }
                }
            }
        }
    });

    // Attendance Tracker Chart (Line Chart)
    new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
            datasets: [{
                label: 'Attendance (%)',
                data: attendanceData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });
});
