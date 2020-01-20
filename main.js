let showNotification = true

function toggleNotification() {
    var notificationElement = document.getElementById("notification")

    if (showNotification) {
        notificationElement.classList.add("hidden")
    } else {
        notificationElement.classList.remove("hidden")
    }

    showNotification = !showNotification
}
