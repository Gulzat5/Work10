import React from "react";
import styled from "styled-components";

export const Product = ({ store, addProductHandler }) => {
  return (
    <Container>
      <Ul>
        {store.map((item) => (
          <Li key={item.id}>
            <ImgContainer>
              <img src={item.url} />
            </ImgContainer>
            <DataProductContainer>
              <ProductText>
                {item.productname}-Som {item.staticprice}{" "}
              </ProductText>
              <Button
                disabled={item.quantiti > 0}
                onClick={() => addProductHandler(item.id)}
              >
                Add
              </Button>
            </DataProductContainer>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Li = styled.li`
  list-style: none;
  width: 200px;
  height: 310px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.259);
`;
const ImgContainer = styled.div`
  width: 199px;
  height: 170px;
  border-bottom: 1px solid #dcdcdc;
  img {
    width: 100%;
    height: 100%;
  }
`;
const DataProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;
const Button = styled.button`
  font-size: 15px;
  font-family: Arial;
  width: 140px;
  height: 50px;
  border-width: 1px;
  color: #fff;
  border-color: #4e6096;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 0px 2px #9fb4f2;
  text-shadow: 0px 1px 0px #283966;
  background: linear-gradient(rgb(120, 146, 194), #476e9e);

  &:hover {
    backgroundcolor: #9fb2eb;
  }
`;
