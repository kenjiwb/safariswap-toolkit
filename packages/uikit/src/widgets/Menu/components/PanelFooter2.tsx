import React from "react";
import styled from "styled-components";
import Elephant from "../../../components/Svg/Icons/Elephant";

const Container = styled.div`
  background-color: transparent;
`;

const PanelFooter: React.FC = () => (
  <Container>
    <Elephant />
  </Container>
);

export default PanelFooter;
