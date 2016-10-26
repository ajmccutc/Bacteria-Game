//fan variables
var xCenterOfCircle;
var yCenterOfCircle;
var centerOfCircle;
var radiusOfCircle = 0.05;
var ATTRIBUTES = 2;
var noOfFans = 80;
var anglePerFan;
var vPosition;

var click = 0; 

//empty vertices arras for use of bacteria
var verticesFirstCircle = [];
var verticesSecondCircle = [];
var verticesThreeCircle = [];
var verticesFourCircle = [];
var verticesFiveCircle = [];
var verticesSixCircle = [];
var verticesSevenCircle = [];
var verticesEightCircle = [];
var verticesNineCircle = [];
var verticesTenCircle = [];
var verticesElevenCircle = [];
var verticesTwelveCircle = [];
var verticesThirteenCircle = [];
var verticesFourteenCircle = [];
var verticesFifteenCircle = [];

//extra buffers
var bufferId;
var bufferId2;
var bufferId3;
var bufferId4;
var bufferId5;
var bufferId6;
var bufferId7;
var bufferId8;
var bufferId9;
var bufferId10;
var bufferId11;
var bufferId12;
var bufferId13;
var bufferId14;
var bufferId15;

var canvas;
var gl;

//timer
var time = 300;
var running = 0;
var secs;
var tenths;

//mouse variables
var mouseDown = false;
var lastMouseX = null;
var lastMouseY = null;
var vec2coordinates = null;
//This is an experiement to see what the colour of the object "under" the mouse is
//this is so that we can remove the x,y,z references and make it "easier" to program
var colouratmouse = null;

window.onload = function init()
{
            
           
            function startPause(){
                if(running == 0){
                    running = 1;
                    increment();
                }
            }

            function reset(){
                running = 0;
                time = 300;
                document.getElementById("output").innerHTML = "30.0";
            }

            function increment(){
                if(running == 1){
                    setTimeout(function(){
                        time--;
                        secs = Math.floor(time/10);
                        tenths = time % 10;
                        document.getElementById("output").innerHTML = secs + ":" + tenths;
                        
                        popup();
                        increment();
                    },100);
                }
            }

            function popup(){
                if(secs == 29)
                {
                    bufferId2 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesSecondCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 27)
                {
                    bufferId3 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId3 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesThreeCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 25)
                {
                    bufferId4 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId4 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesFourCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 23)
                {
                    bufferId5 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId5 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesFiveCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 21)
                {
                    bufferId6 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId6 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesSixCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 19)
                {
                    bufferId7 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId7 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesSevenCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 17)
                {
                    bufferId8 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId8 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesEightCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 15)
                {
                    bufferId9 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId9 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesNineCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 13)
                {
                    bufferId10 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId10 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesTenCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 11)
                {
                    bufferId11 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId11 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesElevenCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 9)
                {
                    bufferId12 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId12 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesTwelveCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 8)
                {
                    bufferId13 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId13 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesThirteenCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 7)
                {
                    bufferId14 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId14 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesFourteenCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == 5)
                {
                    bufferId15 = gl.createBuffer();
                    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId15 );
                    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesFifteenCircle), gl.STATIC_DRAW );

                    vPosition = gl.getAttribLocation( program, "vPosition" );
                    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                    gl.enableVertexAttribArray( vPosition );

                    render();
                }
                else if(secs == -1)
                {
                    alert("You Win");
                    reset();
                }
        }

    canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //
    //  Configure WebGL
    //

    gl.viewport( 0.0, 0.0, canvas.width, canvas.height );
    gl.clearColor( 0.8, 0.5, 0.3, 1.0 );

    //  Load shaders and initialize attribute buffers

    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    //why so many different circle functions?
    //need to randomize once finished mouse clicking events
    firstCircle();
    secondCircle();
    thirdCircle();
    forthCircle();
    fifthCircle();
    sixCircle();
    sevenCircle();
    eightCircle();
    nineCircle();
    tenCircle();
    elevenCircle();
    twelveCircle();
    thirteenCircle();
    fourteenCircle();
    fifthteenCircle();

    //This is the "mouse click" event for the start button
    document.getElementById("start").onclick =  function(){
    
        startPause();
        
    };

    // Load the data into the GPU

    //------First Circle--------
    bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(verticesFirstCircle), gl.STATIC_DRAW );

    vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    
    
    
    
    
    
    //where the mouse event stuff will happen?
    // set up some sample squares
    //make an array of x,y coordinates for center of circles
    
    document.getElementById("gl-canvas").onclick = function(){
        
            lastMouseX = event.clientX;
            lastMouseY = event.clientY;
            vertexMouse = vec2(lastMouseX,lastMouseY);
            for (var i = 0; i<verticesEightCircle.length;i++){
                 //only checks if mouse clicks on vertices
                if (verticesEightCircle[i]==vertexMouse ){
                    
                  
            }
                
        }
    }
    
    render();
}


