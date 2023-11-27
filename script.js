document.addEventListener("DOMContentLoaded", function () {
    const offeredList = document.querySelector(".offeredlist");
    const wantedList = document.querySelector(".wantedlist");

    // Initially, hide the wantedlist
    wantedList.style.display = "none";

    // Add click event listener to the "Aangeboden" link
    document.querySelector(".offered a").addEventListener("click", function (e) {
        e.preventDefault();

        // Show offeredlist and hide wantedlist
        offeredList.style.display = "block";
        wantedList.style.display = "none";
    });

    // Add click event listener to the "Gezocht" link
    document.querySelector(".wanted a").addEventListener("click", function (e) {
        e.preventDefault();

        // Show wantedlist and hide offeredlist
        wantedList.style.display = "block";
        offeredList.style.display = "none";
    });
});
