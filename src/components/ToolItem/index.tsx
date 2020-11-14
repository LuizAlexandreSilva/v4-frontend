import React from 'react'

import { MdClose } from 'react-icons/md'
import { Tool } from '../../models/tool'
import { Container, Head, Body } from './styles'

interface ToolProps {
  tool: Tool
  handleClickRemove: Function
}

const ToolItem: React.FC<ToolProps> = ({ tool, handleClickRemove }) => {
  return (
    <Container>
      <Head>
        <a href={tool.link} target="_blank" rel="noreferrer">
          {tool.name}
        </a>
        <span onClick={() => handleClickRemove()}>
          <MdClose />
          remove
        </span>
      </Head>
      <Body>
        <p>{tool.description}</p>
        {tool.tags &&
          tool.tags.map((tag) => <strong key={tag}>#{tag} </strong>)}
      </Body>
    </Container>
  )
}

export default ToolItem
