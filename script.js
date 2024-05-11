document.addEventListener("DOMContentLoaded", function() {
    const weeks = document.querySelectorAll('.week');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const close = document.getElementsByClassName("close")[0];

    const messages = [
        'Ulkona järjestettävä konsertti',
        'Retki kansallispuistoon',
        'Ilmainen piirustuskurssi',
        'Katumuonafestivaali',
        'Rantalentopallokilpailut',
        'Iltaelokuvanäytös ulkoilmassa',
        'Musiikkifestivaali',
        'Kulinaariset työpajat',
        'Urheilupelejä rannalla',
        'Valokuvauskierros kaupungilla',
        'Jooga puistossa',
        'Pyöräretki kaupungin ympäristössä',
        'Museoiden yö'
    ];

    weeks.forEach(week => {
        week.addEventListener('click', function() {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            modalText.textContent = randomMsg;
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
