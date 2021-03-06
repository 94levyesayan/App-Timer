import React from "react";
import TimerComponent from "../../Atoms/Timer";
import TimerModal from "../../Moleculs/TimerModal";
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import { getTimers } from "../../Store/selector";
import { Col, Row } from "antd";
import SuccessModal from "../../Moleculs/SuccessModal";

interface IProps { }

const MainLayout: React.FC<IProps> = () => {
    const timers = useSelector(getTimers);
    return (
        <Styles.MainContainer>
            <Styles.Title>
            Plese create your timer
            </Styles.Title>
            <Row justify="center">
                <Col lg={8} sm={24} xs={24}>
                    {timers.map((item: Timer, index: number) => {
                        return (
                            <Styles.CustomCard key={item.currentTime} hoverable>
                                <TimerComponent currentTimer={item} id={index} />
                            </Styles.CustomCard>
                        );
                    })}
                </Col>
            </Row>
            <TimerModal />
            <SuccessModal />
        </Styles.MainContainer>
    );
};

export default MainLayout;
