import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ModalNotification() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const cancelModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen} onCancel={cancelModal} footer={false} centered>
      <div>Please log in to use the service</div>
      <div>
        <Button onClick={() => navigate("/")}>Log In</Button>
        <Button onClick={cancelModal}>Cancel</Button>
      </div>
    </Modal>
  );
}
