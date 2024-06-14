import { getI18n } from "~/locales/server"
import { auth } from "~/lib/auth"

export default async function Login() {
  const session = await auth()
  const t = await getI18n()
  if (!session) return <div>Not authenticated</div>

  return (
    <div>
      <p>{t('hello.world')}</p>
      simesima who am i!
      <pre>{session.user?.email}</pre>
    </div>
  )
}
