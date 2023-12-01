let door_1,door_2,door_4,door_5,exitdoor = false;


function mouseFunc(event) {
    console.log(event.clientX, event.clientY);
    
    if(door_1 && door_2 && door_4 && door_5){
        exitdoor = true;
    }
    if(event.clientX >150 && event.clientX <300
        &&event.clientY>330&&event.clientY<680){
            alert("첫번째 문");
            door_1 = true;

            /*
            if(door_1 == false){
                location.href = "../puzzletesetcode/[1].html";
            }else{
            alert("이미 문제를 풀어 접근할 필요는 없다.");
            }
            */
    }
    else if(event.clientX >550 && event.clientX <713
        &&event.clientY>330&&event.clientY<680){
            alert("2번째 문");
            door_2 =true;

            /*
            if(door_2 == false){
                location.href = "../puzzletesetcode/[2].html";
            }else{
            alert("이미 문제를 풀어 접근할 필요는 없다.");
            }
            */
    }
    else if(event.clientX >923 && event.clientX <1073
        &&event.clientY>330&&event.clientY<680){
            if(exitdoor == true){
                location.href = "../[9]숨겨진통로앞/GameBase_1.html";
            }else{
            alert("잠겨 있는 듯 하다.");
            }
    }
    else if(event.clientX >1278 && event.clientX <1422
        &&event.clientY>330&&event.clientY<680){
            alert("4번째 문");
            door_4 = true;

            /*
            if(door_4 == false){
                location.href = "../puzzletesetcode/[3].html";
            }else{
            alert("이미 문제를 풀어 접근할 필요는 없다.");
            }
            */
    }
    else if(event.clientX >1629 && event.clientX <1768
        &&event.clientY>330&&event.clientY<680){
            alert("5번째 문");
            door_5 = true;

            /*
            if(door_5 == false){
                location.href = "../puzzletesetcode/[4].html";
            }else{
            alert("이미 문제를 풀어 접근할 필요는 없다.");
            }
            */
    }
  }
