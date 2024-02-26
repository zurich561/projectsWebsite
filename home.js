document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi, I'm Loris. I love coding & designing User Interfaces.";
    let index = 0;
    const welcomeText = document.getElementById('welcomeText');

    function typeWriter() {
        welcomeText.textContent += text[index];
        index++;

        if (index < text.length) {
            setTimeout(typeWriter, 35);
        }
    }

    typeWriter();
});


document.addEventListener('DOMContentLoaded', function() {

    const welcomeGuideText = document.getElementById('welcomeGuideText');
    const welcomeGuideImg = document.getElementById('welcomeGuideImg');
    

    function fadeIn() {
        let opacity = 0;
        const duration = 2500; // Zeit in Millisekunden
        const interval = 200; // Intervall für die Animationsschritte

        function updateOpacity() {
            opacity += interval / duration;
            welcomeGuideText.style.opacity = opacity;
            welcomeGuideImg.style.opacity = opacity;

            if (opacity < 1) {
                setTimeout(updateOpacity, interval);
            }
        }

        updateOpacity();
    }

    setTimeout(fadeIn, 1500);
})