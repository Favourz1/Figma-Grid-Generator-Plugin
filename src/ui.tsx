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
        <Button onClick={() => handleClick("grid-type-1")}>Grid Type 1</Button>
        <VerticalSpace space="small" />
        <Button onClick={() => handleClick("grid-type-2")}>Grid Type 2</Button>
        <VerticalSpace space="small" />
        <Button onClick={() => handleClick("grid-type-3")}>Grid Type 3</Button>
        <VerticalSpace space="small" />
        <Button onClick={() => handleClick("grid-type-4")}>Grid Type 4</Button>
      </Container>
    </div>
  );
}

export default render(Plugin);
