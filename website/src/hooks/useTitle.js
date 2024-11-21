import { useEffect } from 'react'
import Titles from '../assets/titles'

export function useTitle(pathname) {
  useEffect(() => {
    // Save the previous title
    const prevTitle = document.title
    // Update the title
    document.title = Titles[pathname] || '404: Not Found'
    return () => {
      document.title = prevTitle
    }
  })
}