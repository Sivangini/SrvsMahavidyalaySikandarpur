(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);




/*js for course select*/
$(document).ready(function () {
    $("#C1").click(function () {
        $("#Table1").show();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table4").hide();
        $("#Table5").hide();
        $("#Table6").hide();
        $("#Table7").hide();
    });
	$("#C2").click(function () {
        $("#Table2").show();
        $("#Table1").hide();
        $("#Table3").hide();
        $("#Table4").hide();
        $("#Table5").hide();
        $("#Table6").hide();
        $("#Table7").hide();
    });
	$("#C3").click(function () {
        $("#Table3").show();
        $("#Table2").hide();
        $("#Table1").hide();
        $("#Table4").hide();
        $("#Table5").hide();
        $("#Table6").hide();
        $("#Table7").hide();
    });
			 $("#C4").click(function ()  {
        $("#Table4").show();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table1").hide();
        $("#Table5").hide();
        $("#Table6").hide();
        $("#Table7").hide();
    });
    $("#C5").click(function ()  {
        $("#Table5").show();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table1").hide();
        $("#Table4").hide();
        $("#Table6").hide();
        $("#Table7").hide();
    });
    $("#C6").click(function ()  {
        $("#Table6").show();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table1").hide();
        $("#Table4").hide();
        $("#Table5").hide();
        $("#Table7").hide();
    });
    $("#C7").click(function ()  {
        $("#Table7").show();
        $("#Table1").hide();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table4").hide();
        $("#Table5").hide();
        $("#Table6").hide();
    });
});
		$(document).ready(function () {
        $("#Table1").show();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table4").hide();
        $("#Table5").hide();
        $("#Table6").hide();
        $("#Table7").hide();
    });
/*end of js for course select*/






/*********gallery************************** */

document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("caption");
    const close = document.querySelector(".close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = item.src;
            captionText.innerHTML = item.alt;
        });
    });

    close.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const eventCards = document.querySelectorAll(".event-card");
    const modal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close");
    const eventTitle = document.getElementById("event-title");
    const eventDate = document.getElementById("event-date");
    const eventDescription = document.getElementById("event-description");

    const eventDetails = {
        1: {
            title: "Orientation Week",
            date: "August 20-25, 2024",
            description: "Welcome new students to our college community with a week full of fun activities, campus tours, and orientation sessions."
        },
        2: {
            title: "Tech Conference",
            date: "September 10, 2024",
            description: "Join us for a day-long conference where industry leaders and innovators discuss the latest trends in technology and its impact on our world."
        },
        3: {
            title: "Homecoming",
            date: "October 5, 2024",
            description: "Reunite with old friends and make new ones at our annual homecoming event. Enjoy a day of festivities, sports, and alumni gatherings."
        },
        4: {
            title: "Art Exhibition",
            date: "November 15-20, 2024",
            description: "Explore the creative works of our talented art students at this year's art exhibition. Paintings, sculptures, and digital art will be on display."
        },
        5: {
            title: "Art Exhibition",
            date: "December 12, 2024",
            description: "Explore the creative works of our talented art students at this year's art exhibition. Paintings, sculptures, and digital scienceEngage with groundbreaking research, interactive displays, and visionary innovations at our inspiring Science Exhibition event will be on display."
        }
    };

    eventCards.forEach(card => {
        card.addEventListener("click", () => {
            const eventId = card.getAttribute("data-event");
            const eventDetail = eventDetails[eventId];

            eventTitle.textContent = eventDetail.title;
            eventDate.textContent = eventDetail.date;
            eventDescription.textContent = eventDetail.description;

            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});