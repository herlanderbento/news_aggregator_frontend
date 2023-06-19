import { FormEvent, useState } from "react";
import { Modal } from "reactstrap";

import { Input } from "./input";
import { Button } from "./button";

import "./styles/modal.scss";

type SignUpModalProps = {
  isOpenSignUpModal: boolean;
  toggleSignUpModal: () => void;
};

export function SignUpModal(props: SignUpModalProps) {
  const [focusAfterClose, setFocusAfterClose] = useState(true);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFocusAfterClose(false);
  }

  return (
    <Modal
      returnFocusAfterClose={focusAfterClose}
      isOpen={props.isOpenSignUpModal}
      className="custom-modal-dialog"
    >
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title" id="exampleModalLabel">
            <h4> Sign Up</h4>
            <p>Malesuada egestas nunc vestibulum</p>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={props.toggleSignUpModal}
          ></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <Input label="Your name" placeholder="Your name" type="text" />

            <Input label="Your email" placeholder="Your email" type="email" />
            <Input
              label="Your password"
              placeholder="Your password"
              type="password"
              isPassword={true}
            />
          </div>

          <div className="model-footer">
            <Button variant="primary">Sing In</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
