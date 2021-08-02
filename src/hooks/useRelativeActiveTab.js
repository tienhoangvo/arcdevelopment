import { useMemo } from 'react'

const useRelativeActiveTab = ({
  pathname,
  level = 0,
}) => {
  return useMemo(() => {
    console.log(
      'Re calculate active tab from pathname',
      pathname
    )

    return '/' + pathname.split('/')[level + 1]
  }, [pathname, level])
}

export default useRelativeActiveTab
