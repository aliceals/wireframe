let showNotification = true



function toggleNotification() {
    var element = document.getElementById("notification");

    if (showNotification) {
        element.classList.add("hidden");
    } else {
        element.classList.remove("hidden");
    }
    showNotification = !showNotification
}
