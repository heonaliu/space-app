# NASA Space App

## Description:
- This project uses an API from NASA's APOD (Astronomy Picture of the Day) from https://api.nasa.gov/ renders the image, and gives you a full description of the astronomical image

## Purpose of Buildling:
- Building on my knoweldge of APIs, I decided to do this project. I followed [Smoljames](https://www.youtube.com/@Smoljames) on YouTube's [tutorial](https://www.youtube.com/watch?v=82PXenL4MGg) on ReactJS course to fully understand the functions going on in the backend.

## Challenges I Encountered:
- holding the footer to the bottom. I had to position it to be fixed. If display was fixed, the position of the footer needs to be specified
- I needed the h1 header below in the footer to show but it wasn't showing at all. After looking in the inspect tool, I scrolled down and saw the h1 tag sneakily below the entire page. Following the tutorial, the position was absolute which meant the footers height only came from the button. both h2 and h1 tags don't fit so h1 gets pushed.

## Things I Learned:
- Before implementing APIs it's good practice to have dummy data or dummy images beforehand.

## Things I Enjoyed:
- Using fontawesome library again and its many free icons
