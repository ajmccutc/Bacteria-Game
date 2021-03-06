/**
 *   Created by Antoine Stavro
 *   Due Date: Oct 27, 2016
 */
//This Alert is at the beginning of the games
alert("Objective:\n Use the mouse to click on the bacteria growing on the circumference of the circle.\nThere is about 10 different types of bacteria, each with a different color");
var canvas;
var gl;
var tri;
//var webGL;
//webGL = gl.getContext('experimental-webgl');
//alert(print_r(your array));  //call it like this
function print_r(arr, level) {
    var dumped_text = "";
    if (!level) level = 0;
    //The padding given at the beginning of the line.
    var level_padding = "";
    for (var j = 0; j < level + 1; j++) level_padding += "    ";
    if (typeof (arr) == 'object') { //Array/Hashes/Objects 
        for (var item in arr) {
            var value = arr[item];
            if (typeof (value) == 'object') { //If it is an array,
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += print_r(value, level + 1);
            }
            else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    }
    else { //Stings/Chars/Numbers etc.
        dumped_text = "===>" + arr + "<===(" + typeof (arr) + ")";
    }
    return dumped_text;
}
//Global Variables 
var index = 0;
var pointsArray = [];
var normalsArray = [];
var near = -10;
var far = 10;
var radius = 1.5;
var theta = 0.0;
var phi = 0.0;
var dr = 5.0 * Math.PI / 180.0;
var left = -3.0;
var right = 3.0;
var ytop = 3.0;
var bottom = -3.0;
var va = vec4(0.0, 0.0, -1.0, 1);
var vb = vec4(0.0, 0.942809, 0.333333, 1);
var vc = vec4(-0.816497, -0.471405, 0.333333, 1);
var vd = vec4(0.816497, -0.471405, 0.333333, 1);
var lightPosition = vec4(0.0, 0.0, 0.0, 0.0);
var lightAmbient = vec4(0.0, 0.8, 0.8, 0.0);
var lightDiffuse = vec4(0.0, 0.0, 0.0, 0.0);
var lightSpecular = vec4(0.0, 0.0, 0.0, 0.0);
var materialAmbient = vec4(1.0, 0.0, 1.0, 1.0);
var materialDiffuse = vec4(1.0, 0.8, 0.0, 1.0);
var materialSpecular = vec4(1.0, 0.8, 0.0, 1.0);
var materialShininess = 100.0;
var ctm;
var ambientColor, diffuseColor, specularColor;
var modelViewMatrix, projectionMatrix;
var modelViewMatrixLoc, projectionMatrixLoc;
var eye;
var at = vec3(0.0, 0.0, 0.0);
var up = vec3(0.0, 1.0, 0.0);
//Built in function from the textbook
function triangle(a, b, c) {
    //NORE: normal is stored as a point, fourth e;lement is 1, //should be 0 (MB June 30)
    //alert(print_r(a));  
    // setting normals to have last element 0
    n1 = vec4(a)
    n2 = vec4(b)
    n3 = vec4(c)
    n1[3] = 0.0;
    n2[3] = 0.0;
    n3[3] = 0.0;
    //alert(print_r(n1)); 
    normalsArray.push(n1);
    normalsArray.push(n2);
    normalsArray.push(n3);
    pointsArray.push(a);
    pointsArray.push(b);
    pointsArray.push(c);
    index += 3;
}

function divideTriangle(a, b, c, count) {
    if (count > 0) {
        var ab = mix(a, b, 0.5);
        var ac = mix(a, c, 0.5);
        var bc = mix(b, c, 0.5);
        ab = normalize(ab, true);
        ac = normalize(ac, true);
        bc = normalize(bc, true);
        divideTriangle(a, ab, ac, count - 1);
        divideTriangle(ab, b, bc, count - 1);
        divideTriangle(bc, c, ac, count - 1);
        divideTriangle(ab, bc, ac, count - 1);
    }
    else {
        triangle(a, b, c);
    }
}
//Draw the circle, 3D triangle function
function tetrahedron(a, b, c, d, n) {
    divideTriangle(a, b, c, n);
    divideTriangle(d, c, b, n);
    divideTriangle(a, d, b, n);
    divideTriangle(a, c, d, n);
}


window.onload = function init() {
    canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    gl.enable(gl.DEPTH_TEST);
    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);
    ambientProduct = mult(lightAmbient, materialAmbient); /////////////////
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular); /////////////
    tetrahedron(va, vb, vc, vd, 5);
    var nBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW);
    var vNormal = gl.getAttribLocation(program, "vNormal");
    gl.vertexAttribPointer(vNormal, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vNormal);
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);
    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);
    modelViewMatrixLoc = gl.getUniformLocation(program, "modelViewMatrix");
    projectionMatrixLoc = gl.getUniformLocation(program, "projectionMatrix");
    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    
    document.getElementById("Button0").onclick = function () { //START GAME BUTTON ACTIONS
        //var webGL;
        //webGL = gl.getContext('experimental-webgl');
        var vertices = [
            0.0, 0.0
            , 1.0, 4.0
            , -1.0, 4.0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        // STEP 2 : VERTEX SHADER
        var vs = 'attribute vec2 pos1; void main() { gl_Position = vec4(pos1, 0, 10); }';
        // STEP 3 : FRAGMENT SHADER
        var fs = 'precision mediump float; void main() { gl_FragColor = vec4(0.8,1,0,1); }'; // Determining color of figure (rgba format)               //after click circle colour
        // CREATING A PROGRAM
        var program = createProgram(vs, fs);
        // USING A PROGRAM
        gl.useProgram(program);
        program.vertexPosAttrib = gl.getAttribLocation(program, 'pos1');
        gl.enableVertexAttribArray(program.vertexPosAttrib);
        gl.vertexAttribPointer(program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLE, 0, 3); // TRIANGLE_FAN
        function createProgram(vstr, fstr) {
            var program = gl.createProgram();
            var vshader = createShader(vstr, gl.VERTEX_SHADER);
            var fshader = createShader(fstr, gl.FRAGMENT_SHADER);
            gl.attachShader(program, vshader);
            gl.attachShader(program, fshader);
            gl.linkProgram(program);
            return program;
        }

        function createShader(str, type) {
            var shader = gl.createShader(type);
            gl.shaderSource(shader, str);
            gl.compileShader(shader);
            return shader;
        }
        //render();
    };
    gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"), flatten(specularProduct));
    gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"), flatten(lightPosition));
    gl.uniform1f(gl.getUniformLocation(program, "shininess"), materialShininess);
    render();
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    eye = vec3(radius * Math.sin(theta) * Math.cos(phi), radius * Math.sin(theta) * Math.sin(phi), radius * Math.cos(theta));
    modelViewMatrix = lookAt(eye, at, up);
    projectionMatrix = ortho(left, right, bottom, ytop, near, far);
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix));
    gl.uniformMatrix4fv(projectionMatrixLoc, false, flatten(projectionMatrix));
    //This draws the fan_out triangle for bacteria
    //gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);// TRIANGLE_FAN
    //This also draws the circle before you click
    //the for loop draws the circle 
    for (var i = 0; i < index; i += 5) //blue circle
        gl.drawArrays(gl.TRIANGLES, i, 3);
    //recursive call to itself 
    window.requestAnimFrame(render);
}