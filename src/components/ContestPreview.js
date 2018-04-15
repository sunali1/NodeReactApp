import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  handleClick = () => {
    console.log(this.props.categoryName);
  };
  render() {
    return(
      <div className = 'ContestPreview'onClick={this.handleClick}>
        <div className= 'categoryName'>
          {this.props.categoryName}
        </div>
        <div className= 'contestName'>
          {this.props.contestName}
        </div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired
};

export default ContestPreview;
