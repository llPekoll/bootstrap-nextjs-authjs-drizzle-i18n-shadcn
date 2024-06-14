import { getI18n } from "~/locales/server"
import { SignIn } from "~/components/loginBtn"
import { auth } from "~/lib/auth"
import { redirect } from "next/navigation"

export default async function Login() {
  const t = await getI18n()
  const session = await auth()
  if (session) {
    console.log("en cas d'urgence")
    redirect("/dash")
  }
  return (
    <div>
      <p>{t('hello.world')}</p>
      <SignIn />
    </div >
  )
}
