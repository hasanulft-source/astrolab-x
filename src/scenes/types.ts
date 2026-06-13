import type { ComponentType } from 'react'
export interface Scene {
  id: string; num: string; stage: string; time: string
  nextLabel?: string; Component: ComponentType
}
