import { describe, it, expect, beforeEach, vi } from 'vitest' // SettingsView.spec.ts
import { mount, VueWrapper } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createTestingPinia } from '@pinia/testing' // Importez createTestingPinia

import SettingsView from '../../views/SettingsView.vue'
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

describe('SettingsView.vue', () => {
  let wrapper: VueWrapper
  let i18n: ReturnType<typeof createI18n>

  beforeEach(() => {
    // i18n setup
    i18n = createI18n({
      locale: 'en',
      messages: {
        en: {
          label: {
            settings: 'Settings',
            languageSettings: 'Language settings',
          },
        },
      },
    })

    // Configuration de Pinia
    const pinia = createTestingPinia({
      createSpy: vi.fn, // Configuration de createSpy avec vi.fn
    })

    // Mount the component with the i18n plugin
    wrapper = mount(SettingsView, {
      global: {
        plugins: [i18n, pinia],
      },
    })
  })

  it('should render the "Settings" title', async () => {
    expect(wrapper.text()).toContain('Settings')
  })

  it('should render the "Language settings" title', async () => {
    expect(wrapper.text()).toContain('Language settings')
  })

  it('should render the LocaleSwitcher component', async () => {
    expect(wrapper.findComponent(LocaleSwitcher).exists()).toBe(true)
  })

  it('should have the correct CSS classes for the title', async () => {
    expect(wrapper.find('h1').classes()).toContain('flex-1')
    expect(wrapper.find('h1').classes()).toContain('whitespace-nowrap')
  })
})
