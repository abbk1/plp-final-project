/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// modal form validation
const modalForm = document.getElementById("modalForm");
const nameError = document.getElementById("nameError");
const lastnameError = document.getElementById("lastnameError");
const dateError = document.getElementById("dateError");
const phoneError = document.getElementById("phoneError");
const addressError = document.getElementById("addressError");

modalForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var date = document.getElementById("date").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var address = document.getElementById("address").value;

    var isTrue = true;

    if (firstName == "") {
        nameError.textContent = "Enter first name";
        isTrue = false;
    }
    if (lastName == "") {
        lastnameError.textContent = "Enter last name";
        isTrue = false;
    }
    if (date == "") {
        dateError.textContent = "Enter last name";
        isTrue = false;
    }
    if (phoneNumber == "") {
        phoneError.textContent = "Enter Phone number";
        isTrue = false;
    }
    if (address == "") {
        addressError.textContent = "Enter Phone number";
        isTrue = false;
    }
    if (isTrue) {
        const formdate = new FormData(modalForm);
        fetch("submit.php", {
            method: "POST",
            body: formdate
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Form submitted successfully", data.message)
                } else {
                    alert("fail to submit")
                }
            })
            .catch(((error) => {
                console.log("Error submitting the form", error);
            }
            ))

    }
})
