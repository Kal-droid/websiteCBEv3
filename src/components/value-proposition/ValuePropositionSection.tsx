import React from 'react';
import { valuePropositions } from '../../data/business';
import Section from '../common/Section';
import ValuePropositionHeader from './ValuePropositionHeader';
import ValuePropositionGrid from './ValuePropositionGrid';

export default function ValuePropositionSection() {
  return (
    <Section className="bg-blue-600 text-white">
      <ValuePropositionHeader title="Our Unique Value Proposition" />
      <ValuePropositionGrid propositions={valuePropositions} />
    </Section>
  );
}