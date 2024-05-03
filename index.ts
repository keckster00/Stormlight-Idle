// Define variables
let clicks: number = 0;
let runs: number = 0;
let isProgressBarActive: boolean = false;

// Function to handle click event
function handleClick() {
    clicks++;
    const clickCountElement = document.getElementById('click-count');
    if (clickCountElement) {
        clickCountElement.innerText = 'Clicks: ' + clicks;
    }
}

function runBridgeRun()
{
    //create button, progress bar, stats
    //increment stats by fixed amount on completion
    if(!isProgressBarActive)
    {
        runs++;
        document.getElementById('runs-count')!.innerText = 'Runs ' + runs;
        startProgressBar();
    }
}


// Function to start the progress bar
function startProgressBar() {
    isProgressBarActive = true;
    const progressBar = document.getElementById('progress-bar')!;
    progressBar.style.width = '100%';

    // After 5 seconds, reset progress bar and allow clicking again
    setTimeout(() => {
        progressBar.style.width = '0%';
        isProgressBarActive = false;
    }, 5000);
}


// Add event listener to the click button
document.getElementById('click-button')?.addEventListener('click', handleClick);
document.getElementById('run-button')?.addEventListener('click', runBridgeRun);
