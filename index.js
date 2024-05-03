var _a, _b;
// Define variables
var clicks = 0;
var runs = 0;
var isProgressBarActive = false;
// Function to handle click event
function handleClick() {
    clicks++;
    var clickCountElement = document.getElementById('click-count');
    if (clickCountElement) {
        clickCountElement.innerText = 'Clicks: ' + clicks;
    }
}
function runBridgeRun() {
    //create button, progress bar, stats
    //increment stats by fixed amount on completion
    if (!isProgressBarActive) {
        runs++;
        document.getElementById('runs-count').innerText = 'Runs ' + runs;
        startProgressBar();
    }
}
// Function to start the progress bar
function startProgressBar() {
    isProgressBarActive = true;
    var progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '100%';
    // After 5 seconds, reset progress bar and allow clicking again
    setTimeout(function () {
        progressBar.style.width = '0%';
        isProgressBarActive = false;
    }, 5000);
}
// Add event listener to the click button
(_a = document.getElementById('click-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleClick);
(_b = document.getElementById('run-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', runBridgeRun);
