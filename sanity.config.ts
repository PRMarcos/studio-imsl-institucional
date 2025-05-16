import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from "sanity-shared"

import { structure } from './deskStructure'
import { colorInput } from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'imsl-institucional',

  projectId: '129trp1f',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), colorInput(),],

  schema: {
    types: schemaTypes,
  },
})
