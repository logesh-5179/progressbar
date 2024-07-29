document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box > div');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    let curr=0;

    function update() {
        boxes.forEach((box, index) => {
            if (index <= curr) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    }

    left.addEventListener('click', function() {
        if (curr > 0) {
            curr--;
            update();
        }
    });

    right.addEventListener('click', function() {
        if (curr < boxes.length - 1) {
            curr++;
            update();
        }
    });

    update();
});
