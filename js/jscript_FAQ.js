document.addEventListener("DOMContentLoaded", function() {
  // 페이지 로드 시 실행되며 모든 .answer 요소를 숨깁니다.
  var answers = document.querySelectorAll('.answer');
  answers.forEach(function(answer) {
      answer.style.display = 'none';
  });
});

function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);
  answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
}