(function ($) {
    // Trenutna Godina
    $("#godina").text(new Date().getFullYear());

    // Uklanja no-js klasu
    $('html').removeClass('no-js');

    // Animacija do sekcije
    $('header a').click(function (e) {

        // Tretira kao normalan link ako no-scroll klasa postoji
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Sakri meni ako je kliknuto (mobile)
        
    });

    // Scroll na vrh
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll na prvi element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Pravi Timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Dodaje svaki timeline blok
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Dodaje ikone na svaki blok
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Dodaje datum na timeline (ako postoji)
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { 
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });


});
