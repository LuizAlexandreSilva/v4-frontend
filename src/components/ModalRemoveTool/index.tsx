import React, { useCallback, useState } from 'react'
import Modal from '../Modal'

import { Title, Footer, Strong } from './styles'
import { MdClose } from 'react-icons/md'
import { Tool } from '../../models/tool'
import api from '../../services/apiClient'

interface IModalProps {
  isOpen: boolean
  setIsOpen: () => void
  item: Tool
  onAction: Function
}

const ModalRemoveTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  item,
  onAction,
}) => {
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false)

  const handleConfirmation = useCallback(
    async (confirm: boolean, id?: number) => {
      console.log(id)
      if (confirm) {
        setIsButtonsDisabled(true)
        await api.delete(`tools/${id}`)
      }
      onAction(confirm)
      setIsButtonsDisabled(false)
    },
    [onAction],
  )

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
        <button
          type="button"
          onClick={() => handleConfirmation(false)}
          disabled={isButtonsDisabled}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => handleConfirmation(true, item.id)}
          disabled={isButtonsDisabled}
        >
          Yes, remove
        </button>
      </Footer>
    </Modal>
  )
}

export default ModalRemoveTool
