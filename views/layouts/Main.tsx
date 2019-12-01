import React from 'react'
import Head from 'next/head'

interface IProps {
  title?: string
  description?: string
  keywords?: string[]
  children: React.ReactNode
}

const MainLayout: React.FC<IProps> = ({
  title,
  description,
  keywords,
  children,
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1, maximum-scale=1.0, user-scalable=no"
      />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
    </Head>
    {children}
  </div>
)

export default MainLayout
