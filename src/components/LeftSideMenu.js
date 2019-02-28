import React, { Component } from 'react';
import '../css/sideMenu.css';
import {Accordion, AccordionItem} from 'react-sanfona';

const MyComponent = ({data}) => {

   return (
    <Accordion>
      {data.map((item, index) => {
        return (<AccordionItem key={index} expandedClassName="ruba" title={item.title} expanded={false}>
            {item.children && <MyComponent  data={item.children} />}
        </AccordionItem>);
      })}
    </Accordion>
  );
}

class LeftSideMenu extends Component {

  render() {
    return (
      <div className="col-2 menu">
         <MyComponent data={this.props.items} />
       </div>
    )
  }
}
export default LeftSideMenu;
