/***************************************************************************************************************************************\
 * This code demonstrates the movement of a circle. The new thing in this variation is that, when the circle hits the edge of the      *
 * screen it follows a back path to the opposite edge of the screen.                                                                   * 
\***************************************************************************************************************************************/

/**         VARIABLE GLOSSARY :-
 *
 * circleXPosition -> X-coordinate value of the defined circle
 * speed -> The speed with which the circle progresses along x-coordinate axis
 */
var circleXPosition = 100;
var speed = 10;

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  background(0, 0, 0);

  fill(255, 0, 0);
  circle(circleXPosition, 300, 200);

  circleXPosition += speed;

  if (circleXPosition < 100 || circleXPosition > 1100) {
    speed = -speed;
  }
}
