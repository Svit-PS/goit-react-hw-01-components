import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  border-radius: 4px;
  margin-left: 50px;
`;

export const Foto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  img {
    width: 100px;
    border-radius: 50px;
  }
`;

export const Name = styled.p`
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  color: black;
  font-size: 16px;
  font-weight: 500;
`;

export const Tag = styled.p`
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #a19090;
  font-size: 14px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: row;
  background-color: #ddeaca;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc((100%) / 3);
    padding: 10px;
    border: black 1px solid;
  }
`;
