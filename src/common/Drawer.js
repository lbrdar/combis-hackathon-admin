import React from 'react';
import DrawerMUI from 'material-ui/Drawer';
import {
  List,
  ListItem,
  makeSelectable,
} from 'material-ui/List';
const SelectableList = makeSelectable(List);

class Drawer extends React.Component {
  render() {
    return (
      <DrawerMUI
        open={this.props.open}
        docked={this.props.docked}
        onRequestChange={this.props.onRequestChange}
      >
        <SelectableList
          value={this.props.location}
          onChange={this.props.onRequestChangeList}
        >
          <ListItem primaryText="Home" value="/" />
          <ListItem primaryText="Donors" value="/donors" />
          <ListItem primaryText="Messages" value="/messages" />
          <ListItem primaryText="Questionnaires" value="/questionnaires" />
        </SelectableList>
      </DrawerMUI>
    );
  }
}

export default Drawer;
