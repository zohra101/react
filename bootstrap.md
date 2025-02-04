### Bootstrap Carousel
- A slideshow for cycling through images, videos, and other content.
  
1. Connect Bootstrap styles and scripts to `index.html`.
2. Copy a carousel template from `https://getbootstrap.com`.
3. Paste the template into a React component.
4. Fix errors, add assets, and render from a parent component.

### Bootstrap Practice
Try different carousel variations
1. Carousel without indicators
2. Carousel with indicators
3. Carousel with captions
4. Carousel with dark controls
5. Crossfading carousel
6. Autoplaying carousel
7. Autoplaying carousel without controls
If you want to add a Bootstrap component to your capstone project,
create a branch for it first.

### Bootstrap Tooltips
`new Bootstrap`

- Styled tooltips that pop up when hovering over specific content

   1. Add bootstrap CDN links to `index.html`.
   2. Add the tooltip content to the attribute `data-bs-title`.
   3. Add the tooltip type to the attribute `data-bs-toggle`.
   4. Initialize bs ToolTip in `componentDidMount`.
   5. `const imgTag = document.getElementbyId("pictureName);`
   6. `new bootstrap.Tooltip(imgTag)`
    
              ```js
            function componentDidMount(){
               const imgTag = document.getElementbyId("pictureName");
               new bootstrap.Tooltip(imgTag);
            }
            ````

### Responsive Web Design
- Design your website to change its layout based on the screen size
- On small devices, decrease the number of columns to avoid overcrowding
- On larger devices, increase the number of columns to use the full screen size

### Review - Bootstrap navbar
`<a class="active nav-link">`
- Some Bootstrap navbars require the `active` class
- With HTML sites, the `active` class is set with each HTML file
- In React, there is usually only 1 `<Navbar>` component

### Collapsible navbar
1. Copy and paste into a new component the simple nav (without list) from
`https://getbootstrap.com/docs/5.3/components/navbar/#nav`
2. Add a nav style (like nav-pills) to `<nav>` and adjust the breakpoint
3. Fix errors, change `<a>` to `<NavLink>`, change href to `"to" `and fix paths, remove active
4. Optional: remove the navbar brand and the disabled link, or change them back to `<a>`
​
### Bootstrap Modal
- A dialogue box that pops up when a button is pressed

1. Connect Bootstrap `styles` and `scripts` to `index.html`
2. Copy the live demo modal template from `https://getbootstrap.com`
3. Paste the template into a React component
4. Fix errors and render from a parent component