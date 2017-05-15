// Create a function named 'max' that takes two parameters displays the
// parameter with the largest value.

function max(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

max(3,2); // should display 3
max(2,3); // should display 3
max(4,1); // should display 4
max(0,-1); // should display 0
