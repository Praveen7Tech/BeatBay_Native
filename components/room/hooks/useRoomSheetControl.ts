import { useCallback, useState } from 'react'

export const useRoomSheetControl = () => {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [songSheetOpen, setSongSheetOpen] = useState(false)

  const toggleInvite = useCallback(() => {
    setInviteOpen((prev) => !prev)
  }, [])

  const toggleSongSheet = useCallback(() => {
    setSongSheetOpen((prev) => !prev)
  }, [])

  return {
    inviteOpen,
    toggleInvite,
    songSheetOpen,
    toggleSongSheet,
  }
}