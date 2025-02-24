const postForm = document.getElementById('postForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const imageInput = document.getElementById('imageInput');
const createButton = document.getElementById('createPostButton');

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

let open = false;
let titleCheck = false;
let contentCheck = false;

// 생성버튼 활성화로직
function validCreateButton() {
  titleCheck = titleInput.value.length > 0 && titleInput.value.length < 27;
  contentCheck = contentInput.value.length > 0;

  if (titleCheck && contentCheck) {
    createButton.classList.add('active');
    createButton.removeAttribute('disabled');
  } else {
    createButton.classList.remove('active');
    createButton.setAttribute('disabled', 'true');
  }
}

titleInput.addEventListener('input', validCreateButton);
contentInput.addEventListener('input', validCreateButton);
imageInput.addEventListener('change', validCreateButton);

postForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (titleCheck && contentCheck) {
    window.alert('게시물 생성 성공');
    window.location.replace('../postlist.html');
  }
});

// 드롭다운 열기/닫기
dropdownButton.addEventListener('click', function () {
  if (!open) {
    dropdownMenu.classList.add('show');
    open = true;
  } else {
    dropdownMenu.classList.remove('show');
    open = false;
  }
});
