'use strict'

require('./index.css')

const contactForm = document.getElementById('contactFormId')
if (contactForm != null) {
  contactForm.addEventListener('submit', sendContact)
}

function requestToHyperForm (data) {
  return fetch('https://hyperform.jp/api/async/MwGT1ylT/complete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function sendContact (e) {
  e.preventDefault()
  const elements = Array.from(e.target.elements)
  const values = []
  for (const element of elements) {
    element.disabled = true
    values.push(element.value)
  }

  requestToHyperForm({
    name: values[0],
    email: values[1],
    body: values[2]
  }).then(() => {
    const successTemplate = document.getElementById('successTemplateId')
    const successNode = successTemplate.content.cloneNode(true)
    contactForm.replaceWith(successNode)
  }).catch(() => {
    const errorTemplate = document.getElementById('errorTemplateId')
    const errorNode = errorTemplate.content.cloneNode(true)
    contactForm.replaceWith(errorNode)
  })
}
