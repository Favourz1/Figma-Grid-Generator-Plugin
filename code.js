"use strict";
var canvasWidth = 1440;
var canvasHeight = 1080;
function createGrid(type) {
  var gridFrame = figma.createFrame();
  gridFrame.resize(canvasWidth, canvasHeight);
  gridFrame.name = "Grid - ".concat(type);
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
function createColumns(frame, columns) {
  var columnWidth = canvasWidth / columns;
  for (var i = 1; i < columns; i++) {
    var line = figma.createLine();
    line.resize(canvasWidth, 0);
    line.x = i * columnWidth;
    line.y = 0;
    line.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frame.appendChild(line);
  }
}
function createRows(frame, rows) {
  var rowHeight = canvasHeight / rows;
  for (var i = 1; i < rows; i++) {
    var line = figma.createLine();
    line.resize(0, canvasHeight);
    line.x = 0;
    line.y = i * rowHeight;
    line.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frame.appendChild(line);
  }
}

figma.ui.onmessage = (message) => {
  try {
    if (message.type) {
      console.log("Received message:", message);
      createGrid(message.type);
    }
  } catch (error) {
    console.error("Error in plugin:", error);
  }
  figma.closePlugin();
};
