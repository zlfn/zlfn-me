import { defineConfig, transformerVariantGroup } from 'unocss'
import { presetWebFonts } from 'unocss'
import { presetUno } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				jetbrains: ['Jetbrains Mono', 'JetBrains+Mono'],
			}
		})
	],
	transformers: [
		transformerVariantGroup(),
	],
})
