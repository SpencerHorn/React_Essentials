import CoreConcepts from './coreConcepts'
import { CORE_CONCEPTS } from '../../data'
import Section from '../section'

export default function CoreConcept() {
  return (
    <Section title='Core Concepts' id='core-concepts'>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => <CoreConcepts key={conceptItem.title} {...conceptItem} /> )}
      </ul>
    </Section>
  )
}