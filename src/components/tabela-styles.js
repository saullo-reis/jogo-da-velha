import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  div {
    width: 400px;
    flex-flow: wrap;
    display: flex;
    justify-content:center;
    span {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      border: gray 1px solid;
      background-color: #f5deb3;
      :hover {
        cursor: pointer;
        background-color: #deb887;
      }
    }
  }
`;