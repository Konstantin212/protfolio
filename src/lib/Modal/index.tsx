import React, { SyntheticEvent, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

interface Props {
  isOpen: boolean
  title: string
  onClose(): void
  children: React.ReactElement
}

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  const nodeRef = useRef(null)

  const stopBubbling = (e: SyntheticEvent) => e.stopPropagation()

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={200}
      classNames="my-node"
    >
      <div
        ref={nodeRef}
        className="fixed inset-0 -z-10 flex items-center justify-center bg-gray-500/75 p-5 opacity-0"
        onClick={onClose}
      >
        <div
          className="w-full rounded bg-white shadow-2xl md:w-1/2"
          onClick={stopBubbling}
        >
          <div className="flex items-center justify-between py-3 px-5 text-lg shadow">
            {title}
            <button onClick={onClose} title="Close Modal">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
              </svg>
            </button>
          </div>
          <div className="py-3 px-5">{children}</div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Modal
