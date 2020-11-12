import React, { useCallback, useRef } from 'react'

import { FaPlus } from 'react-icons/fa'
import { FormHandles } from '@unform/core'

import { Form, Title } from './styles'
import Modal from '../Modal'

interface IModalProps {
  isOpen: boolean
  setIsOpen: () => void
  handleSuccess: Function
}

const ModalAdd: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleSuccess,
}) => {
  const formRef = useRef<FormHandles>(null)

  // const handleSubmit = useCallback(
  //   async (data: ICredentials) => {
  //     try {
  //       formRef.current?.setErrors({})

  //       const schema = Yup.object().shape({
  //         username: Yup.string().required('Username required'),
  //         password: Yup.string().required('Password required'),
  //       })

  //       await schema.validate(data, {
  //         abortEarly: false,
  //       })

  //       await signIn({
  //         username: data.username,
  //         password: data.password,
  //       })
  //       setIsOpen()
  //     } catch (err) {
  //       if (err instanceof Yup.ValidationError) {
  //         const errors = getValidationErrors(err)

  //         formRef.current?.setErrors(errors)

  //         return
  //       }
  //       setIsOpen()
  //       addToast({
  //         type: 'error',
  //         title: 'Erro na autenticação',
  //         description: 'Ocorreu um erro ao fazer login. Cheque as credenciais.',
  //       })
  //     }
  //   },
  //   [setIsOpen, signIn, addToast],
  // )

  const handleSubmit = useCallback(() => {
    handleSuccess()
  }, [handleSuccess])

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Title>
        <FaPlus />
        Add new Tool
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">Tool Name</label>
        <input id="name" type="text" />
        <label htmlFor="link">Tool Link</label>
        <input id="link" type="text" />
        <label htmlFor="description">Tool Description</label>
        <input id="description" type="text" />
        <label htmlFor="tags">Tags</label>
        <input id="tags" type="text" />

        <button type="submit">Add tool</button>
      </Form>
    </Modal>
  )
}

export default ModalAdd
