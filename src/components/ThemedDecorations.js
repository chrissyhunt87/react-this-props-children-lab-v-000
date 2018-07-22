import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: 'heaven'
      });
    });
    return (
      <div>
        {childrenWithExtraProp}
      </div>
    )
  }
};

export default ThemedDecorations;
