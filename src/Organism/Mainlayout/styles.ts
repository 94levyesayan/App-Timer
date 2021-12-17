import styled from "styled-components";
import { Card } from "antd";

export const MainContainer = styled.div`
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/4082638/pexels-photo-4082638.jpeg?cs=srgb&dl=pexels-fredrick-eankels-4082638.jpg&fm=jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px;
`;

export const CustomCard = styled(Card)`
    width: 100%;
    margin-bottom: 30px;
`;
export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: wheat;
    margin-bottom: 50px;
`;
