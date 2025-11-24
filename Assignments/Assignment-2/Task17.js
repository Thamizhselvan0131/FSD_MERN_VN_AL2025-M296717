function downloadFile(filename, callback) {
    setTimeout(() => {
        console.log(`Downloading ${filename}...`);
        callback();  // calling the callback after download completes
    }, 2000); // 2-second delay
}

// Using the function
downloadFile("movie.mp4", function() {
    console.log("Download complete!");
});
