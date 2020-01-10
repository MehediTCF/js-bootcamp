let restaurant = {
    name: "Panshi",
    guestCount: 0,
    guestCapacity: 50,
    checkAvailability: function (guestCapacity) {
        if (guestCapacity <= 50) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(restaurant.checkAvailability(55))