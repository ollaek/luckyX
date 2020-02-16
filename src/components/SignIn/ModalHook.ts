import { useState } from "react";


const useModalState = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return {
    modalVisability : show,
    onModalVisabilityChange : () => toggleModal()
  };
};

export { useModalState };
