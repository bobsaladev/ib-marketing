import { Component } from '@/components/ui/hero'
import {
  PainPoints,
  QueHacemos,
  NuestroProceso,
  CasosExito,
  CtaSection,
} from '@/components/sections'

export default function App() {
  return (
    <div className="w-full h-full min-h-screen">
      <Component />
      <PainPoints />
      <QueHacemos />
      <NuestroProceso />
      <CasosExito />
      <CtaSection />
    </div>
  )
}
