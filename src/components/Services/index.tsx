import React from 'react'
import ServicesItem from './service'
import { offsets, services } from 'data/services'

export default function MainService() {
  const NUM_ITEMS = 4
  return (
    <ServicesItem services={services.slice(0, NUM_ITEMS)} offsets={offsets.slice(0, NUM_ITEMS)} rangeStart={0} rangeEnd={1} />
  )
}
