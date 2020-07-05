var hotel = {
key: "value",
availableRooms: [101, 102, 103, 104, 105, 106],
bookedRooms: [],
bookRoom: function() {
	let temp = [this.availableRooms.pop()];
	
	this.bookedRooms = this.bookedRooms.concat(temp);
	this.roomSummary()

	},
returnRoom: function(){
		let temp = [this.bookedRooms.pop()];
		this.availableRooms = this.availableRooms.concat(temp);
		this.roomSummary();

	},
roomSummary: function() {
	this.bookedRooms.sort()
		this.availableRooms.sort();
			console.log(`Booked Rooms ${this.bookedRooms}`);
		console.log(`Available Rooms ${this.availableRooms}`);

}
}
hotel.bookRoom();
hotel.bookRoom();
hotel.bookRoom();
hotel.returnRoom();

