import React from 'react';
import TransformationSection from '../components/transformation/TransformationSection';
import ValuePyramid from '../components/value-proposition/ValuePyramid';
import PageLayout from '../components/layout/PageLayout';

export default function VisionPage() {
  return (
    <PageLayout>
      <ValuePyramid />
      <TransformationSection />
    </PageLayout>
  );
}