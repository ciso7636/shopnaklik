import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Grid } from 'semantic-ui-react'
import Column from './Column';

// fake data generator
const getItems = (count, offset = 0) => Array.from({ length: count }, (v, k) => k).map(k => ({
  id: `item-${k + offset}`,
  content: `item ${k + offset}`,
  html: '<h1>Nadpis</h1><p>Test Html</p>'
}));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  console.log(result)
  return result;
};

class List extends Component {
    state = {
      itemsHeader: getItems(2),
      itemsNav: getItems(2,2),
      selected: [],
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
      droppableHeader: 'itemsHeader',
      droppableNav: 'itemsNav',
      droppable2: 'selected',
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = (res) => {
      const { source, destination } = res;

      // dropped outside the list
      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        const items = reorder(
          this.getList(source.droppableId),
          source.index,
          destination.index,
        );

        let state = { items };

        if (source.droppableId === 'droppable2') {
          state = { selected: items };
        }

        this.setState(state);
      } else {
        const result = move(
          this.getList(source.droppableId),
          this.getList(destination.droppableId),
          source,
          destination,
        );

        if (result.droppableHeader !== undefined) {
            this.setState({
              itemsHeader: result.droppableHeader,
              selected: result.droppable2,
            });
            return;
        }
        if (result.droppableNav !== undefined) {
          this.setState({
            itemsNav: result.droppableNav,
            selected: result.droppable2,
          });
          return;
        }
      }
    };

    render() {
      return (
          <DragDropContext onDragEnd={this.onDragEnd}>
          <Grid>
              <Grid.Column width={4}>
                <Column droppableId="droppableHeader" data={this.state.itemsHeader} {...this.props} />
                <Column droppableId="droppableNav" data={this.state.itemsNav} {...this.props} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Column droppableId="droppable2" data={this.state.selected} {...this.props} />
              </Grid.Column>
          </Grid>
          </DragDropContext>
      );
    }
}

export default List;
