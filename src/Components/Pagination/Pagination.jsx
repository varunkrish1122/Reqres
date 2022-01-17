import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { PaginationContainer, PaginationBox } from "./Pagination.styled";
import { updatePageNumber } from "../../Store/Actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, numberOfPages } = useSelector(
    (state) => state?.pageInfo
  );
  const updatePageHandler = (index) => {
    dispatch(updatePageNumber(index + 1))
  }
  return (
    <PaginationContainer>
      {[...Array(numberOfPages)].map((data, index) => (
        <PaginationBox onClick={() => updatePageHandler(index)} status={currentPage === index + 1 ? 'active' : ''}>
          <span>{index + 1}</span>
        </PaginationBox>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
