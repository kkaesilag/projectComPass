// jscript_request.js ���Ͽ� �߰��Ǵ� �ڹٽ�ũ��Ʈ �ڵ�

function submitForm(event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    console.log('���۵� ������:', formData);
    // ���⿡�� �߰����� ������ �ۼ��� �� �ֽ��ϴ�.
  }
  