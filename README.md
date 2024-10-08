# BOGO Offer UI Documentation

## Live Demo
Check out the live demo of the BOGO Offer UI here: https://bogo-ui.web.app/

## Project Overview

This project implements a Buy One Get One (BOGO) offer user interface for an e-commerce platform. It features a responsive design with customizable product options and an interactive selection process.

## Features

- Multiple BOGO offer options with different discounts
- Interactive UI with expandable options
- Customization options for each product (size and color)
- Real-time price updates
- "Add to Cart" functionality
- Responsive design for various screen sizes

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

The project consists of three main files:

1. `index.html`: Contains the HTML structure of the BOGO offer UI.
2. `styles.css`: Defines the styles and layout for the UI components.
3. `script.js`: Implements the interactive functionality of the UI.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/Shubhx3/bogo-offer-ui.git
   ```
2. Navigate to the project directory:
   ```
   cd bogo-offer-ui
   ```
3. Open `index.html` in a web browser to view the BOGO offer UI locally.


## Key Components

### HTML (`index.html`)

The HTML file defines the structure of the BOGO offer UI, including:

- A container for the entire BOGO offer (`bogo-container`)
- Multiple offer options, each with:
  - A discount label
  - Option content (title and price)
  - Customization options (size and color)
- A summary section with the total price
- An "Add to Cart" button

### CSS (`styles.css`)

The CSS file styles the UI components and implements the layout. Key features include:

- Custom font loading (Inter)
- CSS variables for easy color scheme customization
- Responsive design using Flexbox
- Styling for offer options, discount labels, and customization inputs
- Interactive styles for selected options

### JavaScript (`script.js`)

The JavaScript file adds interactivity to the UI. Main functionalities include:

- Updating the total price based on the selected option
- Toggling the selected state of options
- Handling the "Add to Cart" action, including gathering customization data

## Usage Guide

1. **Selecting an Offer**: Click on one of the BOGO offer options to select it. The selected option will expand to show customization options.

2. **Customizing the Order**: For the selected offer, choose the size and color for each item using the dropdown menus.

3. **Reviewing the Order**: The total price will update automatically based on your selection. You can also see if free delivery is available.

4. **Adding to Cart**: Click the "Add to Cart" button to finalize your selection. An alert will show the details of your order.

## Customization

To customize the UI:

- Modify color schemes by updating CSS variables in the `:root` selector in `styles.css`.
- Adjust offer options, prices, and customization choices in the HTML structure.
- Extend JavaScript functionality in `script.js` for additional features or integrations.

## Acknowledgments

- Font used: Inter ([https://rsme.me/inter/](https://rsms.me/inter/))

## Best Practices

This project follows several best practices:

- Semantic HTML5 structure for improved accessibility and SEO
- CSS custom properties for easy theming
- Responsive design principles
- Unobtrusive JavaScript for enhanced user interactivity
- Clear separation of concerns between HTML (structure), CSS (presentation), and JavaScript (behavior)

## Browser Compatibility

This UI is designed to work on modern web browsers. For optimal experience, use the latest versions of Chrome, Firefox, Safari, or Edge.

## Contact

For any queries or suggestions, please open an issue in this repository.
