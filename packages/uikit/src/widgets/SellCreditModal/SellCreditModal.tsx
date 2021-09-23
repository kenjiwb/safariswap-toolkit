import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { Button } from "../../components/Button";

interface SellCreditModalProps {
  onDismiss?: () => void;
}

const StyledModal = styled(Modal)`3
background-image: url('/images/gradient-603408f80d379f66929884.png');
padding:4px;

min-width: 280px;
max-width: 320px;
> :first-child {
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(239, 244, 245);
  background: linear-gradient(
111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%);
  background-image: linear-gradient(
111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%);
  border-bottom: 1px solid rgb(231, 227, 235);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(231, 227, 235);
  display: flex;
  padding: 12px 24px;

  h2 {
    color: rgb(40, 13, 95);
  }
}
> :nth-child(2) {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  background: #ffffff;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  padding: 24px;
}

.header {
  display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 8px;

    .sell {
      color: rgb(122, 110, 170);
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    .tickets {
      display: flex;
    -webkit-box-align: center;
    align-items: center;
    min-width: 70px;
    }

    .tickets-text {
      color: rgb(40, 13, 95);
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      margin-right: 4px;
    }
  }

    .cost-cake-container {
      display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 8px;
 
    }

    .text-subtle {
      color: rgb(122, 110, 170);
    font-weight: 400;
    line-height: 1.5;
    font-size: 14px;
    }

    .percentage {
      color: rgb(40, 13, 95);
      font-weight: 600;
      line-height: 1.5;
      margin-right: 4px;
      font-size: 14px;
    }

    .you-pay-container {
      display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-top: 1px solid rgb(231, 227, 235);
    padding-top: 8px;
    margin-bottom: 24px;
    }

    .you-pay-container > * {
      font-size: 16px;
    }

    .footer {
      color: rgb(122, 110, 170);
      font-weight: 400;
      line-height: 1.5;
      margin-top: 24px;
      font-size: 12px;
    }


    .enable-container {
      width: 100%;
      -webkit-box-align: center;
        align-items: center;
        border: 0px;
        border-radius: 16px;
        box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
        cursor: pointer;
        display: inline-flex;
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        -webkit-box-pack: center;
        justify-content: center;
        letter-spacing: 0.03em;
        line-height: 1;
        opacity: 1;
        outline: 0px;
        transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
        height: 48px;
        padding: 0px 24px;
        background-color: rgb(31, 199, 212);
        color: white;
        cursor: pointer;
    }

    .enable-container:hover {
      opacity: 0.65;
    }
    

    @media screen and (min-width: 852px)
    {
.enable-container {
    min-width: 160px;
}

}
.textbox {
  background-color: rgb(238, 234, 244);
  border: 1px solid rgb(215, 202, 236);
  border-radius: 16px;
  box-shadow: rgb(237 75 158) 0px 0px 0px 1px, rgb(237 75 158 / 20%) 0px 0px 0px 4px;
  padding: 8px 16px;

  .textbox-content {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }

  .textbox-value {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .textbox-credit {
    color: rgb(122, 110, 170);
    font-weight: 400;
    line-height: 1.5;
    font-size: 12px;
    text-align: right;
  }

  input::placeholder{
    color: rgb(122, 110, 170) !important;
  }

  .textbox-input {
    color: rgb(122, 110, 170) !important;

    background: transparent;
    border-radius: 0px !important;
    box-shadow: none !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    text-align: right;
    border: none !important;
    background-color: rgb(238, 234, 244);
    border-radius: 16px;
    box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
    color: rgb(40, 13, 95);
    display: block;
    font-size: 16px;
    height: 40px;
    outline: 0px;
    padding: 0px 16px;
    width: 100%;
    border: 1px solid rgb(215, 202, 236);
}
  }
}

.balance-container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin-top: 4px;
  margin-bottom: 12px;

  .balance-container-nested {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    flex-direction: column;
  }
  .error {
    color: rgb(237, 75, 158);
    font-weight: 400;
    line-height: 1.5;
    font-size: 12px;
  }
  .balance {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
}
`;

const SellCreditModal: React.FC<SellCreditModalProps> = ({ onDismiss = () => null }) => {
  return (
    <StyledModal title="Sell Credit" onDismiss={onDismiss}>
      <div className="header">
        <div className="sell">Sell:</div>
        <div className="tickets">
          <div className="tickets-text">Credit Token</div>
        </div>
      </div>
      <div className="textbox">
        <div className="textbox-content">
          <div>
            <div className="textbox-value">
              <input type="number" className="textbox-input" defaultValue="0" />
            </div>
            <div className="textbox-credit">~0.00 CREDIT</div>
          </div>
        </div>
      </div>
      <div className="balance-container">
        <div className="balance-container-nested">
          <div className="error">Insufficient CREDIT balance</div>
          <div className="balance">
            <div className="text-subtle" style={{ marginRight: 4, fontSize: 12 }}>
              CREDIT Balance:
            </div>
            <div className="text-subtle" style={{ fontSize: 12 }}>
              0.000
            </div>
          </div>
        </div>
      </div>
      <div className="you-pay-container">
        <div className="text-subtle">You sell</div>
        <div className="text-subtle" style={{ color: "rgb(40, 13, 95)" }}>
          ~0 CREDIT
        </div>
      </div>
      <div className="enable-container">
        <Button style={{ borderRadius: "unset" }} onClick={onDismiss}>
          {" "}
          Enable
        </Button>
      </div>
    </StyledModal>
  );
};

export default SellCreditModal;
