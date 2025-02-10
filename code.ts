const canvasWidth = 1440;
const canvasHeight = 1080;

function createGrid(type: string) {
  const gridFrame = figma.createFrame();
  gridFrame.resize(canvasWidth, canvasHeight);
  gridFrame.name = `Grid - ${type}`;

  switch (type) {
    case "grid-type-1":
      // Example: 12-column grid
      createColumns(gridFrame, 12);
      break;
    case "grid-type-2":
      // Example: 8-column grid
      createColumns(gridFrame, 8);
      break;
    case "grid-type-3":
      // Example: 6-column grid with rows
      createColumns(gridFrame, 6);
      createRows(gridFrame, 6);
      break;
    case "grid-type-4":
      // Example: 4-column grid with rows
      createColumns(gridFrame, 4);
      createRows(gridFrame, 4);
      break;
    default:
      break;
  }

  figma.currentPage.appendChild(gridFrame);
  figma.viewport.scrollAndZoomIntoView([gridFrame]);
}

function createColumns(frame: FrameNode, columns: number) {
  const columnWidth = canvasWidth / columns;
  for (let i = 1; i < columns; i++) {
    const line = figma.createLine();
    line.resize(0, canvasHeight);
    line.x = i * columnWidth;
    line.y = 0;
    line.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frame.appendChild(line);
  }
}

function createRows(frame: FrameNode, rows: number) {
  const rowHeight = canvasHeight / rows;
  for (let i = 1; i < rows; i++) {
    const line = figma.createLine();
    line.resize(canvasWidth, 0);
    line.x = 0;
    line.y = i * rowHeight;
    line.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frame.appendChild(line);
  }
}

figma.ui.onmessage = (message) => {
  if (message.type) {
    createGrid(message.type);
  }
  figma.closePlugin();
};
