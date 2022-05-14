import React from "react";
import { Button, Buttonwraper } from "./Styles";
const LoadMore = ({ setPages, pages }) => {
  return (
    <>
      <Buttonwraper>
        <Button onClick={() => setPages((prev) => prev + 1)}> LOAD MORE</Button>
        {pages > 1 && (
          <Button onClick={() => setPages((prev) => prev - 1)}>
            {" "}
            LOAD LESS
          </Button>
        )}
      </Buttonwraper>
    </>
  );
};

export default LoadMore;
