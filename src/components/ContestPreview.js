import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
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
  id: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ContestPreview;
