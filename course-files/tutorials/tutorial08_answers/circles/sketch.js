function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    // fill('#ad0e0e');
    noFill();

    // exercise 1:
    let counter = 0;
    while(counter < 5) {
        circle(100, 200 + 50 * counter, 50);
        ++counter;
    }

    // exercise 2:
    let width = 200;
    while(width >= 50) {
        circle(300, 100, width);
        width = width - 50;
    }

    // exercise 3:
    width = 300;
    let centerY = 150;
    while (width >= 0) {
        circle(600, centerY, width);
        width = width - 30;
        centerY = centerY - 15;
    }


    /***********************************/
    /* Exercise 4-6 are a little more  */
    /* complicated. Just take a look   */
    /***********************************/

    // exercise 4:
    let w = 80;
    let inc = 4;
    counter = w;
    while (counter > 0) {
        circle(300, 450+counter, counter);
        counter -= inc;
    }

    counter = w
    while (counter > 0) {
        circle(300, 450-counter, counter);
        counter -= inc;
    }

    counter = w
    while (counter > 0) {
        circle(300+counter, 450, counter);
        counter -= inc;
    }

    counter = w
    while (counter > 0) {
        circle(300-counter, 450, counter);
        counter -= inc;
    }


    // exercise 5:
    let i = 0;
    let centerX = 550;
    centerY = 550;
    let distanceFromCenter = 60;
    let circleRadius = 20;
    numCircles = 20
    while (i < numCircles) {
        //calculate new position of x and y
        radians = 360 / numCircles * i * (Math.PI / 180);
        dy = distanceFromCenter * Math.sin(radians);
        dx = distanceFromCenter * Math.cos(radians);
        x = centerX + dx;
        y = centerY - dy;
        circle(x, y, circleRadius * 2); 
        i++;
    }


     // exercise 6:
     i = 0;
     centerX = 850;
     centerY = 450;
     distanceFromCenter = 50;
     circleRadius = 100;
     numCircles = 30
     while (i < numCircles) {
         //calculate new position of x and y
         radians = 360 / numCircles * i * (Math.PI / 180);
         dy = distanceFromCenter * Math.sin(radians);
         dx = distanceFromCenter * Math.cos(radians);
         x = centerX + dx;
         y = centerY - dy;
         circle(x, y, circleRadius * 2); 
         i++;
     }


    drawGrid(canvasWidth, canvasHeight);
}
