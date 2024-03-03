import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 50px;
  margin-top: 50px;
  padding: 0;
  display: block;
  width: 250px;
`;

export const Link = styled.li`
  display: flex;
  margin-bottom: 18px;
  padding: 10px 0 10px 0;
  align-items: center;
  border: 1px black solid;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  font-weight: 500;
  p {
    margin: 0 0 0 10px;
  }
  img {
    width: 70px;
  }
`;

export const Span = styled.span`
  width: 30px;
  padding-left: 15px;
  color: ${props => props.color};
  font-weight: 800;
`;
