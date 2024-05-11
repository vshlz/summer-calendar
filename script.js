document.addEventListener("DOMContentLoaded", function() {
    const weeks = document.querySelectorAll('.week');
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
            alert(randomMsg);
        });
    });
});
