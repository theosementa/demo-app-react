import { createFileRoute } from '@tanstack/react-router'
import { About } from '../epic/about/about.screen'

export const Route = createFileRoute("/about")({
  component: About,
})