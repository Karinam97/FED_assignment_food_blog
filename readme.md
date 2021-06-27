## index.html

The `index.html` file includes a navigation menu, my Favourite section, other recipes and footer.

in the footer I have used social media icons using this code example:
URL:https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_social_media_buttons

"dinner recipes" in header navigation has a link which opens chicken_soup.html page. It is accessible only through this link.

also clicking on logo and home will return to the main page

## chicken_soup.html

This file is only for recipe and review.
https://www.alt-codes.net/ used for adding clock, fork&knife and star icons.

## css/styles.css

This is the main styling sheet which I used for both webpages. I have used four breakpoints, and had to apply grid-template-areas in each breakpoint as the items were disorganized.

In the css/styles.css I have included "Mali" font from Google fonts.
URL: https://fonts.google.com/specimen/Mali?query=Mali


##css/recipe-instruction-styles

this stylesheet was used only for recipe page. Header and Footer and also main grid was applied from styles.css. So it wasn't duplicated.

used example from this website: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters, to set counter on ordered list, so I could get rid of the unnecessary sections in html.

## js/scripts.js

 This file is used only for toggling the navigation menu on mobile size device.

## js/slideshow.js

This file is used to control the slideshow in myFavourite section. The example of the function was taken from the "learning materials - splash screen system development".

## js/recipe-data.js

In this file I stored all the data of my recipes which I used for the main page

## js/loadData.js

This file loads all the data used from the recipe-data.js file

## js/comment.js

This file I used for parsing and keeping user comments of the food in chicken_soup.html file
