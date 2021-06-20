"use strict";

function buildMealArticle(data) {
  const article = document.createElement('article');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const button = document.createElement('button');
  const p = document.createElement('p');

  h3.textContent = data["meal-type"];
  h4.textContent = data["meal-name"];
  button.textContent = "Try this recipe";

  p.textContent = data["description"];

	img.alt = `${data["alternate"]}`;
	img.src = `images/${data["imgId"]}`;
  article.id = `${data["id"]}`;

  if(data["state"]){
    article.classList = `${data["state"]}`;
  }

	article.appendChild(img);
  article.appendChild(h3)
  article.appendChild(h4);
  article.appendChild(p);
  article.appendChild(button);

  return article;
}

const articlesFavBreakfast = breakfastData.splice(0,1).map(buildMealArticle);
articlesFavBreakfast.forEach(article => slides.appendChild(article));
const articlesFavLunch = lunchData.splice(0,1).map(buildMealArticle);
articlesFavLunch.forEach(article => slides.appendChild(article));
const articlesFavDinner = dinnerData.splice(0,1).map(buildMealArticle);
articlesFavDinner.forEach(article => slides.appendChild(article));

const articlesBreakfast = breakfastData.splice(0,4).map(buildMealArticle);
articlesBreakfast.forEach(article => breakfast.appendChild(article));
const articlesLunch = lunchData.splice(0,4).map(buildMealArticle);
articlesLunch.forEach(article => lunch.appendChild(article));
const articlesDinner = dinnerData.splice(0,4).map(buildMealArticle);
articlesDinner.forEach(article => dinner.appendChild(article));
