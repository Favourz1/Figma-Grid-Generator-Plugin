import { once, showUI } from "@create-figma-plugin/utilities";

export default function () {
  showUI({
    width: 240,
    height: 320,
  });

  once("CREATE_GRID", function (type: string) {
    console.log("Creating grid of type:", type);
    // Your grid creation logic here
    figma.closePlugin();
  });
}
