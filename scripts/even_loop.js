/***************************************************************************************************************************************\
 * This code animates the flowchart of a program for finding the sum of all even number within a certain range of given number by the  *
 * user.                                                                                                                               *
\***************************************************************************************************************************************/

/**        GLOBAL VARIABLE GLOSSARY :-
 *
 * pointSpeed -> Stores the speed with which the line will be created.
 *
 * pointX, pointY -> Variables that contains the coordinate values that will be used for creation of each shape including the connect lines.
 *
 * valueX, valueY -> Variables for catching the extereme values given by the 'process_box()', 'data_box()' and 'decision_box()' as
 *                   specified by 'extreme' argument of each of those function.
 *
 * limit -> limitter that wll control the connect line creation.
 *
 * decision1_valueXin, decision1_valueYin -> Variables for catching the the left extreme point coordinates of the first decision box
 *
 * decision1_valueXout, decision1_valueYout -> Variables for catching the the right extreme point coordinates of the first decision box
 *
 * decision2_valueX, decision2_valueY -> Variables for catching the right extreme point coordinates of the second decision box
 *
 * process_valueX, process_valueY -> Variables for catching the right extreme point coordinates of the third process box
 *
 * block -> Decides when the block has to be enabled
 */
var pointSpeed = 1;
var pointX, pointY;
var valueX, valueY;
var limit;
var decision1_valueXin,
  decision1_valueYin,
  decision1_valueXout,
  decision1_valueYout;
var decision2_valueX, decision2_valueY;
var process_valueX, process_valueY;
var block = 1;

function setup() {
  createCanvas(1200, 1000);
  background(0);

  // Starting point defined for the starting shape (start box) creation
  pointX = 600;
  pointY = 50;
}

