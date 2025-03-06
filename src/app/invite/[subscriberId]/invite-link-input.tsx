import { Link, Copy } from "lucide-react"

import { IconButton } from "@/app/components/icon-button"
import { InputRoot, InputIcon, InputField } from "@/app/components/input"

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly 
        defaultValue="https://devstage.com.br/invite/123456" 
      />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}