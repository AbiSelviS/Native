const pics = document.querySelectorAll('.pic');

pics.forEach(function(pic) {
    pic.addEventListener('click', function() {

        // if already open close
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } 
        // open clicked one & close others
        else {
            pics.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        }

    });
});