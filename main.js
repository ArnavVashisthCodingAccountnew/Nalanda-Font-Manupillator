difference = 0;
leftWrist_x = 0;
rightWrist_x = 0;
	
function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,80);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
    function modelLoaded() {
        console.log('PoseNet Is Initialized');
    }
	function gotposes(results,error){
		if(error){
			console.error(error);
		}
		if(results.length > 0){
			console.log(results);
	
			leftWrist_x = results[0].pose.leftWrist.x;
			rightWrist_x = results[0].pose.rightWrist.x;
	
			difference = floor(leftWrist_x - rightWrist_x);
	
			console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
			console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
		}
	}










      
	function draw(){
        background("#6C91C2");
        textSize(difference);
		fill('#FFE787');
		text('Arnav', 150, 300);
	}
	