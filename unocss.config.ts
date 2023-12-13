import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})