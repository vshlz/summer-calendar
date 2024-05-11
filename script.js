// Global variable to hold the map instance
let myMap = null;
let myMarker = null;

document.addEventListener("DOMContentLoaded", function() {
    const weeks = document.querySelectorAll('.week');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const modalMap = document.getElementById('modal-map');
    const close = document.getElementsByClassName("close")[0];

    // content = [
    //     {
    //      "text": "Test test test",
    //      "image": "https://hips.hearstapps.com/hmg-prod/images/when-does-summer-end-1651614198.jpg?crop=1xw:0.8612204724409449xh;center,top",
    //      "map":  {"lat": 60.1699, "lng": 24.9384},
    //      "video": "I8ACAPIzG1g?si=TN0s9QZOxi7dl0TE"
    //     }
    // ];

    weeks.forEach((week, index) => {
        week.addEventListener('click', function() {
            const weekContent = content[index];
            modalText.textContent = weekContent.text || '';
            modalText.style.display = weekContent.text ? 'block' : 'none';

            modalImage.src = weekContent.image || '';
            modalImage.style.display = weekContent.image ? 'block' : 'none';

            
            console.log(weekContent.video)
            if (weekContent.video) {
                modalVideo.innerHTML = `<iframe height="100%" width="100%" src="https://www.youtube.com/embed/${weekContent.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                modalVideo.style.display = 'block';
            } else {
                modalVideo.style.display = 'none';
            }

            if (weekContent.map) {
                updateOrCreateMap(modalMap, weekContent.map);
                modalMap.style.display = 'block';
                setTimeout(function() {
                    myMap.invalidateSize(); // Adjust the map size
                }, 10); // Short delay to ensure the modal is fully visible
            } else {
                modalMap.style.display = 'none';
            }

            modal.style.display = "block";
        });
    });

    close.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

function updateOrCreateMap(mapElement, location) {
    if (!myMap) {
        myMap = L.map(mapElement).setView([location.lat, location.lng], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(myMap);
        myMarker = L.marker([location.lat, location.lng]).addTo(myMap);
    } else {
        myMap.setView([location.lat, location.lng], 12);
        myMarker.setLatLng([location.lat, location.lng]);
    }
}
