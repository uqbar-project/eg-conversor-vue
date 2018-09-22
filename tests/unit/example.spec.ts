import { shallowMount } from "@vue/test-utils"
import ConversorPage from "@/components/ConversorPage.vue"

describe("ConversorPage.vue", () => {
  it("muestra el título cuando arranca la app", () => {
    const msg = "Conversor de millas a kilómetros"
    const wrapper = shallowMount(ConversorPage, {
      propsData: { msg }
    })
    expect(wrapper.find('#titulo').text()).toMatch(msg)
  })
	it("muestra el título cuando arranca la app", () => {
		const msg = "Conversor de millas a kilómetros"
		const wrapper = shallowMount(ConversorPage, {
			propsData: { msg }
		})
		expect(wrapper.find('#titulo').text()).toMatch(msg)
	})
})
