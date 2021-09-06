import React from "react";
import styled from "styled-components";
import Elephant from '../../../components/Svg/Icons/Elephant'

interface Props {}

const Container = styled.div`
background-color: transparent;
`;


const PanelFooter: React.FC<Props> = ({
}) => {

  return (
    <Container>
        <Elephant/>
    </Container>
  );
};

export default PanelFooter;
