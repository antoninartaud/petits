import React from 'react';
import Winner from '../../assets/pic/winner.gif';

class DisplayWinner extends React.Component {
  constructor() {
    super();
    this.displayWinner = this.displayWinner.bind(this);
  }

  displayWinner() {
    if (
      this.props.player1Tokens.indexOf(false) === -1 ||
      this.props.player2Tokens.indexOf(false) === -1
    ) {
      return (
        <div className='winner'>
          <p className='pWins'>
            {' '}
            {this.props.player1Tokens.indexOf(false) === -1 && (
              <span className='spanP1'>Player 1</span>
            )}
            {this.props.player2Tokens.indexOf(false) === -1 && (
              <span className='spanP1'>Player 2</span>
            )}
            Wins !
          </p>
          <div
            className='offset-3'
            style={{
              background: `url(${Winner})`,
              height: `${500}px`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      );
    }
  }
  render() {
    return <div>{this.displayWinner()}</div>;
  }
}

export default DisplayWinner;
