//Drag and Drop interfaces
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndhandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverhandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
