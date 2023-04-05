import React, { useState } from 'react'
import Section from '@lib/Section'
import Modal from '@lib/Modal'
import Contacts from '@components/Main/AboutMe/Contacts'

const ContactMe = () => {
  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(true)
  }
  const closeModal = () => {
    setModalState(false)
  }

  return (
    <>
      <Section screenHeight={false}>
        <h2 className="heading-2">Contact Me</h2>
        <p className="m-auto text-center sm:w-1/2">
          Thank you for your interest. If you have any further questions or
          proposals, please feel free to contact me through any service that is
          convenient for you.
        </p>
        <p className="mx-auto mt-5 text-center sm:w-1/2 ">
          You can get the contact information in the Contacts block.
        </p>
        <button
          onClick={openModal}
          className="mx-auto mt-14 block rounded-full bg-primary py-2 px-6 text-lg shadow-md transition-all hover:shadow-none"
        >
          Contacts
        </button>
      </Section>

      <Modal isOpen={modalState} onClose={closeModal} title="Contacts">
        <Contacts extended />
      </Modal>
    </>
  )
}

export default ContactMe
