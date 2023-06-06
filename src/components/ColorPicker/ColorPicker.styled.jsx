import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
`

const Heading = styled.h2`
  line-height: 1.3;
`

const Option = styled.button`
   display: inline-block;
  width: 64px;
  height: 64px;
  margin: 6px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;
`

const ActiveOption = styled.button`
  //composes: ${Option};

  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 6px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transform: scale(1.2);
`

export { Container, Heading, Option, ActiveOption}