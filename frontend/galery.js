const pics = document.querySelectorAll('.pic');

pics.forEach(function(pic) {
    pic.addEventListener('click', function() {

        
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } 
        
        else {
            pics.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        }

    });
});