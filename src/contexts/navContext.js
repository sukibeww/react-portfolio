import React, {createContext, Component} from 'react';

export const NavMode = createContext();

class NavModeProvider extends Component {
  state = {
    navMode: false
  }

  toggle = () =>{
    this.setState((prevState)=> {
      const newState = {
        navMode: !prevState.navMode
      }
      return newState;
    });
  }

  render() {
    return (
      <NavMode.Provider value={{...this.state, toggle: this.toggle}}>
        {this.props.children}
      </NavMode.Provider>
      );
  }
}

export default NavModeProvider;