import React, { useRef } from "react";
import { Statistic } from "antd";
import { useDispatch } from "react-redux";
import { setFilterTimer } from "../../Store/mainSlice";
import * as Styles from "./styles";
import { PlayCircleTwoTone, PauseCircleTwoTone } from '@ant-design/icons';

interface IPropsTimer {
    currentTimer: any;
    id: number;
}

const TimerComponent: React.FC<IPropsTimer> = ({ currentTimer, id }) => {
    const dispatch = useDispatch();
    const { Countdown } = Statistic;
    const deadline = Date.now() + currentTimer.currentTime * 60000;

    function onFinish() {
        dispatch(setFilterTimer(id));
    }

    const clockRef = useRef<HTMLDivElement | any>();
    const handlePause = () => {
        clockRef.current.stopTimer()
    };
    const handlePlay = () => {
        clockRef.current.startTimer()
    }

    return (
        <Styles.TimerContainer>
            <Countdown
                title={currentTimer.title}
                value={deadline}
                format="HH:mm:ss:SSS"
                ref={clockRef}
                onFinish={onFinish}
            />
            <Styles.PlayPause>
                <PlayCircleTwoTone onClick={handlePlay} style={{ fontSize: '250%' }} />
                <PauseCircleTwoTone onClick={handlePause} style={{ fontSize: '250%' }} />
            </Styles.PlayPause>
        </Styles.TimerContainer>
    );
};

export default TimerComponent;
