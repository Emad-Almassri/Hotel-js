class Hotel {
    #minFloor;
    #maxFloor;
    constructor(address, numberOfRooms, minFloor, maxFloor, rooms) {
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.#minFloor = minFloor;
        this.#maxFloor = maxFloor;
        this.rooms = rooms;
    };

printAdvertisement() {
    console.log( `Welcome to emad hotel in ${this.address}, We have (${this.numberOfRooms}) rooms, in (${this.#maxFloor}) floors`);
};

listBookedRooms() {
    console.log("This room is booked:");
    for (let room of this.rooms) {
        if (room.isBooked()) {
            console.log(`Room number(${room.roomNum}) on floor (${room.floorNum})`);
        };      
    };
};
};

class Room {
    #isBooked;
    constructor(floorNum, roomNum, price) {
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked = false;
    };

printRoom() {
    console.log(`Room number(${this.roomNum}) on floor (${this.floorNum}) costs $${this.price} per night`);
};
book() {
    this.#isBooked = true;
};
isBooked() {
    if (this.#isBooked) {
        console.log("This room is booked");
    }
    else{
        console.log("This room is not booked");
    };
};
};

class RoomWithView extends Room {
    constructor(floorNum, roomNum, price, view, numberOfBeds) {
        super(floorNum, roomNum, price);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    };
};

class SleepingRoom extends Room {
    constructor(floorNum, roomNum, price, personCapacity) {
        super(floorNum, roomNum, price);
        this.personCapacity = personCapacity;
    };
};

let room1 = new Room(1, "1", 10);
let room2 = new RoomWithView(5, "12", 20, "Beach", 2);
let room3 = new SleepingRoom(2, "7", 5, 1);
let room4 = new RoomWithView(8, "19", 20, "Mountains", 3);
let room5 = new SleepingRoom(1, "2", 10, 2);

let hotel = new Hotel("Nablus", 20, 1, 10, [room1,room2,room3,room4,room5,]);
