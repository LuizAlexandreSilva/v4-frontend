import React from 'react'

import { MdClose } from 'react-icons/md'
import { Tool } from '../../models/tool'
import { Container, Head, Body } from './styles'

interface ToolProps {
  tool: Tool
  onClick: Function
}

const ToolItem: React.FC<ToolProps> = ({ tool, onClick }) => {
  return (
    <Container>
      <Head>
        <a href="#">{tool.name}</a>
        <span onClick={() => onClick()}>
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
