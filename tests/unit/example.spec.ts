import { shallowMount } from "@vue/test-utils"
import ConversorPage from "@/components/ConversorPage.vue"

describe("ConversorPage.vue", () => {
  it("muestra el título cuando arranca la app", () => {
    const msg = "Conversor de millas a kilómetros"
    const wrapper = shallowMount(ConversorPage)
    expect(wrapper.find('#titulo').text()).toMatch(msg)
  })
	it("muestra el título cuando arranca la app", () => {
		const msg = "Conversor de millas a kilómetros"
		const wrapper = shallowMount(ConversorPage)
		const millas = wrapper.find('#millas')
		millas.setValue(10)
		const btnConvertir = wrapper.find('#convertir')
		btnConvertir.trigger("click")
		const kms = wrapper.find('#kilometros')
		expect(kms.text()).toBe("16.03944")
	})
})
