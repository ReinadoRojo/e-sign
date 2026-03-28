import { useId } from "react"

export const SignCanvas = () => {
  const _id = useId();

  return (
    <canvas id={_id} className="" />
  )
}