import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import NaturalDragAnimation from '../Components/NaturalDragAnimation';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

class Item extends Component {
  render() {
    const { item, index, droppableId,  ...props } = this.props;

    return (
      <Draggable
        key={item.id}
        draggableId={item.id}
        index={index}
      >
        {(provided, snapshot) => (
          <NaturalDragAnimation
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style,
            )}
            snapshot={snapshot}
            {...props}
          >
            {style => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={style}
              >
                {item.content}
                {droppableId === 'droppable2' &&  <div dangerouslySetInnerHTML={{__html: item.html}}></div>}
              </div>
            )}
          </NaturalDragAnimation>
        )}
      </Draggable>
    );
  }
}

export default Item;
