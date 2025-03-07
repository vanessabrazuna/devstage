'use client'

import { useState } from "react"
import { Link, Copy, CheckCheck } from "lucide-react"

import { IconButton } from "@/app/components/icon-button"
import { InputRoot, InputIcon, InputField } from "@/app/components/input"

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [copied, setCopied] = useState(false)

  function CopyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-full">
      <InputRoot>
        <InputIcon>
          <Link className="size-5" />
        </InputIcon>

        <InputField readOnly defaultValue={inviteLink} />

        <IconButton className="-mr-2" onClick={CopyInviteLink}>
          {copied 
            ? <CheckCheck className="size-5 text-green-500" /> 
            : <Copy className="size-5" />
          }
        </IconButton>
      </InputRoot>
    </div>
  )
}
