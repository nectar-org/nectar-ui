import React from 'react'
import useTheme from 'components/use-theme'

const MenuSkeleton: React.FC<unknown> = () => {
  const theme = useTheme()
  return (
    <div className="skeleton">
      <style jsx>{`
        .skeleton {
          height: var(--nectar-page-nav-height);
          width: 100%;
          margin: 0 auto;
          background-color: ${theme.palette.accents_1};
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default MenuSkeleton
