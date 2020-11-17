import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Input from '../../components/Input'

import { FaSearch, FaPlus } from 'react-icons/fa'
import {
  Container,
  Head,
  SearchContainer,
  ToolList,
  LoadingContainer,
} from './styles'
import ToolItem from '../../components/ToolItem'
import { Tool } from '../../models/tool'
import ModalAdd from '../../components/ModalAddTool'
import ModalRemoveTool from '../../components/ModalRemoveTool'
import api from '../../services/apiClient'
import { Form } from '@unform/web'
import { toast } from 'react-toastify'

const Home: React.FC = () => {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalRemoveIsOpen, setModalRemoveIsOpen] = useState(false)
  const [selectedTool, setSelectedTool] = useState<Tool>({} as Tool)
  const [searchText, setSearchText] = useState('')
  const [searchByTagsOnly, setSearchByTagsOnly] = useState(false)
  const [tools, setTools] = useState<Tool[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const loadTools = useCallback(
    (searchText?: string, searchByTagsOnly?: boolean) => {
      setIsLoading(true)
      api
        .get('/tools', {
          params: {
            tag: searchText,
            tagsOnly: searchByTagsOnly,
          },
        })
        .then((response) => {
          setTools(response.data)
        })
        .finally(() => setIsLoading(false))
    },
    [],
  )

  useEffect(() => {
    loadTools()
  }, [loadTools])

  const handleSearch = useCallback(() => {
    loadTools(searchText, searchByTagsOnly)
  }, [loadTools, searchText, searchByTagsOnly])

  const toggleAddModal = useCallback(() => {
    setModalAddIsOpen(!modalAddIsOpen)
  }, [modalAddIsOpen])

  const toggleRemoveModal = useCallback(() => {
    setModalRemoveIsOpen(!modalRemoveIsOpen)
  }, [modalRemoveIsOpen])

  const removeTool = useCallback(
    (tool: Tool) => {
      setSelectedTool(tool)
      setModalRemoveIsOpen(true)
    },
    [setModalRemoveIsOpen],
  )

  const handleRemove = useCallback(
    async (confirm: boolean) => {
      setSearchText('')
      if (confirm) loadTools()

      toast.success('Tool removed successfully!')

      setModalRemoveIsOpen(false)
    },
    [loadTools],
  )

  const handleSelectSearchTagsOnly = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.checked
      setSearchByTagsOnly(value)
    },
    [],
  )

  const handleAdd = useCallback(() => {
    loadTools()

    toast.success('Tool added successfully!')
  }, [loadTools])

  return (
    <Container>
      <ModalAdd
        isOpen={modalAddIsOpen}
        setIsOpen={toggleAddModal}
        handleSuccess={handleAdd}
      />
      <ModalRemoveTool
        isOpen={modalRemoveIsOpen}
        setIsOpen={() => toggleRemoveModal()}
        item={selectedTool}
        onAction={handleRemove}
      />
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>

      <main>
        <Head>
          <SearchContainer>
            <Form onSubmit={() => {}}>
              <Input
                name="test"
                icon={FaSearch}
                buttonText="Search"
                handleButtonClick={handleSearch}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <input
                type="checkbox"
                checked={searchByTagsOnly}
                onChange={handleSelectSearchTagsOnly}
              />
              <label>search in tags only</label>
            </Form>
          </SearchContainer>
          <button type="button" onClick={toggleAddModal}>
            <FaPlus />
            Add
          </button>
        </Head>
        {isLoading && (
          <LoadingContainer>
            <strong>Loading...</strong>
          </LoadingContainer>
        )}
        {!isLoading && !tools.length && (
          <LoadingContainer>
            <strong>No data found.</strong>
          </LoadingContainer>
        )}
        <ToolList>
          {tools &&
            tools.map((tool) => (
              <ToolItem
                key={tool.name}
                tool={tool}
                handleClickRemove={() => removeTool(tool)}
              />
            ))}
        </ToolList>
      </main>
    </Container>
  )
}

export default Home
