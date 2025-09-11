import React from 'react'

function BlurText({ children }) {
  let indexCounter = 0

  const wrapNode = (node) => {
    const elements = []

    const pushSpan = (content) => {
      const currentIndex = indexCounter
      elements.push(
        <span className="blur-char" style={{ '--i': currentIndex }} key={`bchar-${currentIndex}`}>
          {content}
        </span>
      )
      indexCounter += 1
    }

    if (typeof node === 'string') {
      for (const ch of node) pushSpan(ch === ' ' ? '\u00A0' : ch)
    } else if (Array.isArray(node)) {
      node.forEach((child) => {
        elements.push(...wrapNode(child))
      })
    } else if (React.isValidElement(node)) {
      pushSpan(React.cloneElement(node))
    }

    return elements
  }

  const content = React.Children.toArray(children).flatMap((child) => wrapNode(child))

  return <span className="blur-text">{content}</span>
}

export default BlurText

