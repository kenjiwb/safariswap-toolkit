/* eslint-disable react/require-default-props */
/* eslint-disable consistent-return */
/* eslint-disable prefer-template */
import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import ModalActions from "./ModalActions";
import { Modal as DefaultModal } from "../Modal";
import { Button } from "../../components/Button";
import { Card, CardBody, CardFooter } from "../../components/Card";
import {
  ArrowBackIcon as DefaultArrowBackIcon,
  ArrowForwardIcon as DefaultArrowForwardIcon,
} from "../../components/Svg";

interface NFT {
  text: string;
  name: string;
  variant: string;
  color: string;
  img: string;
}

interface Props {
  title?: string;
  totalNFT: number;
  NFTInventory: any;
  onDismiss?: () => void;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const StyledCardContent = styled.div`
  align-items: start;

  @media screen and (max-width: 768px) {
    flex-basis: 50%;
  }
  @media screen and (max-width: 576px) {
    flex-basis: 100%;
  }
  flex-basis: 33.3%;

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .details-description {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }
`;
const Modal = styled(DefaultModal)`
transition: display 2s linear 1s;
overflow: auto;
background: ${({ theme }) => theme.colors.safariGreen3}; 
max-width: 900px;
> :nth-child(1) {
  padding-top: 4px;
  border-bottom: none;
  padding-bottom: 0px;
}
  > :nth-child(2) {
    padding-top: 0px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 4px;
    border-bottom: none;
  } 
  }

  .ModalActions__StyledModalActions-sc-1gsjd9w-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

animation: popup 0.6s 0.2s ease forwards;
position: relative;
opacity: 0;
margin: 1rem;
}
@keyframes popup {
0% {
  transform: scale(0.7);

  opacity: 0;
}
45% {
  transform: scale(1.05);
  opacity: 1;
}
80% {
  transform: scale(0.95);
  opacity: 1;
}
100% {
  transform: scale(1);
  opacity: 1;
}
}
`;

const PaginationContainer = styled.div`
  .pagination {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
  }

  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
  }

  .page-item.disabled .page-link {
    color: ${({ theme }) => theme.colors.primary};
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
  }

  .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
    border: 1px solid #dee2e6;
  }

  .page-link:hover {
    color: #0056b3;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }

  .page-link:focus {
    z-index: 2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .page-link:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
`;
const ArrowBackIcon = styled(DefaultArrowBackIcon)`
  position: absolute;
  left: -36px;
  color: #ffffff;
  font-size: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  fill: #ffffff;
`;

const ArrowForwardIcon = styled(DefaultArrowForwardIcon)`
  position: absolute;
  right: -36px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  fill: #ffffff;
`;

const renderNft = (inventoryList: NFT[], pageNumber: number) => {
  const startIndex = (pageNumber - 1) * 6;
  const lastIndex = pageNumber * 6;

  return inventoryList.slice(startIndex, lastIndex).map((NFT: NFT) => {
    const isLegend = NFT?.variant === "Legend";
    return (
      <StyledCardContent>
        <div>
          <Card
            className={"hover " + (isLegend ? "sad" : "")}
            style={{ background: "#15171a", margin: "0.4rem", borderRadius: "5px" }}
          >
            {" "}
            <CardBody style={{ borderRadius: "5px", padding: "10px", margin: "0" }}>
              <img style={{ borderRadius: "5px", maxWidth: "100%", height: "auto" }} src={NFT.img} alt="" />
            </CardBody>{" "}
            <CardFooter style={{ padding: "12px 16px 16px" }}>
              <p className="details">
                <span style={{ color: "#fff", fontSize: "16px", fontWeight: "bolder" }}>{NFT?.name}</span>
                <span
                  style={{
                    background: `${NFT?.color}`,
                    color: `${NFT?.text}`,
                    padding: "3px 7px",
                    borderRadius: "25px",
                    marginLeft: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {NFT?.variant}{" "}
                </span>
              </p>
            </CardFooter>
          </Card>
        </div>
      </StyledCardContent>
    );
  });
};

const NFTModal: React.FC<Props> = ({ title = "Total", totalNFT, NFTInventory, onDismiss = () => null }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handlePageChange = (pageNumber1: number) => {
    setPageNumber(pageNumber1);
  };

  const handleNext = () => {
    if (NFTInventory.length - (pageNumber - 1) * 6 <= 6) {
      return setPageNumber(1);
    }
    setPageNumber(pageNumber + 1);
  };

  const handlePrevious = () => {
    if (pageNumber === 1) {
      return setPageNumber(Math.ceil(NFTInventory.length / 6));
    }
    setPageNumber(pageNumber - 1);
  };

  return (
    <Modal title={`${title} ${totalNFT}`} onDismiss={onDismiss}>
      <Container>
        {renderNft(NFTInventory, pageNumber)}
        {NFTInventory.length > 6 && (
          <>
            <ArrowBackIcon onClick={handlePrevious} height="40" width="40" />
            <ArrowForwardIcon onClick={handleNext} height="40" width="40" />
          </>
        )}
      </Container>
      <ModalActions>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "4px",
            paddingRight: "4px",
            paddingLeft: "4px",
          }}
        >
          <PaginationContainer>
            <Pagination
              activePage={pageNumber}
              // hideNavigation={true}
              // hideFirstLastPages={true}
              itemClass="page-item"
              linkClass="page-link"
              itemsCountPerPage={6}
              totalItemsCount={NFTInventory.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </PaginationContainer>
          <Button onClick={onDismiss}>Ok</Button>
        </div>
      </ModalActions>
    </Modal>
  );
};

export default NFTModal;