function firstCircle()
{
    xCenterOfCircle = 0.0;
    yCenterOfCircle = 0.0;
    centerOfCircle = vec2(0.0, 0.0);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesFirstCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.5;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.5;

        var point = vec2(xCoordinate, yCoordinate);
        verticesFirstCircle.push(point);
   }
}

function secondCircle()
{
    xCenterOfCircle = 0.55;
    yCenterOfCircle = 0.0;
    centerOfCircle = vec2(0.55, 0.0);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesSecondCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesSecondCircle.push(point);
   }
    
}

function thirdCircle()
{
    xCenterOfCircle = 0.0;
    yCenterOfCircle = 0.55;
    centerOfCircle = vec2(0.0, 0.55);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesThreeCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesThreeCircle.push(point);
   }
}

function forthCircle()
{
    xCenterOfCircle = 0.0;
    yCenterOfCircle = -0.55;
    centerOfCircle = vec2(0.0, -0.55);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesFourCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesFourCircle.push(point);
   }
}

function fifthCircle()
{
    xCenterOfCircle = -0.55;
    yCenterOfCircle = 0.0;
    centerOfCircle = vec2(-0.55, 0.0);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesFiveCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesFiveCircle.push(point);
   }
}

function sixCircle()
{
    xCenterOfCircle = 0.39;
    yCenterOfCircle = 0.39;
    centerOfCircle = vec2(0.39, 0.39);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesSixCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesSixCircle.push(point);
   }
}

function sevenCircle()
{
    xCenterOfCircle = 0.39;
    yCenterOfCircle = -0.39;
    centerOfCircle = vec2(0.39, -0.39);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesSevenCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesSevenCircle.push(point);
   }
}

function eightCircle()
{
    xCenterOfCircle = -0.39;
    yCenterOfCircle = 0.39;
    centerOfCircle = vec2(-0.39, 0.39);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesEightCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesEightCircle.push(point);
   }
}

function nineCircle()
{
    xCenterOfCircle = -0.39;
    yCenterOfCircle = -0.39;
    centerOfCircle = vec2(-0.39, -0.39);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesNineCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesNineCircle.push(point);
   }
}

function tenCircle()
{
    xCenterOfCircle = 0.51;
    yCenterOfCircle = 0.21;
    centerOfCircle = vec2(0.51, 0.21);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesTenCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesTenCircle.push(point);
   }
}

function elevenCircle()
{
    xCenterOfCircle = 0.21;
    yCenterOfCircle = 0.51;
    centerOfCircle = vec2(0.21, 0.51);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesElevenCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesElevenCircle.push(point);
   }
}

function twelveCircle()
{
    xCenterOfCircle = -0.21;
    yCenterOfCircle = 0.51;
    centerOfCircle = vec2(-0.21, 0.51);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesTwelveCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesTwelveCircle.push(point);
   }
}

function thirteenCircle()
{
    xCenterOfCircle = -0.51;
    yCenterOfCircle = 0.21;
    centerOfCircle = vec2(-0.51, 0.21);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesThirteenCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesThirteenCircle.push(point);
   }
}

function fourteenCircle()
{
    xCenterOfCircle = -0.21;
    yCenterOfCircle = -0.51;
    centerOfCircle = vec2(-0.21, -0.51);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesFourteenCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesFourteenCircle.push(point);
   }
}
function fifthteenCircle()
{
    xCenterOfCircle = 0.21;
    yCenterOfCircle = -0.51;
    centerOfCircle = vec2(0.21, -0.51);
    anglePerFan = (2*Math.PI) / noOfFans;
    verticesFifteenCircle = [centerOfCircle];

    for(var i = 0; i <= noOfFans; i++)
    {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i+1);
        
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.05;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.05;

        var point = vec2(xCoordinate, yCoordinate);
        verticesFifteenCircle.push(point);
   }
}

//buffers in the render?


//add if statements to circles so that if alive then drwa otherwise don't draw
function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesFirstCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesSecondCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId3 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesThreeCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId4 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesFourCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId5 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesFiveCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId6 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesSixCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId7 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesSevenCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId8 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesEightCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId9 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesNineCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId10 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesTenCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId11 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesElevenCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId12 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesTwelveCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId13 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesThirteenCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId14 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesFourteenCircle.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId15 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesFifteenCircle.length );

}