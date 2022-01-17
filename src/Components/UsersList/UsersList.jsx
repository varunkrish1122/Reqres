import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {
  Card,
  CardHeader,
  SearchInput,
  CardContent,
  CardFooter,
  StyledTable,
  StyledCol,
  StyledRow,
} from "./UsersList.styled";
import UserList from "../UserList/UserList";
import Pagination from "../Pagination/Pagination";
import { updateNumberOfPages } from "../../Store/Actions";
const UsersList = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state?.pageInfo);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilterdUsers] = useState([])
  const onChangeHandler = (event) => {
    const value = event.target.value || "";
    const newUsers = users.filter(({first_name, last_name, email}) => {
      return first_name.includes(value) || last_name.includes(value) || email.includes(value)
    });
    setFilterdUsers(newUsers)
  };
  useEffect(() => {
    const config = {
      params: {
        per_page: 4,
        page: currentPage,
      },
    };
    axios.get("https://reqres.in/api/users", config).then((response) => {
      const { data = {} } = response;
      const { data: usersList = [], total_pages } = data || {};
      dispatch(updateNumberOfPages(total_pages))
      setUsers(usersList);
      setFilterdUsers(usersList);
    });
  }, [currentPage]);
  return (
    <>
      <Card>
        <CardHeader>
          <h4>List of Users</h4>
          <SearchInput
            placeholder="Search Here..."
            onChange={onChangeHandler}
          />
        </CardHeader>
        <CardContent>
          <StyledTable>
            <StyledRow type="header">
              <StyledCol column={1}></StyledCol>
              <StyledCol column={2}>Name</StyledCol>
              <StyledCol column={3}>Email</StyledCol>
            </StyledRow>
            {filteredUsers.map((userObj, index) => (
              <UserList key={`user-${index}`} {...userObj} />
            ))}
          </StyledTable>
        </CardContent>
        <CardFooter>
          <Pagination />
        </CardFooter>
      </Card>
    </>
  );
};

export default UsersList;
