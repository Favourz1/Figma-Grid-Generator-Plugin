# Grid Generator Plugin

A Figma plugin that helps designers create customizable grid layouts quickly and efficiently. Generate different types of grids including 12-column, 8-column, and combined column-row layouts with just a few clicks.

## Features

- **12-Column Grid**: Standard layout grid for web design
- **8-Column Grid**: Alternative layout system for varied designs
- **6-Column Grid with Rows**: Combined grid system for complex layouts
- **4-Column Grid with Rows**: Simplified grid system with row divisions
- Automatically sized to 1440x1080px canvas
- Black grid lines for clear visibility
- Instant viewport focusing on created grid

## Installation

1. Download or clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the plugin:
   ```bash
   npm run build
   ```
4. In Figma desktop app:
   - Open a document
   - Right-click → Plugins → Development → Import plugin from manifest
   - Choose the `manifest.json` file from this project

## Usage

1. Select the plugin from Figma's plugin menu
2. Choose your desired grid type from the available options:
   - 12-Column Grid
   - 8-Column Grid
   - 6-Column Grid with Rows
   - 4-Column Grid with Rows
3. The grid will be automatically generated and centered in your viewport

## Development Guide

This plugin is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).

### Prerequisites

- [Node.js](https://nodejs.org) – v20
- [Figma desktop app](https://figma.com/downloads/)

### Development Commands

```bash
# Build the plugin
npm run build

# Watch for changes and rebuild automatically
npm run watch
```

### Project Structure

- `src/code.ts` - Main plugin logic
- `src/ui.tsx` - Plugin UI components
- `manifest.json` - Plugin configuration

### Debugging

- Use `console.log` statements in your code
- Access logs via Figma's plugin developer console
- Open console: Plugins → Development → Show/Hide Console

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## See Also

- [Create Figma Plugin docs](https://yuanqing.github.io/create-figma-plugin/)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins#readme)

### Official Figma Resources

- [Plugin API docs](https://figma.com/plugin-docs/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples#readme)
