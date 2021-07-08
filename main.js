var video=""
object= []




status=""
function setup(){
canvas=createCanvas(500,300);
canvas.center();
video=createCapture(500,300);
video.hide()


}
function draw(){
    image(video,0,0,500,300);
    if(status !="" ){
        objectdetecter.detect(video,getresults)
        
            document.getElementById("status").innerHTML="status:detected objects";
            document.getElementById("no_of_ob").innerHTML="no of objects detected = "+object.length;
           fill("#0000ff");
           precent=floor(object[i].confidence*100);
           text(object[i].label+""+percent+"%",object[i].x,object[i].y);
           noFill();
           stroke("#0000ff");
           rect(object[i].x,object[i].y,object[i].width,object[i].length);
    }
}

function detect(){
    objectdetecter=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting objects"
}

function getresults(error,results){
  
  if(error){
      console.log(error)
  }
  
    else{
        console.log(results);
        
        fill("#0000ff");
          noFill();
           stroke("#0000ff");
           rect(results.x+10,results.y+10,results.width,results.length);

    }
}



function modelloaded(){
    console.log(modelloaded)
    
    

}