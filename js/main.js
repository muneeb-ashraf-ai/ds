document.addEventListener("DOMContentLoaded", function() {
    // Collapsible sections
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }

    // Active navigation link
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Copy code button
    const copyButtons = document.querySelectorAll('.code-snippet button');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const code = button.nextElementSibling.textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
    });
});
