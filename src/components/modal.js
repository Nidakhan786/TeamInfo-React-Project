import React, { forwardRef, useImperativeHandle } from "react";
import "antd/lib/modal/style/index.css";
import axios from "axios";
import TextInput from "./TextInput";
import Modal from "react-modal";
import styles from "../css/modal.module.scss";
import { generateErrorToast, generateSuccessToast } from "../utils/toast/index";

const ModalForm = forwardRef((props, ref) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "20px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
    },
  };

  const [visible, setVisible] = React.useState(false);
  useImperativeHandle(ref, () => {
    return {
      openModal: () => showModal(),
      onCancel: () => onCancel(),
    };
  });

  const showModal = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
    console.log(visible);
  };

  return (
    <div className="modalcontainer">
      <Modal
        isOpen={visible}
        style={customStyles}
        onRequestClose={() => setVisible(false)}
      >
        {props.children}
      </Modal>
    </div>
  );
});

export default ModalForm;
