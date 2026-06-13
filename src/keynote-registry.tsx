import type { FC } from 'react'
import type { Beat, HeroProps } from './shell/Keynote'
import { MassaJenisHero, massaJenisBeats } from './keynote/massa-jenis'

export interface KeynoteEntry { title: string; judul: string; beats: Beat[]; Hero: FC<HeroProps> }
export const KEYNOTES: Record<string, KeynoteEntry> = {
  'massa-jenis': { title: 'AstroLab X', judul: 'Massa Jenis', beats: massaJenisBeats, Hero: MassaJenisHero },
}
