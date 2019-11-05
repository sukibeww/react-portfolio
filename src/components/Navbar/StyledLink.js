import styled from 'styled-components';

const StyledLink = styled.li`
  list-style: none;
  font-size: 1.3rem;
  margin-left: 3vw;
  font-family: 'Nunito', sans-serif;
  transition: all 0.1s;
  cursor: pointer;
  &:hover{
    transition: all 0.5s;
    color: #3000FF;
    -webkit-box-shadow: 0px 3px 0px 0px rgba(95,58,255,1);
    -moz-box-shadow: 0px 3px 0px 0px rgba(95,58,255,1);
    box-shadow: 0px 3px 0px 0px rgba(95,58,255,1);
  }
  &:active{
    color: rgba(95,58,255,1);
  }
  a{
    text-decoration: none;
    color: #373737;
  }
`

export default StyledLink;