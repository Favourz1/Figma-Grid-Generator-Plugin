/** @jsx h */
import {
  Button,
  Container,
  render,
  Text,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";

function Plugin() {
  function handleClick(type: string) {
    emit("CREATE_GRID", type);
  }

  return (
    <div>
      <Container space="medium">
        <Text>Grid Generator</Text>
        <VerticalSpace space="medium" />
        <Button onClick={() => handleClick("grid-type-1")}>
          12-Column Grid
        </Button>
        <VerticalSpace space="small" />
        <Button onClick={() => handleClick("grid-type-2")}>
          8-Column Grid
        </Button>
        <VerticalSpace space="small" />
        <Button onClick={() => handleClick("grid-type-3")}>
          6-Column Grid with Rows
        </Button>
        <VerticalSpace space="small" />
        <Button onClick={() => handleClick("grid-type-4")}>
          4-Column Grid with Rows
        </Button>
      </Container>
    </div>
  );
}

export default render(Plugin);
