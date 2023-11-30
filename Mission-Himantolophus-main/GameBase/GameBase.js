let Map = [
    "건물 입구",
    "복도",
    "공주의 방",
    "관사 방",
    "관사장 복도",
    "숨겨진 통로 앞",
    "숨겨진 통로 복도",
    "숨겨진 통로 출구"
]

let items = []; // 게임에서 획득한 아이템을 저장하는 배열

// 아이템 추가 함수
function addItem(itemName) {
    if (itemImages[itemName]) { // 아이템에 해당하는 이미지가 있는지 확인
        let img = document.createElement('img');
        img.src = itemImages[itemName]; // 이미지 경로 설정
        img.alt = itemName; // 대체 텍스트로 아이템 이름 설정
        img.classList.add('item-image'); // CSS 스타일을 적용하기 위한 클래스 추가

        document.getElementById('Slot').appendChild(img); // 이미지를 Slot에 추가
    }
}
let itemImages = {
    //아이템관련 js 필요
};

// SlotInfo 업데이트 함수
function updateSlotInfo() {
    let slotText = items.join(', '); // 배열의 모든 아이템을 문자열로 변환
    document.getElementById('Slot').innerText = slotText;
}

// Message 업데이트 함수
function updateMessage(newMessage) {
    document.getElementById('Message').innerText = newMessage;
}

// 오브젝트 클릭 시 메시지 설정
function onObjectClick(objectName) {
    let objectMessage = objectName + "을(를) 클릭했습니다.";
    updateMessage(objectMessage);
}

