import { useEffect } from 'react'
import Titles from '../assets/titles'


export function useTitle(pathname) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = Titles[pathname] || '404: Not Found'
    return () => {
      document.title = prevTitle
    }
  })
}