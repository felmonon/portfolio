'use client'

import type { ComponentPropsWithoutRef, MouseEvent } from 'react'
import { track } from '@vercel/analytics'

type TrackedLinkProps = ComponentPropsWithoutRef<'a'> & {
  eventName: 'resume_download' | 'github_click' | 'project_open' | 'email_click'
  eventData?: Record<string, string>
}

export function TrackedLink({ eventName, eventData, onClick, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    track(eventName, eventData)
    onClick?.(event)
  }

  return <a {...props} onClick={handleClick} />
}
