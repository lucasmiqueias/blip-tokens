/**
 * Build script to generate tokens in different formats
 */
const fs = require("fs");
const path = require("path");

// Load tokens
const colorsJson = require("../tokens/colors.json");
const spacingJson = require("../tokens/spacing.json");
const typographyJson = require("../tokens/typography.json");
const shadowsJson = require("../tokens/shadows.json");

// Output directories
const cssDir = path.join(__dirname, "../css");
const distDir = path.join(__dirname, "../dist");

// Ensure directories exist
if (!fs.existsSync(cssDir)) {
  fs.mkdirSync(cssDir, { recursive: true });
}

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy CSS files to css directory for distribution
function copyCSSFiles() {
  const srcCssDir = path.join(__dirname, "../src/css");

  if (fs.existsSync(srcCssDir)) {
    // Copy all CSS files
    fs.readdirSync(srcCssDir).forEach((file) => {
      if (file.endsWith(".css")) {
        fs.copyFileSync(path.join(srcCssDir, file), path.join(cssDir, file));
      }
    });

    // Copy themes directory
    const themesDir = path.join(srcCssDir, "themes");
    const destThemesDir = path.join(cssDir, "themes");

    if (fs.existsSync(themesDir)) {
      if (!fs.existsSync(destThemesDir)) {
        fs.mkdirSync(destThemesDir, { recursive: true });
      }

      fs.readdirSync(themesDir).forEach((file) => {
        if (file.endsWith(".css")) {
          fs.copyFileSync(
            path.join(themesDir, file),
            path.join(destThemesDir, file),
          );
        }
      });
    }
  }
}

// Generate style dictionary compatible format
function generateStyleDictionary() {
  const allTokens = {
    color: colorsJson.colors,
    spacing: spacingJson.spacing,
    radius: spacingJson.radius,
    typography: typographyJson,
    shadow: shadowsJson.shadows,
  };

  fs.writeFileSync(
    path.join(distDir, "style-dictionary.json"),
    JSON.stringify(allTokens, null, 2),
  );
}

// Generate individual token files for distribution
function generateTokenFiles() {
  // Copy individual token files
  const tokensDir = path.join(__dirname, "../tokens");
  const distTokensDir = path.join(distDir, "tokens");

  if (!fs.existsSync(distTokensDir)) {
    fs.mkdirSync(distTokensDir, { recursive: true });
  }

  fs.readdirSync(tokensDir).forEach((file) => {
    if (file.endsWith(".json")) {
      fs.copyFileSync(
        path.join(tokensDir, file),
        path.join(distTokensDir, file),
      );
    }
  });
}

// Generate README for tokens
function generateTokensReadme() {
  const readme = `# BLiP Design Tokens

This directory contains all design tokens in JSON format.

## Available Token Files

- **colors.json** - All color tokens (brand, theme variants, semantic colors)
- **spacing.json** - Spacing, border radius, and layout tokens  
- **typography.json** - Font sizes, families, weights, and line heights
- **shadows.json** - Box shadow definitions
- **index.json** - References to all token files

## Usage

### JavaScript/TypeScript
\`\`\`javascript
import colors from '@blip/design-tokens/tokens/colors.json';
import spacing from '@blip/design-tokens/tokens/spacing.json';
\`\`\`

### Build Tools
These token files can be consumed by Style Dictionary, Theo, or other design token build tools.
`;

  fs.writeFileSync(path.join(distDir, "tokens", "README.md"), readme);
}

// Run all build steps
function build() {
  console.log("🏗️  Building BLiP Design Tokens...");

  console.log("📋 Copying CSS files...");
  copyCSSFiles();

  console.log("📝 Generating Style Dictionary format...");
  generateStyleDictionary();

  console.log("📦 Copying token files...");
  generateTokenFiles();

  console.log("📖 Generating tokens README...");
  generateTokensReadme();

  console.log("✅ Build complete!");
}

build();
