'use client'
import { useChangeLocale, useCurrentLocale } from '~/locales/client'
import { Button } from './ui/button'

export default function LangSwitcher() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  return (
    <>
      <p>Current locale: {locale}</p>
      <Button onClick={() => changeLocale('en')}>English</Button>
      <Button onClick={() => changeLocale('fr')}>French</Button>
    </>
  )
}
