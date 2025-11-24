let name = "Thamizh";
message = ` Hello, ${name}! Wellcome to Javascript.`;
console.log(message);

let UpperCase = name.toUpperCase();
console.log("UperCase:", UpperCase);

let isLong = message.length > 10;
console.log("message has be more than 10 charter:", isLong);

let hasJs = message.includes("JavaScript");
console.log("Message contains has 'JavaScript':", hasJs);