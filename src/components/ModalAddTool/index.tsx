import React, { useCallback, useRef, useState } from 'react'
import * as Yup from 'yup'
import { FaPlus } from 'react-icons/fa'
import { FormHandles } from '@unform/core'

import { Form, Title } from './styles'
import Modal from '../Modal'
import Input from '../Input'
import api from '../../services/apiClient'

interface IModalProps {
  isOpen: boolean
  setIsOpen: () => void
  handleSuccess: Function
}

interface ToolFormData {
  name: string
  link: string
  description: string
  tags: string | string[]
}

const ModalAdd: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleSuccess,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: ToolFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          title: Yup.string().required('Title is required'),
          link: Yup.string().required('Link is required'),
          tags: Yup.string().required('Tags are required'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        setIsButtonDisabled(true)

        data.tags = data.tags.toString().split(' ')

        await api.post('/tools', data)
        setIsOpen()
        handleSuccess()
      } catch (err) {
        const validationErrors: any = {}
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message
          })
          formRef.current?.setErrors(validationErrors)
        }
      } finally {
        setIsButtonDisabled(false)
      }
    },
    [setIsOpen, handleSuccess],
  )

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Title>
        <FaPlus />
        Add new Tool
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="title">Tool Name</label>
        <Input id="title" name="title" type="text" />

        <label htmlFor="link">Tool Link</label>
        <Input id="link" name="link" type="text" />

        <label htmlFor="description">Tool Description</label>
        <Input id="description" name="description" type="text" />

        <label htmlFor="tags">Tags</label>
        <Input id="tags" name="tags" type="text" />

        <button type="submit" disabled={isButtonDisabled}>
          Add tool
        </button>
      </Form>
    </Modal>
  )
}

export default ModalAdd
