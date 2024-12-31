import { useState } from 'react';
import TabButton from './tabButton'
import Section from '../section';
import Tabs from '../tabs';
import { EXAMPLES } from '../../data';

export default function Examples() {
    const [ selectedExample, setSelectedExample ] = useState()
  
    function handleClick(buttonClicked) {
      setSelectedExample(buttonClicked)
  }

  let tabContent = <p>Please select an example above.</p>

  if (selectedExample) {
    tabContent = (
      <div id='tab-content'>
       <h3>{EXAMPLES[selectedExample].title}</h3>
        <p>{EXAMPLES[selectedExample].description}</p>
        <pre>
          <code>{EXAMPLES[selectedExample].code}</code>
        </pre>
      </div>
    )
  }
  
  return (
    <Section title='Examples' id='examples'>
      <Tabs
        buttons={
        <>
          <TabButton isSelected={selectedExample === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={selectedExample === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedExample === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedExample === 'state'} onClick={() => handleClick('state')}>State</TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  )
}