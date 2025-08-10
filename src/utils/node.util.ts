export function assertIsNode(event: EventTarget | null): asserts event is Node {
  if (!event || !("nodeType" in event)) {
    throw new Error("Node Expected");
  }
}
