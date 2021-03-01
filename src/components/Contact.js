import { useState } from 'react'
import styled from 'styled-components'

import { baseFont, enFont, jpFont, tabletSize } from '../styles'
import Notification from './Notification'

const S = {}

const Contact = () => {
  const formApi = 'https://script.google.com/macros/s/AKfycbyqlI9VMfFwHiLnHP9AMbm87v-s_wNfxWwwJPEDWBTImFwNo4MnIGxD/exec'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!(name && email && message)) return

    setDisabled(true)
    setShowNotification(false)

    fetch(formApi, {
      method: 'POST',
      body: new URLSearchParams({ name, email, message })
    }).then(() => {
      setName('')
      setEmail('')
      setMessage('')
      setDisabled(false)
      setShowNotification(true)
      document.getElementById('js_contact').reset()
    })
  }

  return (
    <S.Form id="js_contact" onSubmit={handleSubmit}>
      <S.Title>Contact</S.Title>
      <S.FormCtrl>
        <S.Label htmlFor="js_contact_name">名前</S.Label>
        <S.Input
          id="js_contact_name"
          type="text"
          value={name}
          onInput={(e) => setName(e.target.value)}
          disabled={disabled}
          required
        />
      </S.FormCtrl>
      <S.FormCtrl>
        <S.Label htmlFor="js_contact_email">メールアドレス</S.Label>
        <S.Input
          id="js_contact_email"
          type="email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          disabled={disabled}
          required
        />
      </S.FormCtrl>
      <S.FormCtrl>
        <S.Label htmlFor="js_contact_message">メッセージ</S.Label>
        <S.Textarea
          id="js_contact_message"
          rows="12"
          value={message}
          onInput={(e) => setMessage(e.target.value)}
          disabled={disabled}
          required
        />
      </S.FormCtrl>
      <S.Button disabled={disabled}>
        {disabled ? (
          <div className="sk-pulse" style={{
            margin: 'auto'
          }}></div>
        ) : <span>送信</span>}
      </S.Button>
      {showNotification && <Notification>送信が完了しました</Notification>}
    </S.Form>
  )
}

export default Contact

S.Form = styled.form`
  max-width: 624px;
  padding: 0 32px;
  padding-top: 64px;
  padding-bottom: 32px;
  margin: 0 auto;
`
S.Title = styled.h2`
  ${enFont}
  font-size: 40px;
  text-align: center;
  padding-bottom: 32px;
`
S.FormCtrl = styled.div`
  padding-bottom: 16px;
`
S.Label = styled.label`
  ${jpFont}
  display: block;
  padding-bottom: 8px;
`
S.Input = styled.input`
  ${baseFont}
  display: block;
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 12px;
  &:-webkit-autofill::first-line { font-size: 1rem; }
  &:focus {
    outline: none;
    border-color: #b4c1e2;
    box-shadow: 0 0 0 2px #b4c1e2;
  }
`
S.Textarea = styled.textarea`
  ${baseFont}
  display: block;
  width: 100%;
  resize: vertical;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 12px;
  line-height: 1.5rem;
  &:focus {
    outline: none;
    border-color: #b4c1e2;
    box-shadow: 0 0 0 2px #b4c1e2;
  }
`
S.Button = styled.button`
  ${jpFont}
  color: #fff;
  background: #6F7EA5;
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
  @media screen and (min-width: ${tabletSize}) {
    width: 120px;
  }
  &:hover,
  &:disabled {
    background: #515f7e;
  }
  &:focus {
    outline: none;
    border-color: #b4c1e2;
    box-shadow: 0 0 0 2px #b4c1e2;
  }
`
