var availableRooms = ["101", "102", "103", "104", "105"];
//splice
//var removed = availableRooms.splice(1, 1);

var bookedRooms = [];
bookedRooms = bookedRooms.concat(availableRooms.splice(1, 1));
bookedRooms = bookedRooms.concat(availableRooms.splice(2, 1));

console.log(availableRooms);

console.log(bookedRooms);