function draw() {
  /**        LOCAL VARIABLE GLOSSARY :-
   *
   * lineWidth -> defines how much thick the connect lines would be
   *
   * lineCreationSpeed -> defines how faster the connect lines would get created
   *
   * extent_circle -> defines the extent of the start and stop box
   *
   * extent_diamond -> defines the extent of the decision box
   */
  let lineWidth = 5;
  let lineCreationSpeed = 1;
  let extent_circle = 80;
  let extent_diamond = 100;

  if (block == 1) {
    // Start box creation
    pointY = start_end_box(pointX, pointY, extent_circle, 3);

    block++;

    // Setting the limit for the connect line creation from this shape
    limit = pointY + 50;
  }

  if (block == 2) {
    // Connect line creation from start box to process box 1
    strokeWeight(lineWidth);

    point(pointX, pointY);
    pointY += lineCreationSpeed;

    if (pointY > limit) {
      block++;
    }
  }

  if (block == 3) {
    // Process box 1 creation
    process_box(pointX - 50, pointY, 100, 50, 3);

    pointX = valueX;
    pointY = valueY;

    block++;

    // Setting the limit for connect line creation from this shape
    limit = pointY + 50;
  }

  if (block == 4) {
    // Connect line creation from process box 1 to data box
    strokeWeight(lineWidth);

    point(pointX, pointY);
    pointY += lineCreationSpeed;

    if (pointY > limit) {
      block++;
    }
  }

  if (block == 5) {
    pointY = limit;

    data_box(pointX - 80, pointY, 160, 50, 3);

    pointX = valueX;
    pointY = valueY;

    block++;

    limit = pointY;
  }

  if (block == 6) {
    strokeWeight(lineWidth);

    point(pointX, limit);
    limit += lineCreationSpeed;

    if (limit > pointY + 50) {
      block++;
    }
  }

  if (block == 7) {
    // decision box 1
    pointY = limit;

    decision_box(pointX, pointY, extent_diamond, 2);
    decision1_valueXout = valueX;
    decision1_valueYout = valueY;

    decision_box(pointX, pointY, extent_diamond, 4);
    decision1_valueXin = valueX;
    decision1_valueYin = valueY;

    decision_box(pointX, pointY, extent_diamond, 3);

    pointX = valueX;
    pointY = valueY;

    block++;

    limit = pointY;
  }

  if (block == 8) {
    strokeWeight(lineWidth);

    point(pointX, limit);
    limit += lineCreationSpeed;

    if (limit > pointY + 50) {
      block++;
    }
  }

  if (block == 9) {
    // decision box 2
    pointY = limit;

    decision_box(pointX, pointY, extent_diamond, 2);
    decision2_valueX = valueX;
    decision2_valueY = valueY;

    decision_box(pointX, pointY, extent_diamond, 3);

    pointX = valueX;
    pointY = valueY;

    block++;

    limit = pointY;
  }

  if (block == 10) {
    strokeWeight(lineWidth);

    point(pointX, limit);
    limit += lineCreationSpeed;

    if (limit > pointY + 50) {
      block++;
    }
  }

  if (block == 11) {
    strokeWeight(lineWidth);

    point(pointX, limit);
    limit += lineCreationSpeed;

    if (limit > pointY + 50) {
      block++;
    }
  }

  if (block == 12) {
    pointY = limit;

    process_box(pointX - 50, pointY, 100, 50, 3);

    pointX = valueX;
    pointY = valueY;

    block++;

    limit = pointY;
  }

  if (block == 13) {
    strokeWeight(lineWidth);

    point(pointX, limit);
    limit += lineCreationSpeed;

    if (limit > pointY + 50) {
      block++;
    }
  }

  if (block == 14) {
    pointY = limit;

    process_box(pointX - 50, pointY, 100, 50, 2);
    process_valueX = valueX;
    process_valueY = valueY;

    process_box(pointX - 50, pointY, 100, 50, 4);

    pointX = decision2_valueX;
    pointY = decision2_valueY;

    block++;

    limit = pointX;
  }

  if (block == 15) {
    strokeWeight(lineWidth);

    point(limit, pointY);
    limit += lineCreationSpeed;

    if (limit > pointX + 30) {
      block++;
      pointX = limit;
      limit = pointY;
    }
  }

  if (block == 16) {
    strokeWeight(lineWidth);

    point(pointX, limit);
    limit += lineCreationSpeed;

    if (limit > process_valueY) {
      block++;
      pointY = limit;
      limit = pointX;
    }
  }

  if (block == 17) {
    lineCreationSpeed = -lineCreationSpeed;

    strokeWeight(lineWidth);

    point(limit, pointY);
    limit += lineCreationSpeed;

    if (limit < process_valueX) {
      block++;
      pointX = valueX;
      pointY = valueY;
      limit = pointX;
    }
  }

  if (block == 18) {
    lineCreationSpeed = -lineCreationSpeed;

    strokeWeight(lineWidth);

    point(limit, pointY);
    limit += lineCreationSpeed;

    if (limit < pointX - 30) {
      block++;
      pointX = limit;
      limit = pointY;
    }
  }

  if (block == 19) {
    lineCreationSpeed = -lineCreationSpeed;

    strokeWeight(lineWidth);

    point(pointX, limit);
    limit += lineCreationSpeed;

    if (limit < decision1_valueYin) {
      block++;
      pointY = limit;
      limit = pointX;
    }
  }

  if (block == 20) {
    strokeWeight(lineWidth);

    point(limit, pointY);
    limit += lineCreationSpeed;

    if (limit > decision1_valueXin) {
      block++;
      pointX = decision1_valueXout;
      pointY = decision1_valueYout;
      limit = pointX;
    }
  }

  if (block == 21) {
    strokeWeight(lineWidth);

    point(limit, pointY);
    limit += lineCreationSpeed;

    if (limit > pointX + 50) {
      block++;
    }
  }

  if (block == 22) {
    pointX = limit;

    output_box(pointX, pointY - 25, 100, 50, 2);

    pointX = valueX;
    pointY = valueY;

    block++;

    limit = pointX;
  }

  if (block == 23) {
    strokeWeight(lineWidth);

    point(limit, pointY);
    limit += lineCreationSpeed;

    if (limit > pointX + 50) {
      block++;
    }
  }

  if (block == 24) {
    pointX = limit;

    start_end_box(pointX + 40, pointY, 80, 0);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////---------------------------------------------  FUNCTIONS SECTION --------------------------------------------------------////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***************************************************************************************************************************************\
 * 1. Function name :- decision_box                                                                                                    *
 *                                                                                                                                     *
 * 2. Arguments or Parameters that the function takes :-                                                                               *
 *                                   a.) x -> contains the x-coordinate value of the top point of the box                              *
 *                                   b.) y -> contains the y-coordinate value of the top point of the box                              *
 *                                   c.) extent -> states how much the shape will cover over all of the four axis                      *
 *                                   d.) extreme -> Stores the option for accessing one of the 4 extremes of the box                   *
 *                                                                                                                                     *
 * 3. Entity that the function returns :- This function does not returns any sort of value but modify the value of two global          *
 *                  variables that are meant to store the co-ordinate value of a extreme as stated in the 'extreme' argument of the    *
 *                  function. Here the value returned is the value of only that axis that has changed after spanning the space for the *
 *                  box.                                                                                                               *
 *                      option 1 -> Gives top extreme mid point coordinate values                                                      *
 *                      option 2 -> Gives right extreme mid point coordinate values                                                    *
 *                      option 3 -> Gives bottom extreme mid point coordinate values                                                   *
 *                      option 4 -> Gives left extreme mid point coordinate values                                                     *
 *                      option 0 -> Gives 0 as we donot want any extreme                                                               * 
 *                                                                                                                                     *
 * 4. Activity that the function performs :- It draws a decision box and gives the point value of one of the four extremes as stated   *
 *                  in the 4th argument to the function.                                                                               * 
