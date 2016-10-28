var colors = [
    vec4(0.0, 0.0, 0.0, 1.0), // black
    vec4(1.0, 0.0, 0.0, 1.0), // red
    vec4(1.0, 1.0, 0.0, 1.0), // yellow
    vec4(0.0, 1.0, 0.0, 1.0), // green
    vec4(0.0, 0.0, 1.0, 1.0), // blue
    vec4(1.0, 0.0, 1.0, 1.0), // magenta
    vec4(0.0, 1.0, 1.0, 1.0) // cyan
];
var canvas;
var gl;
var maxNumTriangles = 200;
var maxNumVertices = 3 * maxNumTriangles;
var index = 6;
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
//(arcangle, size, colour, isActive)
var square[6] = vec4();
window.onload = function init() {
    canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }
    canvas.addEventListener("mousedown", function () {
        gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
        //sets the x,y coordinate for the mouse click
        var t = vec2(2 * event.clientX / canvas.width - 1, 1.05 * (canvas.height - event.clientY) / canvas.height - 1);
        for (var i = 0; i< 6;i++){
            if (square[i][3]==true && square[i][0]
                
            }
        }
        
    });
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    //
    //  Load shaders and initialize attribute buffers
    //The remainder of the code is taken from the square.js file
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, 8 * maxNumVertices, gl.STATIC_DRAW);
    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);
    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, 16 * maxNumVertices, gl.STATIC_DRAW);
    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);
    render();
}
//taken from the previous attempt
function firstCircle() {
    xCenterOfCircle = 0.0;
    yCenterOfCircle = 0.0;
    centerOfCircle = vec2(0.0, 0.0);
    anglePerFan = (2 * Math.PI) / noOfFans;
    verticesFirstCircle = [centerOfCircle];
    for (var i = 0; i <= noOfFans; i++) {
        var index = ATTRIBUTES * i + 2;
        var angle = anglePerFan * (i + 1);
        var xCoordinate = xCenterOfCircle + Math.cos(angle) * 0.5;
        var yCoordinate = yCenterOfCircle + Math.sin(angle) * 0.5;
        var point = vec2(xCoordinate, yCoordinate);
        verticesFirstCircle.push(point);
    }
}

        
        //taken from the square.js file
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, index);
    gl.drawArrays( gl.TRIANGLE_FAN, 0, verticesFirstCircle.length );
    window.requestAnimFrame(render);
}