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

let Mapinfo = localStorage.getItem('Mapinfo');

if (!Mapinfo) {
  Mapinfo = 0;
}
