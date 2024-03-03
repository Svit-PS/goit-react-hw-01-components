import styled from 'styled-components';

export const Container = styled.section`
  width: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  border-radius: 4px;
  margin-left: 50px;
  margin-top: 50px;
  h2 {
    border-bottom: 1px black solid;
    margin: 0;
    padding: 20px;
    text-transform: uppercase;
    text-align: center;
    background-color: #e8dbdb;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: row;
`;

export const Link = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100%) / 3);
  padding: 10px;
  border: black 1px solid;
  background-color: ${props => props.color};
`;
