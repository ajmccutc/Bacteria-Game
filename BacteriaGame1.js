
alert("Objective:\n Use the mouse to click on the bacteria growing on the circumference of the circle.\nThere is about 10 different types of bacteria, each with a different color");
var canvas;
var gl;
var tri;



var p= [x,y];
var n =p.length;
var p = new Float32Array([x,y]);
p[0]=x;
p[1]=y;

var a = vec2(1.0,2.0);
var b =vec2(2,1);
var c = vec2(0,0);

var lightPosition = vec4(0.0, 0.0, 0.0, 0.0 );
var lightAmbient = vec4(0.0, 0.8, 0.8, 0.0 );
var lightDiffuse = vec4( 0.0, 0.0, 0.0, 0.0 );
var lightSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );

var materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0 );
var materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
var materialShininess = 100.0;

var ctm;
var ambientColor, diffuseColor, specularColor;

var modelViewMatrix, projectionMatrix;
var modelViewMatrixLoc, projectionMatrixLoc;
var eye;
var at = vec3(0.0, 0.0, 0.0);
var up = vec3(0.0, 1.0, 0.0);
gl.viewport(x,y,w,h);
gl.clearColor(1.0,1.0,1.0,1.0);


var vertices = [
    vec2(-1.0,-1.0);
    vec2(1.0,-1.0);
    vec2(0.0,1.0);
]
const numPoints = 5000;

onload = myFunction;
var vertices2=[
    vec2(-1,-1);
    vec2(0,0);
    vec2(0,-1);
]
var u=add(vertices[0],vertices[1]);
var u=add(vertices[0],vertices[2]);

for (var i=0;points.length < numpoints; i++){
    p=add(points[i],vertices[j]);
    points.push(p)
}

gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);
render();


function render() {
    
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    eye = vec3(radius*Math.sin(theta)*Math.cos(phi), 
        radius*Math.sin(theta)*Math.sin(phi), radius*Math.cos(theta));

    modelViewMatrix = lookAt(eye, at , up);
    projectionMatrix = ortho(left, right, bottom, ytop, near, far);
            
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix) );
    gl.uniformMatrix4fv(projectionMatrixLoc, false, flatten(projectionMatrix) );

     gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);// TRIANGLE_FAN

    for( var i=0; i<index; i+=5)                //blue circle
        gl.drawArrays( gl.TRIANGLES, i, 3 );


    window.requestAnimFrame(render);
}
