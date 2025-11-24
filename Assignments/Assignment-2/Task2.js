
// marks

let marks = 85;
let age = 21;
console.log("Marks:", marks);
console.log("Age:", age);

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A")
}

else if (marks >= 70 && marks <= 90) {
    console.log("Grade: B")
}
else if (marks >= 50 && marks <= 70) {
    console.log("Grade: C")
}
else if (marks >= 0 && marks <= 50) {
    console.log("Grade: F")
}else {
    console.log("Invalied Marks!.")
}



// Adult or Minor
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Status:", status);



