'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useEffect, useState, useRef } from 'react';

export default function CreateUser({ setUser }) {
  const nameRef = useRef('');
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  useEffect(() => {
    props.setOpenModal('form-elements');
  }, []);

  const handleClick = () => {
    const name = nameRef.current.value;
    setUser((prevUser) => ({
      ...prevUser,
      name: name,
      isLoggedIn: true
    }));
  };

  return (
    <>
      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Good Name" />
              </div>
              <TextInput id="name" placeholder="name" ref={nameRef} required />
            </div>
            <div className="w-full">
              <Button onClick={handleClick}>Sign Up</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
