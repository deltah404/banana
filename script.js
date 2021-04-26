let counter = 0;

function addCounter() {
    counter++;
    document.getElementById('ticker').innerHTML = "you have " + counter + " bananas";
}