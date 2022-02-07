import React, { useState } from 'react'
import { InfoBook } from '../InfoBook'
import { Container, Content, Overlay, ModalClose, ModalBox, ContentInfoBook, ContentImageBook } from './styles'
import { ModalProps } from './types'



export const MyModal = ({ imgUrl, title, isOpen, onClose }: ModalProps) => isOpen ? (
    <Container>
      <Overlay />
      <ModalClose onClick={onClose}>
        <img src="/Close.png" alt="" />
      </ModalClose>
      <ModalBox>
        <Content>

          <ContentImageBook src="/Book.png" />
          <ContentInfoBook>
            <InfoBook></InfoBook>
          </ContentInfoBook>
        </Content>
      </ModalBox>
    </Container>
) : null
