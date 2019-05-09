import React, { Component } from 'react';

import { BagCaret, DropDownContainer, BagMessage, BagLink, BagIcon } from '../../styles';

import Icon from '../../Assets/svgImages/svgIndex';

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
          <Icon name="shopBagLogo" fill="white" width={45}/>
        </div>
        {this.state.showMenu ?
          (
            <div>
              <BagCaret></BagCaret>
              <DropDownContainer ref={(element) => {
                    this.dropdownMenu = element;
                  }}>
                <BagMessage>Your Bag is Empty</BagMessage>
                <BagLink><BagIcon className="fas fa-shopping-bag"></BagIcon> Bag</BagLink>
                <BagLink><BagIcon className="fas fa-heart"></BagIcon> Favorites</BagLink>
                <BagLink><BagIcon className="fas fa-box-open"></BagIcon> Order</BagLink>
                <BagLink><BagIcon className="fas fa-user-cog"></BagIcon> Account</BagLink>
                <BagLink><BagIcon className="fas fa-user"></BagIcon> Sign in</BagLink>
              </DropDownContainer>
            </div>
          ) : (null)
        }

      </div>
    );
  }
}

export default Bag;
