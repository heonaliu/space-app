# NASA Space App

## Description:
- This project uses an API from NASA's APOD (Astronomy Picture of the Day) from https://api.nasa.gov/ renders the image, and gives you a full description of the astronomical image

## Purpose of Buildling:
- Building on my knoweldge of APIs, I decided to do this project. I followed [Smoljames](https://www.youtube.com/@Smoljames) on YouTube's [tutorial](https://www.youtube.com/watch?v=82PXenL4MGg) on ReactJS course to fully understand the functions going on in the backend.

## Challenges I Encountered:
- holding the footer to the bottom. I had to position it to be fixed. If display was fixed, the position of the footer needs to be specified
- I needed the h1 header below in the footer to show but it wasn't showing at all. After looking in the inspect tool, I scrolled down and saw the h1 tag sneakily below the entire page. Following the tutorial, the position was absolute which meant the footers height only came from the button. both h2 and h1 tags don't fit so h1 gets pushed.
- I closed my divs incorrectly for the Sidebar.jsx so that the css was applied only to it partially for the headers
- I keep receiving errors on the data file after fetching where the site wasn't rendering any of the APOD info.
- Sometimes the data say error can be due to NASA internal server errors when fetching data

## Things I Learned:
- Before implementing APIs it's good practice to have dummy data or dummy images beforehand.
- the amount of css needed had me researching deeper into flex boxes and how they work. Essentailly any element can be turned into a flexbox simply with display: flex. There's two miain parts -- flex container and the flex items. 
- I learned by default the flex items line up from left to right in a single row. The direction of items flow is controlled by flex-direction.
- After working with css for a longtime, I realized I haven't exactly learned the difference between margin, padding, and gap. After some research, I learned margin is the external space outsid ethe element's border. Padding is the internal space inside an elements border, nad gap is the space between child items inside a container.
- in order for the inset property to be used, there must be a position property set to something other than static. The inset property sets distance between element and parent element.

## Things I Enjoyed:
- Using fontawesome library again and its many free icons
- I enjoyed researching css deeper than
- practice passing functions and props down to child components and understanding its structure more and more this time