function audioPlayer() {
    $player = document.querySelector('#audioPlayer');
    $trackPlay = document.querySelectorAll('.sound-play__btn');
    $trackPause = document.querySelectorAll('.sound-pause__btn');

    $trackPlay.forEach((track) => {
        track.addEventListener('click', (e) => {
            let $el = e.target;
            $player.src = $el.dataset.href;
            $player.play();
        })
    });

    $reting = document.querySelectorAll('.sound-rating__start');

    $trackPause.forEach((track) => {
        track.addEventListener('click', (e) => {
            let $el = e.target;
            $player.pause();
        })
    });
}

function rating() {
    $list = document.querySelectorAll('.sound-rating__start');

    for(let $i; $i<$list.length; $i++){

    }
    $list.forEach(star => {
        star.addEventListener('click', (e) => {
            let $el = e.target;

            console.dir($el);
        })
    });
}