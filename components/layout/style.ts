import styled from "styled-components";
export const Container = styled.div`
  background-color: white;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
  width: 19%;
  padding-top: 5%;
  box-shadow: 2px 3px 3px 0px rgba(0, 0, 0, 0.45);
  div {
    padding: 4%;
    /* background-color: yellow; */
    font-weight: 500;
    border-radius: 5px;
    width: 95%;
    margin: auto;
    margin-bottom: 3%;
    &:hover {
      background-color: azure;
    }
  }
  .active {
    background-color: blue;
  }
  /* margin-left: 5%; */
`;
