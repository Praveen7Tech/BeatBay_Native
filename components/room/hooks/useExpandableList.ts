import { useCallback, useState } from 'react'

export const useExpandableList = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }, [])

  return { expandedId, toggleExpand }
}