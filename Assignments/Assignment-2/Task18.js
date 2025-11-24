function startExam(callback) {
    setTimeout(() => {
        console.log("Exam started");
        callback();  // Move to next step
    }, 1000); // 1-second delay
}

function evaluateExam(callback) {
    setTimeout(() => {
        console.log("Evaluating answers");
        callback();  // Move to final step
    }, 1500); // 1.5-second delay
}

function declareResult() {
    setTimeout(() => {
        console.log("Result declared");
    }, 1000); // 1-second delay
}

// Calling the functions in sequence (callback chain)
startExam(() => {
    evaluateExam(() => {
        declareResult();
    });
});
