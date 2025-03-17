document.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", function() {
        let likeCount = this.querySelector(".like-count");
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
});

document.querySelectorAll(".gallery-image").forEach((image) => {
    image.addEventListener("mouseover", function() {
        this.style.border = "2px solid gray";
    });

    image.addEventListener("mouseout", function() {
        this.style.border = "none";
    });
});
