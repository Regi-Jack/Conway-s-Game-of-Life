let arr;
let arr2;
let res = 10;
let canvas = 600;
let rows = canvas/res;


function setup() {
  createCanvas(canvas, canvas);
  arr = new Array(rows);
  arr2 = new Array(rows);
  
  for(i=0; i<rows; i+=1) {
    arr[i] = new Array(rows);
    arr2[i] = new Array(rows);
  }
  drawgrid();
}

function drawgrid() {
  for(i=0; i<rows; i+=1) 
    for(j=0; j<rows; j+=1) {
      let x = int(random(10000));
      if(x<10000/2)
        arr[i][j] = 0;
      else
        arr[i][j] = 1;
    }
}

function nextgen() {
  arr2 = arr;
  for(i=0; i<rows; i+=1) 
    for(j=0; j<rows; j+=1)
      gameoflife(i, j);
  arr = arr2;
}

function gameoflife(i, j) {
  let livecell = 0;
  if(i-1>=0)
    if(arr2[i-1][j] == 1)
      livecell+=1;
  if(i+1<rows)
    if(arr2[i+1][j] == 1)
      livecell+=1;
  if(j-1>=0) 
    if(arr2[i][j-1] == 1)
      livecell+=1;
  if(j+1<rows)
    if(arr2[i][j+1] == 1)
      livecell+=1;
  if(i-1>=0 && j-1>=0)
    if(arr2[i-1][j-1] == 1)
      livecell+=1;
  if(i-1>=0 && j+1<rows)
    if(arr2[i-1][j+1] == 1)
      livecell+=1;
  if(i+1<rows && j-1>=0)
    if(arr2[i+1][j-1] == 1)
      livecell+=1;
  if(i+1<rows && j+1<rows)
    if(arr2[i+1][j+1] == 1)
      livecell+=1;
  
  
  if(arr2[i][j] == 1)
    if(livecell<2 || livecell>3)
      arr2[i][j] = 0;
  
  if(arr2[i][j] == 0)
    if(livecell == 3)
      arr2[i][j] = 1;
  
}

function draw() {
  background(255);
  for(i=0; i<rows; i+=1) {
    for(j=0; j<rows; j+=1) {
      x = i * res;
      y = j * res;
      if(arr[i][j] == 0) {
        stroke(0);
        fill(0);
      }
      else {
        stroke(255);
        fill(0,255,0);
      }
      rect(x, y, res);
    }
  }
  nextgen();
}
