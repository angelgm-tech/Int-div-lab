import { StyleState } from '../types/styles';

export function generateReactComponent(styles: StyleState) {
  const processedStyles = JSON.stringify(styles, null, 2);
  
  return `import React from 'react';

export function StyledDiv() {
  return (
    <div style={${processedStyles}} className="shadow-lg">
      <div className="p-4">
        <h3 className="text-lg mb-2">Your Title</h3>
        <p className="text-sm opacity-75">Your content goes here</p>
      </div>
    </div>
  );
}`;
}

export function generateCSS(styles: StyleState) {
  const cssProperties = Object.entries(styles)
    .map(([key, value]) => `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
    .join('\n');

  return `.styled-div {
${cssProperties}
}

/* Optional: Add these classes if you're not using a CSS framework */
.styled-div .text-lg { font-size: 1.125rem; }
.styled-div .text-sm { font-size: 0.875rem; }
.styled-div .mb-2 { margin-bottom: 0.5rem; }
.styled-div .p-4 { padding: 1rem; }
.styled-div .opacity-75 { opacity: 0.75; }`;
}

export function generateHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styled Div</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="styled-div">
    <div class="p-4">
      <h3 class="text-lg mb-2">Your Title</h3>
      <p class="text-sm opacity-75">Your content goes here</p>
    </div>
  </div>
</body>
</html>`;
}