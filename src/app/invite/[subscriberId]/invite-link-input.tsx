'use client'

import { Link, Copy } from "lucide-react"

import { IconButton } from "@/app/components/icon-button"
import { InputRoot, InputIcon, InputField } from "@/app/components/input"

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function CopyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly 
        defaultValue={inviteLink} 
      />

      <IconButton className="-mr-2" onClick={CopyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}