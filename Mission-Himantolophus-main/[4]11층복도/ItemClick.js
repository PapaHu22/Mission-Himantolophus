let Key_Princess = localStorage.getItem('Key_Princess') === 'true' ? true : false;


function mouseFunc(event) {
    console.log(event.clientX, event.clientY);
    if(event.clientX >1169 && event.clientX <1242
        &&event.clientY>350&&event.clientY<610){
            alert("공주 방 열쇠를 획득했다.")
            Key_Princess = true;
    }
  }

function mouseFuncRoom(event){
    if(Key_Princess == true){
        location.href='../[5]공주의방/GameBase_1.html';
    }else{
        alert("!!문이 잠겨 있다. 주변을 수색해서 열쇠를 찾아보자.");
    }
}