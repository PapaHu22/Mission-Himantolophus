

let door_1 = localStorage.getItem('door_1') === 'true' ? true : false;
let door_2 = localStorage.getItem('door_2') === 'true' ? true : false;
let door_4 = localStorage.getItem('door_4') === 'true' ? true : false;
let door_5 = localStorage.getItem('door_5') === 'true' ? true : false;
let exitdoor = localStorage.getItem('exitdoor') === 'true' ? true : false;

function mouseFunc(event) {
    console.log(event.clientX, event.clientY);
    
    if(door_1 && door_2 && door_4 && door_5){
        exitdoor = true;
    }
    if(event.clientX >150 && event.clientX <300
        &&event.clientY>330&&event.clientY<680){
            if(door_1 == false){
                location.href = "../puzzleMap/firstp.html";
                door_1 = true;
                localStorage.setItem('door_1', door_1.toString())
            }else{
            alert("이미 문제를 풀어 접근할 필요는 없다.");
            }
    }
    else if(event.clientX >550 && event.clientX <713
        &&event.clientY>330&&event.clientY<680){
            if(door_2 == false){
                location.href = "../puzzleMap/secondp.html";
                door_2 = true;
                localStorage.setItem('door_2', door_2.toString())
            }else{
            alert("이미 문제를 풀어 접근할 필요는 없다.");
            }
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
            
            if(door_4 == false){
                location.href = "../puzzleMap/thirdp.html";
                door_4 = true;
                localStorage.setItem('door_4', door_4.toString())
            }else{
            alert("이미 문제를 풀어 접근할 필요는 없다.");
            }
    }
    else if(event.clientX >1629 && event.clientX <1768
        &&event.clientY>330&&event.clientY<680){
            door_5 =true;
            /*
            if(door_5 == false){
                location.href = "../puzzleMap/fifthp.html";
                door_5 = true;
                localStorage.setItem('door_5', door_5.toString())
            }else{
            alert("이미 문제를 풀어 접근할 필요는 없다.");
            }
            */
    }
  }
