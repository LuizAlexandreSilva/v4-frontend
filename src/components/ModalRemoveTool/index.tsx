import React from 'react'
import Modal from '../Modal'

import { Title, Footer, Strong } from './styles'
import { MdClose } from 'react-icons/md'
import { Tool } from '../../models/tool'

interface IModalProps {
  isOpen: boolean
  setIsOpen: () => void
  item: Tool
  handleConfirmation: Function
}

const ModalRemoveTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  item,
  handleConfirmation,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Title>
        <MdClose />
        Remove tool
      </Title>
      <span>
        Are you sure you want to remove <Strong>{item.name}</Strong>?
      </span>
      <Footer>
        <button type="button" onClick={() => handleConfirmation(false)}>
          Cancel
        </button>
        <button type="button" onClick={() => handleConfirmation(true)}>
          Yes, remove
        </button>
      </Footer>
    </Modal>
  )
}

export default ModalRemoveTool
