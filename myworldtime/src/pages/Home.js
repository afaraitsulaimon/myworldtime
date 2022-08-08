import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <AllHolder>
        <InnerAllHolder>
          <TakeIt>
            <span>Take it</span>
          </TakeIt>

          <NextOne>
            <HolderOfThe>
              <div>
                <span>the</span>
              </div>
            </HolderOfThe>

            <ToAndOtherHolder>
              <ToAndLetStart>
                <div className="forTo">
                  <span>to</span>
                </div>
                <div className="forLetStart">
                  <span>
                    <LinkWorldTimer to="/select-location">
                      Let's start
                    </LinkWorldTimer>
                  </span>
                </div>
              </ToAndLetStart>

              <NextHolder>
                <span>next</span>
              </NextHolder>
            </ToAndOtherHolder>
          </NextOne>
          <LevelHolder>
            <span>levels</span>
          </LevelHolder>
        </InnerAllHolder>
      </AllHolder>

      <Circular></Circular>

      <Diamond1></Diamond1>

      <Diamond2></Diamond2>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid orange;
  border-radius: 5px;

  @media (max-width: 912px) and (min-width: 360px) {
    width: 100%;
    min-height: 90vh;
  }
`;

const AllHolder = styled.div`
  width: 100%;
  height: 80vh;
  color: #373b52;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mouse Memoirs", sans-serif;

  @media (max-width: 912px) and (min-width: 360px) {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Circular = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid orange;
  border-radius: 50%;
  position: absolute;
  top: 23em;
  left: 73em;

  @media (max-width: 912px) and (min-width: 360px) {
    width: 20px;
    height: 20px;
    border: 3px solid orange;

    top: 35em;
    left: 17em;
  }

 



`;

const Diamond1 = styled.div`
  width: 10px;
  height: 60px;
  background-color: orange;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: rotate(50deg);
  position: absolute;
  top: 2em;
  left: 3em;

  @media (max-width: 912px) and (min-width: 360px) {
    width: 5px;
    height: 20px;
    top: 86px;
    left: 1.5em;
  }





`;

const Diamond2 = styled.div`
  width: 10px;
  height: 60px;
  background-color: orange;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: absolute;
  transform: rotate(-50deg);
  top: 2em;
  left: 3em;

  @media (max-width: 912px) and (min-width: 360px) {
    width: 5px;
    height: 20px;
    top: 86px;
    left: 1.5em;
  }


 
`;



const InnerAllHolder = styled.div`
  position: relative;
  min-height: 100%;
`;

const TakeIt = styled.div`
  font-weight: 200;
  font-size: 7em;
  text-align: center;
  letter-spacing: 3px;

  @media (max-width: 912px) and (min-width: 360px) {
    font-size: 3em;
  }
`;

const NextOne = styled.div`
  font-weight: 400;
  display: flex;
  position: relative;
`;

const HolderOfThe = styled.div`
  background-color: white;
  width: 120px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #363b53;
  position: absolute;
  left: -4em;

  @media (max-width: 912px) and (min-width: 360px) {
    width: 70px;
    height: 50px;
    left: -2.5em;
  }

  div {
    width: 97%;
    height: 97%;
    background-color: #363b53;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    @media (max-width: 912px) and (min-width: 360px) {
      width: 97%;
      height: 97%;
    }

    span {
      font-weight: 400;
      font-size: 4em;
      color: white;

      @media (max-width: 912px) and (min-width: 360px) {
        font-size: 2.5em;
      }
    }
  }
`;

const ToAndOtherHolder = styled.div`
  font-weight: 400;
  position: absolute;
  left: 5em;

  @media (max-width: 912px) and (min-width: 360px) {
    left: 2.5em;
  }
`;

const ToAndLetStart = styled.div`
  font-weight: 400;
  display: flex;
  cursor: pointer;
  position: relative;

  .forTo {
    font-weight: 400;
    font-size: 5em;
    color: #363b53;
    position: absolute;
    top: -0.4em;
    left: -0.1em;

    @media (max-width: 912px) and (min-width: 360px) {
      font-weight: 200;
      font-size: 2.5em;
    }
  }

  .forLetStart {
    width: 120px;
    height: 40px;
    background-color: white;
    border: 1px solid #363b53;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 0.8em;
    color: #363b53;
    font-family: Helvetica, Arial, sans-serif;
    position: absolute;
    left: 4em;

    @media (max-width: 912px) and (min-width: 360px) {
      width: 80px;
      height: 20px;
      font-size: 0.6em;
      left: 3em;
    }
  }
`;

const NextHolder = styled.div`
  font-family: "Mouse Memoirs", sans-serif;

  font-weight: 400;
  font-size: 5em;
  color: #363b53;
  position: absolute;
  top: 0.3em;

  @media (max-width: 912px) and (min-width: 360px) {
    font-size: 2.5em;
  }
`;

const LevelHolder = styled.div`
  font-weight: 400;
  font-size: 6em;
  color: #363b53;
  letter-spacing: 2px;
  font-family: "Mouse Memoirs", sans-serif;
  position: absolute;
  top: 2.3em;
  left: 0.6em;

  @media (max-width: 912px) and (min-width: 360px) {
    font-size: 2.5em;
    top: 2.5em;
    left: 1em;
  }
`;

const LinkWorldTimer = styled(Link)`
  text-decoration: none;

  color: #373b52;
`;

export default Home;
