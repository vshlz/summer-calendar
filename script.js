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

    content = [
        {
         "text": "Test test test",
         "image": "https://hips.hearstapps.com/hmg-prod/images/when-does-summer-end-1651614198.jpg?crop=1xw:0.8612204724409449xh;center,top",
         "map":  {"lat": 60.1699, "lng": 24.9384},
         "video": "I8ACAPIzG1g?si=TN0s9QZOxi7dl0TE"
        }
    ];

    weeks.forEach(week => {
        week.addEventListener('click', function() {
            const randomContent = content[Math.floor(Math.random() * content.length)];
            modalText.textContent = randomContent.text || '';
            modalText.style.display = randomContent.text ? 'block' : 'none';

            modalImage.src = randomContent.image || '';
            modalImage.style.display = randomContent.image ? 'block' : 'none';

            
            console.log(randomContent.video)
            if (randomContent.video) {
                // modalVideo.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/S1yOYOkOLMA?si=-NGYh3DBHAFcY-DF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                modalVideo.innerHTML = `<iframe height="100%" width="100%" src="https://www.youtube.com/embed/${randomContent.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                modalVideo.style.display = 'block';
            } else {
                modalVideo.style.display = 'none';
            }

            if (randomContent.map) {
                updateOrCreateMap(modalMap, randomContent.map);
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
