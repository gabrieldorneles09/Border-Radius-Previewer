import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PreviewContainer = styled.div`
  height: 550px;
  width: 550px;
  border: 2px solid #4200ff;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 550px;
    width: 550px;
    border-radius: 50%;
    background: #6663f0;
  }
`;

export const BorderRadiusValues = styled.div`
  display: flex;
  padding-top: 80px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div:first-child,
  div:nth-child(2) {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input {
      background: #8673d0;
      margin: 25px;
      padding: 10px;
      border-radius: 10px;
      color: #fff;
      font-weight: 500;
      width: 50px;
      border: 0;
    }
  }

  div:last-child {
    span:first-child {
      background: #5f6fd0;
      color: #fff;
      padding: 10px;
      border-radius: 15px 0 0 15px;
    }

    span:last-child {
      background: #001e8a;
      color: #fff;
      padding: 10px 10px 10px 7px;
      border-radius: 0 15px 15px 0;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background: #051a66;
      }
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  height: 550px;
  width: 550px;
  flex-direction: column;
  margin-left: 20px;
  justify-content: space-between;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  img {
    margin: 20px;
  }
`;
