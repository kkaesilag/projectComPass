// jscript_request.js 파일에 추가되는 자바스크립트 코드

function submitForm(event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    console.log('전송된 데이터:', formData);
    // 여기에서 추가적인 로직을 작성할 수 있습니다.
  }
  