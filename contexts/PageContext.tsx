'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface PageContextType {
  pageTitle: string | null
  setPageTitle: (title: string | null) => void
  showBackButton: boolean
  setShowBackButton: (show: boolean) => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

export function PageProvider({ children }: { children: ReactNode }) {
  const [pageTitle, setPageTitle] = useState<string | null>(null)
  const [showBackButton, setShowBackButton] = useState(false)

  return (
    <PageContext.Provider
      value={{
        pageTitle,
        setPageTitle,
        showBackButton,
        setShowBackButton,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export function usePageContext() {
  const context = useContext(PageContext)
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageProvider')
  }
  return context
}

