document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("view-fpo").addEventListener("click", function () {
        window.location.href = "fpo-list.html";
    });

    document.getElementById("apply-fpo").addEventListener("click", function () {
        window.location.href = "fpo-apply.html";
    });

    document.getElementById("go-back").addEventListener("click", function () {
        window.location.href = "../index.html";
    });
});
