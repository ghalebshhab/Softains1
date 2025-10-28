import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="btn">Explore Our Website</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .btn {
    --color1: #111111;
    --color2: #222222;
    position: relative;
    perspective: 1000px;
    padding: 1em 2em;
    background: linear-gradient(var(--color1), var(--color2));
    border: none;
    outline: none;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #bdbdbd;
    text-shadow: 0 4px 8px #000;
    cursor: pointer;
    transform: rotateX(70deg) rotateZ(30deg);
    transform-style: preserve-3d;
    transition: transform 0.5s, font-size 0.3s, padding 0.3s;
    border-radius: 8px;
  }

  .btn::before {
    content: "";
    width: 100%;
    height: 15px;
    background-color: var(--color2);
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotateX(90deg);
    transform-origin: bottom;
  }

  .btn::after {
    content: "";
    width: 15px;
    height: 100%;
    background-color: var(--color1);
    position: absolute;
    top: 0;
    right: 0;
    transform: rotateY(-90deg);
    transform-origin: right;
  }

  .btn:hover {
    transform: rotateX(30deg) rotateZ(0deg);
  }

  @media (max-width: 1024px) {
    .btn {
      font-size: 18px;
      padding: 0.9em 1.8em;
      transform: rotateX(60deg) rotateZ(25deg);
    }
  }

  @media (max-width: 768px) {
    .btn {
      font-size: 16px;
      letter-spacing: 2px;
      padding: 0.8em 1.5em;
      transform: rotateX(50deg) rotateZ(20deg);
    }
  }

  @media (max-width: 480px) {
    .btn {
      font-size: 14px;
      padding: 0.7em 1.2em;
      transform: rotateX(40deg) rotateZ(15deg);
    }
  }
`;

export default Button;
