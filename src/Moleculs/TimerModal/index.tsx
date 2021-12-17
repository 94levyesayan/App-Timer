import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTimer } from "../../Store/mainSlice";
import * as Styled from "./styles";
import { UserOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { Modal, Button, Input } from "antd";

const TimerModal: React.FC = () => {
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setDate] = useState({ title: "", currentTime: "" });

  const showModal = () => {
    setDate({ title: "", currentTime: "" });
    setIsModalVisible(true);
  };

  const submitHandler = () => {
    dispatch(
      setTimer({
        title: data.title || "",
        currentTime: Number(data.currentTime) || 0,
      })
    );
  };

  const handleOk = () => {
    submitHandler();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const chengeHandler = (
    e: React.FormEvent<HTMLInputElement>,
    name: string
  ) => {
    const newValue = e.currentTarget.value;
    setDate({
      ...data,
      [name]: newValue,
    });
  };

  return (
    <>
    <Styled.ButtonWrapper>
      <Button type="primary" onClick={showModal}>
        Create new timer
      </Button>
      </Styled.ButtonWrapper>
      <Modal
        title=" Create new time"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Styled.ModalInner>
          <Input
            size="large"
            placeholder="Name"
            value={data.title}
            onChange={(event) => chengeHandler(event, "title")}
            prefix={<UserOutlined />}
          />
          <Input
            size="large"
            type="number"
            placeholder="min/sec"
            value={data.currentTime}
            onChange={(event) => chengeHandler(event, "currentTime")}
            prefix={<FieldTimeOutlined />}
          />
        </Styled.ModalInner>
      </Modal>
    </>
  );
};

export default TimerModal;
