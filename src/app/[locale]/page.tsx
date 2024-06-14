import { getI18n } from "~/locales/server"
import LangSwitcher from "~/components/langSwitcmer"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import { Switch } from "~/components/ui/switch"


export default async function Page() {
  const t = await getI18n()

  return (
    <div>
      <p>{t('hello')}</p>
      <p>{t('hello.world')}</p>
      <LangSwitcher />
      <p>{t('welcome', { name: 'John' })}</p>
      <p>{t('welcome', { name: <strong>John</strong> })}</p>
      <Button>
        <Link href="/login">
          <p>{t('login')}</p>
        </Link>
      </Button>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div >
  )
}
