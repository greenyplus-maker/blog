'use client'

import { useEffect } from 'react'
import { usePageContext } from '@/contexts/PageContext'

interface PageTitleSetterProps {
  title: string
}

export default function PageTitleSetter({ title }: PageTitleSetterProps) {
  const { setPageTitle, setShowBackButton } = usePageContext()

  useEffect(() => {
    setPageTitle(title)
    setShowBackButton(true)

    return () => {
      setPageTitle(null)
      setShowBackButton(false)
    }
  }, [title, setPageTitle, setShowBackButton])

  return null
}
