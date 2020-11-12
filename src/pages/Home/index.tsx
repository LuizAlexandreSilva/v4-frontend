import React, { ChangeEvent, useCallback, useState } from 'react'
import Input from '../../components/Input'

import { FaSearch, FaPlus } from 'react-icons/fa'
import { Container, Head, SearchContainer, ToolList } from './styles'
import ToolItem from '../../components/ToolItem'
import { Tool } from '../../models/tool'
import ModalAdd from '../../components/ModalAddTool'
import ModalRemoveTool from '../../components/ModalRemoveTool'

const tools: Tool[] = [
  {
    name: 'Notion',
    description: 'All in one tool',
    tags: ['organization', 'planning'],
  },
]

const Home: React.FC = () => {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalRemoveIsOpen, setModalRemoveIsOpen] = useState(false)
  const [selectedTool, setSelectedTool] = useState<Tool>({} as Tool)
  const [searchText, setSearchText] = useState('')
  const [searchByTagsOnly, setSearchByTagsOnly] = useState(false)

  const handleSearch = useCallback(() => {
    console.log(searchText, searchByTagsOnly)
  }, [searchText, searchByTagsOnly])

  const toggleAddModal = useCallback(() => {
    setModalAddIsOpen(!modalAddIsOpen)
  }, [modalAddIsOpen])

  const toggleRemoveModal = useCallback(
    (tool: Tool) => {
      setSelectedTool(tool)
      setModalRemoveIsOpen(!modalRemoveIsOpen)
    },
    [modalRemoveIsOpen],
  )

  const handleRemove = useCallback(
    (confirm: boolean) => {
      setModalRemoveIsOpen(false)
      if (confirm) {
        console.log(`remover ${selectedTool.name}`)
      } else {
        console.log('cancelar')
      }
    },
    [selectedTool],
  )

  const handleSelectSearchTagsOnly = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.checked
      setSearchByTagsOnly(value)
    },
    [],
  )

  return (
    <Container>
      <ModalAdd
        isOpen={modalAddIsOpen}
        setIsOpen={toggleAddModal}
        handleSuccess={() => setModalAddIsOpen(false)}
      />
      <ModalRemoveTool
        isOpen={modalRemoveIsOpen}
        setIsOpen={() => toggleRemoveModal(selectedTool)}
        item={selectedTool}
        handleConfirmation={handleRemove}
      />
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>

      <main>
        <Head>
          <SearchContainer>
            <Input
              name="search"
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
          </SearchContainer>
          <button type="button" onClick={toggleAddModal}>
            <FaPlus />
            Add
          </button>
        </Head>
        <ToolList>
          {tools &&
            tools.map((tool) => (
              <ToolItem
                key={tool.name}
                tool={tool}
                onClick={() => toggleRemoveModal(tool)}
              />
            ))}
        </ToolList>
      </main>
    </Container>
  )
}

export default Home
