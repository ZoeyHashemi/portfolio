// Add event listener for clicking on the Resume link to navigate to the PDF file
document.querySelector('.nav-link[onclick]').addEventListener('click', function() {
    window.location.href = 'Assets/zoey-resume.pdf';
});

// Smooth scrolling to section on clicking on Nav Bar links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});



 // Back to top button
 $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

    // Wait for document to load
    $(document).ready(function() {
        // Loop through each progress bar
        $('.progress-bar').each(function() {
            var progress = $(this);
            var percentage = progress.attr('aria-valuenow') + '%';
            progress.width(percentage).addClass('progress-loaded');
            progress.find('.percentage-text').text(percentage);
        });

        $(document).ready(function() {
            // Filter portfolio items when filter option is clicked
            $('#portfolio-filter li').on('click', function() {
                // Remove "filter-active" class from all filter options
                $('#portfolio-filter li').removeClass('filter-active');
                // Add "filter-active" class to the clicked filter option
                $(this).addClass('filter-active');
                // Get the filter class from the clicked filter option
                var filterValue = $(this).attr('data-filter');
                // Show/hide portfolio items based on the filter class
                if (filterValue == '*') {
                    $('.portfolio-item').show();
                } else {
                    $('.portfolio-item').hide();
                    $(filterValue).show();
                }
            });
        });
    });



    

AOS.init();
