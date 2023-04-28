import React from "react";
import styled from "styled-components";
export const TableProducts = ({
  store,
  incrementProductHandler,
  decrementmentProductHandler,
  removeProductHandler,
}) => {
  const totalPrice = store.map((item) => {
    if (item.quantiti === 0) {
      const result = { ...item, price: (item.price = 0) };
      return result.price;
    } else {
      return item.price;
    }
  });
  const resultTotal = totalPrice.reduce((a, b) => a + b, 0);
  return (
    <Container>
      <div>
        <Table>
          <Thead>
            <p className="id">#</p>
            <p>Product</p>
            <p style={{ color: "#004d7a" }}> Product Name</p>
            <p style={{ color: "#a8eb12" }}>Price</p>
            <p style={{ color: "#a8eb12" }}>Quantity</p>
            <p style={{ color: "#a8eb12" }}>Remove</p>
          </Thead>
          <ol>
            {store.map((item, index) => {
              return (
                item.quantiti !== 0 && (
                  <li>
                    <Tbody className="id" key={item.id}>
                      {/* <p>{index + 1} </p> */}
                      <TImg>
                        <img src={item.url} />
                      </TImg>
                      <div>{item.productname} </div>
                      <div>{item.price} </div>
                      <ContainerCount>
                        <ButtonCount
                          onClick={() => decrementmentProductHandler(item.id)}
                        >
                          -
                        </ButtonCount>
                        <span>{item.quantiti} </span>
                        <ButtonCount
                          onClick={() => incrementProductHandler(item.id)}
                        >
                          +
                        </ButtonCount>
                      </ContainerCount>
                      <ButtonRemove
                        onClick={() => removeProductHandler(item.id)}
                      >
                        Remove
                      </ButtonRemove>
                    </Tbody>
                  </li>
                )
              );
            })}
          </ol>
        </Table>
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "3rem", color: "#a8eb12" }}>
            TOTAL:{resultTotal}{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
margin-left:25rem;
  margin-top: 20px;
  width: 60%;
  height:10px
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-image: linear-gradient(
    to left,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
`;
const Thead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 1.6rem;
  font-weight: 600;
  border-top: 3px solid #dcdcdc;

  .id {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: -10;
  }

  p {
    width: 200px;
    height: 20px;
    display: flex;
    justify-content: center;
  }
`;
const TImg = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 95px;
    height: 76px;
    object-fit: contain;
  }
`;
const Tbody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 1.6rem;
  font-weight: 600;
  border-top: 3px solid #dcdcdc;
  .id {
    width: 100px;
    font-weight: 600;
  }
  div {
    width: 240px;
  }
`;
const ContainerCount = styled.div`
  display: flex;
  gap: 10px;
`;
const ButtonCount = styled.button`
  padding: 10px;
  background-color: #19a1b7;
  color: #fff;
  border-radius: 4px;
  border: none;
`;
const ButtonRemove = styled.button`
  font-size: 15px;
  font-family: Arial;
  width: 140px;
  height: 50px;
  border-width: 1px;
  color: #306108;
  border-color: #268a16;
  font-weight: bold;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: inset 0px 1px 0px 0px #caefab;
  text-shadow: inset 0px 1px 0px #aade7c;
  background: linear-gradient(#77d42a, #5cb811);
`;
