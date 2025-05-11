document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains("active");

            // Close all items
            document.querySelectorAll(".accordion-item").forEach(item => item.classList.remove("active"));

            // Toggle the clicked item
            if (!isActive) {
                accordionItem.classList.add("active");
            }
        });
    });

    // Accept Terms Button
    document.querySelector(".accept-btn").addEventListener("click", function () {
        alert("Thank you for accepting the terms!");
    });
});