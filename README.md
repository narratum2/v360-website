# V.360 Website – Vanderbilt Athletics

This repository contains the source code for **V.360**, Vanderbilt University Athletics’ comprehensive development platform. The site showcases the programme’s mission, highlights the eight pillars of holistic development, celebrates partner organisations and provides an easy way for student‑athletes to learn more and apply.

## Features

* **Modern, responsive design** built with Vanderbilt’s official colour palette and typography. Sections alternate between light backgrounds to establish a visual rhythm.
* **Sticky navigation** that shrinks on scroll and converts into a slide‑in menu on mobile devices.
* **Animated hero statistics** powered by a lightweight script that counts up values when they enter the viewport.
* **Modular structure** with separate files for HTML, CSS and JavaScript. This makes it easy to maintain and extend the site as new sections or features are added.

## Getting Started

To run the site locally you’ll need [Node.js](https://nodejs.org/) installed on your machine. Clone the repository and install the development dependencies:

```bash
git clone <repository-url>
cd v360-website
npm install
```

Start a development server with `live-server`:

```bash
npm start
```

This will open a local server in your default browser and automatically reload the page when you make changes to the files.

### Building for production

The `build` script will minify your CSS and JavaScript into a `dist/` directory. Run:

```bash
npm run build
```

You can then deploy the `dist/` directory to your hosting provider of choice.

## File Structure

```
v360-website/
├── index.html           # Main HTML file
├── css/
│   ├── styles.css       # Core styles (Vanderbilt brand compliant)
│   └── responsive.css   # Responsive overrides for smaller screens
├── js/
│   ├── navigation.js    # Handles navigation behaviour and smooth scrolling
│   ├── main.js          # Core scripts (e.g. hero stat animations)
│   └── interactions.js  # Placeholder for future interactive elements
├── images/
│   ├── hero-bg.jpg      # Placeholder hero background (replace with your own image)
│   ├── athletes/        # Reserved for athlete photos
│   └── logos/           # Partner logos (SVGs go here)
├── package.json         # Node scripts and dev dependencies
├── README.md            # Project overview and setup instructions
└── .gitignore           # Files and directories ignored by Git
```

## Customisation

* **Images:** Replace `images/hero-bg.jpg` with a high‑resolution photo of the Vanderbilt University campus or a relevant background. Place partner logos in `images/logos/` using the file names referenced in `index.html`.
* **Fonts:** The site uses Proxima Nova via Adobe Fonts (Typekit). Update the `<link>` tag in `index.html` if you have your own Typekit project configured.
* **Content:** Edit `index.html` to add or remove sections. Each section uses the `.container` class to constrain content to the standard width.

## License

This project is provided for educational and demonstration purposes. Vanderbilt trademarks and logos remain the property of Vanderbilt University and should not be used without permission.