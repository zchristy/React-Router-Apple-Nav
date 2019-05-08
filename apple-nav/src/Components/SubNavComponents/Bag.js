import React, { Component } from 'react';

import { BagCaret, DropDownContainer, BagMessage, BagLink } from '../../styles';

class Bag extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }
  }

  showMenu = event => {
    event.preventDefault();

    this.setState({
      showMenu: true
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = event => {
     if (!this.dropdownMenu.contains(event.target)) {
        this.setState({
          showMenu: false
        }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
  }

  render() {
    return (
      <div>
        <div onClick={this.showMenu} >
          Bag
        </div>
        {this.state.showMenu ?
          (
            <div>
              <BagCaret></BagCaret>
              <DropDownContainer ref={(element) => {
                    this.dropdownMenu = element;
                  }}>
                <BagMessage>Your Bag is Empty</BagMessage>
                <BagLink><i className="fas fa-shopping-bag"></i> Bag</BagLink>
                <BagLink><i className="fas fa-heart"></i> Favorites</BagLink>
                <BagLink><i className="fas fa-box-open"></i> Order</BagLink>
                <BagLink><i className="fas fa-user-cog"></i> Account</BagLink>
                <BagLink><i className="fas fa-user"></i> Sign in</BagLink>
              </DropDownContainer>
            </div>
          ) : (null)
        }

      </div>
    );
  }
}

export default Bag;