\***************************************************************************************************************************************/
function decision_box(x, y, extent, extreme) {
  strokeWeight(1);
  stroke(255);

  quad(
    x,
    y,
    x + extent / 2,
    y + extent / 2,
    x,
    y + extent,
    x - extent / 2,
    y + extent / 2
  );

  if (extreme == 4) {
    valueX = x - extent / 2;
    valueY = y + extent / 2;
  } else if (extreme == 3) {
    valueX = x;
    valueY = y + extent;
  } else if (extreme == 2) {
    valueX = x + extent / 2;
    valueY = y + extent / 2;
  } else if (extreme == 1) {
    valueX = x;
    valueY = y;
  } else {
    valueX = valueY = 0;
  }
}

/***************************************************************************************************************************************\
 * 1. Function name :- data_box                                                                                                        *
 *                                                                                                                                     *
 * 2. Arguments or Parameters that the function takes :-                                                                               *
 *                                   a.) x -> contains the x-coordinate value of the top left corner of the box                        *
 *                                   b.) y -> contains the y-coordinate value of the top left corner of the box                        *
 *                                   c.) breadth -> Defines how much the box would be wide                                             *
 *                                   d.) length -> Defines how long the box would be                                                   *
 *                                   e.) extreme -> Stores the option for accessing one of the 4 extremes of the box                   *
 *                                                                                                                                     *
 * 3. Entity that the function returns :- This function does not returns any sort of value but modify the value of two global          *
 *                  variables that are meant to store the co-ordinate value of a extreme as stated in the 'extreme' argument of the    *
 *                  function. Here the value returned is the value of only that axis that has changed after spanning the space for the *
 *                  box.                                                                                                               *
 *                      option 1 -> Gives top extreme mid point coordinate values                                                      *
 *                      option 2 -> Gives right extreme mid point coordinate values                                                    *
 *                      option 3 -> Gives bottom extreme mid point coordinate values                                                   *
 *                      option 4 -> Gives left extreme mid point coordinate values                                                     *
 *                      option 0 -> Gives 0 as we donot want any extreme                                                               * 
 *                                                                                                                                     *
 * 4. Activity that the function performs :- It draws a decision box and gives the point value of one of the four extremes as stated   *
 *                  in the 5th argument to the function.                                                                               * 
\***************************************************************************************************************************************/
function data_box(x, y, breadth, length, extreme) {
  strokeWeight(1);
  stroke(255);

  var tilt = 30; // Defines how much the data box will be tilted in the structure

  quad(
    x,
    y,
    x + breadth,
    y,
    x + breadth - tilt,
    y + length,
    x - tilt,
    y + length
  );

  if (extreme == 4) {
    valueX = x;
    valueY = y + length / 2;
  } else if (extreme == 3) {
    valueX = x + breadth / 2;
    valueY = y + length;
  } else if (extreme == 2) {
    valueX = x + breadth;
    valueY = y + length / 2;
  } else if (extreme == 1) {
    valueX = x + breadth / 2;
    valueY = y;
  } else {
    valueX = valueY = 0;
  }
}

/***************************************************************************************************************************************\
 * 1. Function name :- process_box                                                                                                     *
 *                                                                                                                                     *
 * 2. Arguments or Parameters that the function takes :-                                                                               *
 *                                   a.) x -> contains the x-coordinate value of the top left corner of the box                        *
 *                                   b.) y -> contains the y-coordinate value of the top left corner of the box                        *
 *                                   c.) breadth -> Defines how much the box would be wide                                             *
 *                                   d.) length -> Defines how long the box would be                                                   *
 *                                   e.) extreme -> Stores the option for accessing one of the 4 extremes of the box                   *
 *                                                                                                                                     *
 * 3. Entity that the function returns :- This function does not returns any sort of value but modify the value of two global          *
 *                  variables that are meant to store the co-ordinate value of a extreme as stated in the 'extreme' argument of the    *
 *                  function. Here the value returned is the value of only that axis that has changed after spanning the space for the *
 *                  box.                                                                                                               *
 *                      option 1 -> Gives top extreme mid point coordinate values                                                      *
 *                      option 2 -> Gives right extreme mid point coordinate values                                                    *
 *                      option 3 -> Gives bottom extreme mid point coordinate values                                                   *
 *                      option 4 -> Gives left extreme mid point coordinate values                                                     *
 *                      option 0 -> Gives 0 as we donot want any extreme                                                               * 
 *                                                                                                                                     *
 * 4. Activity that the function performs :- It draws a process box and gives the point value of one of the four extremes as stated in *
 *                  the 5th argument to the function.                                                                                  * 
\***************************************************************************************************************************************/
function process_box(x, y, breadth, length, extreme) {
  strokeWeight(1);
  stroke(255);
  rect(x, y, breadth, length, 10);

  if (extreme == 4) {
    valueX = x;
    valueY = y + length / 2;
  } else if (extreme == 3) {
    valueX = x + breadth / 2;
    valueY = y + length;
  } else if (extreme == 2) {
    valueX = x + breadth;
    valueY = y + length / 2;
  } else if (extreme == 1) {
    valueX = x + breadth / 2;
    valueY = y;
  } else {
    valueX = valueY = 0;
  }
}

