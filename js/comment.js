"use strict";
(() => {
  function incrementComment() {
    let commentCount=comments.querySelectorAll('article').length;
  	counter.textContent = commentCount;
  }

  function addComment(name, text) {
    const comment = document.createElement('article');
    const userName = document.createElement('h4');
    const userComment = document.createElement('p');

    userName.textContent = name;
    userComment.textContent = text;
    comment.appendChild(userName);
    comment.appendChild(userComment);

    comments.appendChild(comment);
  }

  submitButton.addEventListener('click', ev => {
    if(myName.value && myComment.value) {
      addComment(myName.value, myComment.value);
      incrementComment();
      myName.value = null;
      myComment.value = null;
      myName.focus();
      saveToStorage()
    }
  });

  function saveToStorage() {
  		const comment = Array.from(comments.querySelectorAll('article'));
      const commentNumber = document.getElementById("counter").textContent;
  		const data = comment.map(el => {
  			return {
          Name: el.querySelector('h4').textContent,
          Comment: el.querySelector('p').textContent,
          numberOfComments: commentNumber
  			}
  		});
  		localStorage.setItem(comments.id, JSON.stringify(data));
  }
  function loadFromStorage() {
          const data = JSON.parse(localStorage.getItem(comments.id));
          if(data){
                  for (const comment of data){
                          addComment(comment.Name, comment.Comment);
                          incrementComment();
                }
          }
  }

  loadFromStorage();
})()
