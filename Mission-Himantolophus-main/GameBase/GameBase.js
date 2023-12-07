let Map = [
    "호텔 입구",
    "복도",
    "계단",
    "11층 복도",
    "공주의 방",
    "관공서 방",
    "관공서 지하 복도",
    "숨겨진 통로 앞",
    "숨겨진 통로 복도",
    "숨겨진 통로 출구",
    "지하입구" 
]

var characterName = "반"; // 예시로 "반"으로 설정했습니다.
var characterImage = document.getElementById("CharacterImage");
var nameElement = document.getElementById("Name");

//적용 잘 안되면 버튼 바뀔때만다 fun mousevent 함수 안에 삽입
// 캐릭터에 따라 이미지 및 이름 변경
if (characterName === "반") {
    characterImage.src = "../CharImg/van.png";
} else if (characterName === "알루시아") {
    characterImage.src = "../CharImg/Q.png";
} else if (characterName === "칼릭") {
    characterImage.src = "../CharImg/T.png";
}

// 이름 변경
nameElement.textContent = characterName;

