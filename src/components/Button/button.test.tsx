import React from "react";
import { render } from '@testing-library/react'
import Button from "./index";
describe('get dom test', () => {
  // const BtnDom = render(<Button>Im a button</Button>)
  // console.log(BtnDom)
  const wrapper = render(<Button >Nice</Button>)
  const element = wrapper.getByText('Nice') as HTMLButtonElement
  expect(element).toBeInTheDocument()
  expect(element.tagName).toEqual('BUTTON')
  expect(element).toHaveClass('btn btn-default')
  expect(element.disabled).toBeFalsy()
})