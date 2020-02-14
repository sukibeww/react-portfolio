import styled from 'styled-components';

const StyledLink = styled.li`
  list-style: none;
  font-size: 1.2em;
  margin-left: 3vw;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s;
  cursor: pointer;
  &:hover{
    transition: all 0.5s;
    color: #3000FF;
    -webkit-box-shadow: 0px 2px 0px 0px #5f3aff;
    -moz-box-shadow: 0px 2px 0px 0px #5f3aff;
    box-shadow: 0px 2px 0px 0px #5f3aff;
  }
  &:active{
    color: #5f3aff;
  }
  a{
    text-decoration: none;
    color: #FFFFFF;
  }
`

export default StyledLink;