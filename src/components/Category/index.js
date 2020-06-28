import React from 'react'
import { Anchor, Img } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Img src={cover} />
    {emoji}
  </Anchor>
)
