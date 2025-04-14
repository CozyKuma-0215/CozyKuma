<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CozyKuma</title>

  <!-- PWA 설정 -->
  <link rel="manifest" href="manifest.json" />
  <link rel="icon" href="icon-192.png" />
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />
  <meta name="theme-color" content="#ffffff" />

  <!-- SNS 공유용 OpenGraph -->
  <meta property="og:title" content="CozyKuma: 감성 음악 힐링 공간" />
  <meta property="og:description" content="자연 속에서 듣는 힐링 사운드, 숲속의 고요함과 함께하는 피아노 선율" />
  <meta property="og:image" content="https://cozykuma-0215.github.io/CozyKuma/icon-512.png" />
  <meta property="og:url" content="https://cozykuma-0215.github.io/CozyKuma/" />
  <meta name="twitter:card" content="summary_large_image" />

  <style>
    body {
      font-family: "Noto Sans KR", sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f2f4f8;
      text-align: center;
      color: #333;
    }
    h1 {
      margin-top: 80px;
      font-size: 1.8rem;
    }
    p {
      color: #555;
    }
    .button {
      margin: 20px auto;
      display: block;
      width: 80%;
      max-width: 320px;
      padding: 14px;
      background-color: #3b82f6;
      color: #fff;
      font-size: 1rem;
      border: none;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }
    .button:hover {
      background-color: #2563eb;
    }
    .modal {
      display: none;
      position: fixed;
      z-index: 10;
      padding-top: 100px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      background-color: #fff;
      margin: auto;
      padding: 20px;
      border-radius: 12px;
      width: 80%;
      max-width: 500px;
    }
    .close {
      color: #333;
      float: right;
      font-size: 1.2rem;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>🎵 CozyKuma: 감성 음악 힐링 공간 🎵</h1>
  <p>이 페이지를 홈 화면에 추가하면 앱처럼 실행됩니다 📱</p>

  <button class="button" onclick="showModal('prompt')">📌 오늘의 프롬프트 보기</button>
  <button class="button" onclick="showModal('music')">🎵 음악 프롬프트 보기</button>
  <button class="button" onclick="showModal('fonttag')">🖋️ 폰트 + 해시태그 추천</button>

  <!-- 모달 템플릿 -->
  <div id="prompt" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('prompt')">닫기</span>
      <p>오늘의 프롬프트는 AI가 감정과 키워드를 기반으로 생성합니다 🎯</p>
    </div>
  </div>
  <div id="music" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('music')">닫기</span>
      <p>AI 추천 음악 프롬프트: 숲속 빗소리와 피아노 앰비언트 음악 🌲🎶</p>
    </div>
  </div>
  <div id="fonttag" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('fonttag')">닫기</span>
      <p>추천 폰트: 나눔손글씨 펜체<br>해시태그: #힐링 #자연소리 #편안한음악 #CozyKuma</p>
    </div>
  </div>

  <script>
    function showModal(id) {
      document.getElementById(id).style.display = 'block';
    }
    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    // PWA 서비스워커 등록
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js').then(reg => {
        console.log("✅ Service Worker 등록 성공:", reg.scope);
      }).catch(err => {
        console.error("❌ 등록 실패:", err);
      });
    }
  </script>
</body>
</html>
