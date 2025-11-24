


let totalSeats = 120;
let bookedSeats = 78;

let availableSeats = totalSeats - bookedSeats;
console.log("AvailableSeats:", availableSeats);


let statusMessage;

if (availableSeats < 20) {
    
 statusMessage = "Almost Full"
}
else if (availableSeats >= 20 && availableSeats <= 60) {
    statusMessage = "moderate Availability";
    
}else {
    statusMessagen = "plenty of seat Available";
}

console.log("Status:", statusMessage);

 


