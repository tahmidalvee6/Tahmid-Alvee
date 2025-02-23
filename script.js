document.addEventListener("DOMContentLoaded", function () {
    const skillsItems = document.querySelectorAll(".skill-item");
    skillsItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-5px)";
            item.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0)";
            item.style.boxShadow = "none";
        });
    });

    const educationItems = document.querySelectorAll(".education-item");
    educationItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-5px)";
            item.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0)";
            item.style.boxShadow = "none";
        });
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

   
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

       
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset(); 
    });
});