/***************************************************************************************************************************************\
 * 1. Function name :- start_end_box                                                                                                   *
 *                                                                                                                                     *
 * 2. Arguments or Parameters that the function takes :-                                                                               *
 *                                   a.) x -> contains the x-coordinate value of the center where the box has to be drawn              *
 *                                   b.) y -> contains the y-coordinate value of the center where the box has to be drawn              *
 *                                   c.) extent -> states how much the shape will cover over all of the four axis                      *
 *                                   d.) extreme -> Stores the option for accessing one of the 4 extremes of the box                   *
 *                                                                                                                                     *
 * 3. Entity that the function returns :- co-ordinate value of a extreme as stated in the 'extreme' argument of the function. Here     *
 *                  the value returned is the value of only that axis that has changed after spanning the space for the box.           *
 *                      option 1 -> Gives top extreme, the y-coordinate value as the x-coordinate is unchanged here                    *
 *                      option 2 -> Gives right extreme, the x-coordinate value as the y-coordinate is unchanged here                  *
 *                      option 3 -> Gives bottom extreme, the y-coordinate value as the x-coordinate is unchanged here                 *
 *                      option 4 -> Gives left extreme, the x-coordinate value as the y-coordinate is unchanged here                   *
 *                      option 0 -> Gives 0 as we donot want any extreme                                                               * 
 *                                                                                                                                     *
 * 4. Activity that the function performs :- It draws a start/end box and returns the point value of one of the four extremes as       *
 *                   stated in the 3rd argument to the function.                                                                       * 
\***************************************************************************************************************************************/
function start_end_box(x, y, extent, extreme) {
  strokeWeight(1);
  stroke(255);
  circle(x, y, extent);

  if (extreme == 4) {
    return x - extent / 2;
  } else if (extreme == 3) {
    return y + extent / 2;
  } else if (extreme == 2) {
    return x + extent / 2;
  } else if (extreme == 1) {
    return y - extent / 2;
  } else {
    return 0;
  }
}

/***************************************************************************************************************************************\
 * 1. Function name :- output_box                                                                                                      *
 *                                                                                                                                     *
 * 2. Arguments or Parameters that the function takes :-                                                                               *
 *                                   a.) x -> contains the x-coordinate value of the top left corner of the box                        *
 *                                   b.) y -> contains the y-coordinate value of the top left corner of the box                        *
 *                                   c.) breadth -> Defines how much the box would be wide                                             *
 *                                   d.) length -> Defines how long the box would be                                                   *
 *                                   e.) extreme -> Stores the option for accessing one of the 4 extremes of the box                   *
 *                                                                                                                                     *
 * 3. Entity that the function returns :- This function does not returns any sort of value but modify the value of two global          *
 *                  variables that are meant to store the co-ordinate value of a extreme as stated in the 'extreme' argument of the    *
 *                  function. Here the value returned is the value of only that axis that has changed after spanning the space for the *
 *                  box.                                                                                                               *
 *                      option 1 -> Gives top extreme mid point coordinate values                                                      *
 *                      option 2 -> Gives right extreme mid point coordinate values                                                    *
 *                      option 3 -> Gives bottom extreme mid point coordinate values                                                   *
 *                      option 4 -> Gives left extreme mid point coordinate values                                                     *
 *                      option 0 -> Gives 0 as we donot want any extreme                                                               * 
 *                                                                                                                                     *
 * 4. Activity that the function performs :- It draws a output box and gives the point value of one of the four extremes as stated     *
 *                  in the 5th argument to the function.                                                                               * 
\***************************************************************************************************************************************/
function output_box(x, y, breadth, length, extreme) {
  strokeWeight(1);
  stroke(255);
  rect(x, y, breadth, length);

  if (extreme == 4) {
    valueX = x;
    valueY = y + length / 2;
  } else if (extreme == 3) {
    valueX = x + breadth / 2;
    valueY = y + length;
  } else if (extreme == 2) {
    valueX = x + breadth;
    valueY = y + length / 2;
  } else if (extreme == 1) {
    valueX = x + breadth / 2;
    valueY = y;
  } else {
    valueX = valueY = 0;
  }
}
