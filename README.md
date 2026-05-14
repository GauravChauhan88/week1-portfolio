# week1-portfolio
Week  1 portfolio project suubmitted to The Developers Arena 


## 1. Project Overview: 
Development FocusThis project involves the end-to-end development of a responsive, professional portfolio website designed to serve as a digital showcase for technical projects and skills. The development process focuses on implementing modern web standards and creating a seamless user experience across multiple device architectures.  Core Objectives:Semantic Structure: Implementing a clean HTML5 hierarchy to ensure accessibility and high SEO performance.  Responsive Architecture: Developing a "Mobile-First" layout that utilizes CSS Flexbox and Grid to adapt content fluidly to various screen resolutions.  Interactive UI/UX: Integrating JavaScript to manage dynamic navigation elements, such as the mobile hamburger menu and smooth scroll transitions.  Technical Integration: Creating a centralized hub to document diverse technical projects, ranging from Python-based management systems to AWS-deployed cloud solutions.  


## 2. Setup Instructions
To run this project locally on your machine, follow these steps:

1. Extract Files: Ensure your folder structure matches the hierarchy: index.html at the root, with css/, js/, and images/ subfolders.

2. Configuration: Place your profile photo in the images/ folder and name it profile.jpg.

3. Launch: Right-click index.html and select "Open with Live Server" in VS Code or simply double-click the file to open it in any modern web browser.


## 3. Code Structure
The project follows a modular file hierarchy to ensure the codebase is scalable, organized, and easy to maintain:
1. index.html: The core structural file using semantic HTML5 elements (header, nav, main, section, footer) to improve SEO and screen-reader accessibility.
2. css/variables.css: Centralized storage for design tokens, including color palettes (Amity Blue), typography scales, and transition speeds, allowing for easy global theme updates.
3. css/style.css: The primary stylesheet containing layout rules, including the Flexbox navigation bar and the CSS Grid system for the project gallery.
4. css/responsive.css: Contains mobile-first media queries and specific breakpoint logic to handle the transitions between mobile, tablet, and desktop
5. views.js/navigation.js: A lightweight script responsible for DOM manipulation, specifically toggling the mobile hamburger menu and managing smooth-scroll behavior.
6. images/: A dedicated directory for optimized visual assets, including the profile photograph and the brand logo.


## 4. Visual Documentation 

<img width="1919" height="1038" alt="image" src="https://github.com/user-attachments/assets/2c4cd08d-32d7-4355-a453-75a2ba867023" />

Fig 1: Landing Experience: A screenshot of the Hero section showing the integrated logo and profile image.


<p align="center">
  <img src="https://github.com/user-attachments/assets/50b9072b-4789-48b4-ae16-a85e6ad2d400" width="45%" />
  <img src="https://github.com/user-attachments/assets/f2b7a339-cae0-4d13-a841-ad2acbfc2bdb" width="45%" />
</p>

Fig 2: Mobile Navigation: A screenshot taken in mobile view (inspect element) with the hamburger menu expanded.


<img width="1903" height="951" alt="image" src="https://github.com/user-attachments/assets/bcadc84d-b3a0-4873-b91b-e01c96137e6c" />

Fig 3: Grid Implementation: A screenshot of the Projects section showing the three-column layout (Desktop).


## 5. Technical Detail: Architecture
To ensure the project meets the "Code Structure" requirement, the following architecture was used:
1. HTML5 (Structure): Used for defining the document's semantic sections including header, main, and section.
2. CSS3 (Presentation): Employed for the visual theme, utilizing variables for consistent color schemes and media queries for device responsiveness.
3. JavaScript (Behavior): Utilized for DOM manipulation to toggle navigation states and handle user interaction events.


## 6. Testing & Validation Evidence

| Feature | Test Performed | Expected Result | Status |
| --- | --- | --- | --- |
| **Responsive Layout** | Resizing browser from 1920px to 375px. | CSS Grid and Flexbox adjust; layout stacks vertically on mobile. | **Passed** |
| **Mobile Navigation** | Clicking the Hamburger icon on a mobile device. | JavaScript toggles the `.active` class to reveal the menu. | **Passed** |
| **Smooth Scrolling** | Clicking "Projects" in the navigation bar. | Page scrolls smoothly to the target section via `navigation.js`. | **Passed** |
| **Form Validation** | Submitting the contact form with an empty email field. | Browser prevents submission and displays a "required" warning. | **Passed** |
| **Asset Integrity** | Verifying the rendering of `profile.jpg` in the navbar. | Image displays correctly as a circular frame with a 2px border. | **Passed** |
| **Link Accessibility** | Clicking the LinkedIn profile link in the footer. | Opens [LinkedIn Profile](https://www.google.com/search?q=https://www.linkedin.com/in/gauravchauhan101) in a new tab. 

## 🎓 About the Developer

Name: Gaurav Chauhan   


Education: BCA+MCA Dual Degree, Amity University Noida (2027)   

Focus: Full-Stack Development, Data Analytics, and Cloud Computing
