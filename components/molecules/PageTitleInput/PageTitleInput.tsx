import React, { ChangeEvent, ReactElement, useState } from 'react'
import { CSSPseudoSelectorProps, CSSSelectorObjectOrCssVariables, SystemCssProperties, SystemStyleObject, Theme } from '@mui/system'
import PageTitleInputAction, { PageTitleInputActionHandlersResult } from '@components/molecules/PageTitleInput/PageTitleInputAction'
import PageTitleInputView, { PageTitleInputViewProps } from '@components/molecules/PageTitleInput/PageTitleInputView'

export type PageTitleInputProps = {
  text: string
  type?: string
  title: string
  label: string
  placeholder: string
  multiline: boolean
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  sx?: SystemCssProperties<Theme> | CSSPseudoSelectorProps<Theme> | CSSSelectorObjectOrCssVariables<Theme> | null | ((theme: Theme) => SystemStyleObject<Theme>) | ReadonlyArray<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>
}
const PageTitleInput = (props: PageTitleInputProps) => {
  const newProps = {
    ...props,
  } as PageTitleInputViewProps & PageTitleInputActionHandlersResult

  return <PageTitleInputView {...newProps} />
}

export default PageTitleInput
