# Talha Portfolio

Welcome to TalhaPortfolio – a customizable personal dev portfolio + blog template built using GatsbyJS, TailwindCSS, and enhanced with Sass, JavaScript, and Gulp. It's lightweight, responsive, and production-ready – just plug in your info and you're live! 🚀

🎉 Interested in full-stack Chrome Extension development? Check out my new course – Chrome Extension Mastery!

🚀 Live Demo of TalhaPortfolio [clickHere](https://muhammadtalhakhan2003.github.io/PortFolio_Talha/)
📁 GitHub Repository(https://github.com/MuhammadTalhakhan2003/PortFolio_Talha.git)

✨ Features
⚙️ Built with GatsbyJS + TailwindCSS

💡 Gulp-ready (compile Sass + minify JS)

🎨 Sass variables for easy theming

📱 Fully responsive

🧱 Bootstrap grid included

🧰 Font Awesome support

🧼 Clean, modular file structure

📦 Folder Structure
pgsql
⚙️ Setup and Configuration
1. 🔧 Customizing the Template
bash
Copy
Edit
# Clone the repository
git clone https://github.com/MuhammadTalhakhan2003/PortFolio_Talha.git
cd PortFolio_Talha

# Install dependencies
npm install

# Run Gulp to compile Sass and minify JS
npm run watch  # OR gulp watch
Make edits in:

sass/styles.scss → compiled to css/styles.css

js/scripts.js → minified to js/scripts.min.js

2. 🏃‍♂️ Using the Template As-Is
Just copy the following to your server or GitHub Pages:

css/, images/, js/, libs/

index.html

Then edit index.html with your info and you're good to go!

🎨 Customization Guide
🎯 General Styles
Edit your primary styles in sass/_variables.scss:

scss

$base-color: #3498db;
$background: #fff;
$heading: #374054;
$text: #74808a;
🖼️ Images
Background: images/lead-bg.jpg (1920x1080 recommended)

Favicon: /favicon.ico

Project Thumbnails: images/project.jpg

🧩 Page Sections
🔝 Header
Add/remove navigation links in the <header> tag.

Sticky Header:

html

<header class="sticky"> ... </header>
External Links:

html

<a href="https://google.com" class="no-scroll">Google</a>
👋 Lead Section
Update your name, title, and resume link:

html

<h1>Muhammad Talha Khan</h1>
<h2>Software Engineer | Developer</h2>
<a href="resume.pdf" download="Talha_Resume.pdf" class="btn-rounded-white">Download Resume</a>
👤 About Section
Just edit the paragraph with your bio.

💼 Experience Section
Vertical timeline using #experience-timeline:

html

<div data-date="2023 – Present">
  <h3>ItSolera</h3>
  <h4>Backend Developer</h4>
  <p>Built secure and scalable backend systems...</p>
</div>
🎓 Education Section
html
Copy
Edit
<div class="education-block">
  <h3>University of South Asia</h3>
  <span class="education-date">2019 – 2023</span>
  <h4>Bachelor of Science in Computer Science</h4>
  <p>CGPA: 3.44</p>
</div>
💻 Projects Section
html

<div class="project">
  <div class="project-image">
    <img src="images/project.jpg" />
  </div>
  <div class="project-info">
    <h3>Hifazat App</h3>
    <p>Community-driven safety app with real-time crime tracking.</p>
    <a href="https://github.com/yourproject">View Project</a>
  </div>
</div>
Add "Show More Projects" toggle:

html

<a id="view-more-projects" href="#">View More Projects</a>
<div id="more-projects">...</div>
🧠 Skills Section
List your tech stack and tools in this section.

📬 Contact Section
Includes your email, phone number, and social links.

🔚 Footer Section
Add copyrights.

🧪 Gulp Tasks
bash

gulp watch    # watches and compiles SCSS + JS
gulp sass     # compile Sass manually
gulp js       # minify JS manually
📝 License
This project is licensed under the MIT License – feel free to use and modify it for personal/commercial purposes.

🙌 Acknowledgements
Inspired by RyanFitzgerald’s portfolio templates

Images from Unsplash

Icons by Font Awesome

Want to collaborate or suggest a feature?
📧 Contact: Talhakhan050203@gmail.com
🔗 GitHub Profile
