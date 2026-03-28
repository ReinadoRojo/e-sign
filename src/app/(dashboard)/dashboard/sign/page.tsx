// www.example.com/dashboard/sign?doc=123&t=abc&k=xyz

import { SignCanvas } from "./_components/sign-canvas";

export default function SignPage() {
  return (
    <div>
      <h1>Sign Document</h1>
      <SignCanvas />
    </div>
  )
}