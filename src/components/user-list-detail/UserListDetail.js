import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { UserProfile } from "../user-profile/UserProfile";
import { Posts } from "../posts/Posts";
import { Header } from "../header/Header";

export const UserListDetail = () => {
  const param = useParams();

  const [userDetail, setUserDetail] = useState(null);
  const [postData, setPostData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [countryTime, setCountryTime] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${param?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetail(data);
      });
  }, [param]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((post) => {
        setPostData(post);
      });
  }, []);

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/timezone`).then((res) =>
      res.json().then((country) => setCountryData(country))
    );
  }, []);

  const getTime = (value) => {
    fetch(`http://worldtimeapi.org/api/timezone/${value}`)
      .then((res) => res.json())
      .then((time) => {
        setCountryTime(time);
      });
  };

  const postFilterData = postData.filter((i) => i.userId == userDetail?.id);

  return (
    <Container>
      <Header
        countryData={countryData}
        selectCountry={(value) => {
          getTime(value);
        }}
        countryTime={countryTime}
      />
      <UserProfile userDetail={userDetail} />
      <Posts data={postFilterData} />
    </Container>
  );
};
