import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="top-center"
      toastOptions={{
        style: {
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,20,0.95))',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
        },
      }}
      style={
        {
          '--normal-bg': 'rgba(0,0,0,0.95)',
          '--normal-text': 'white',
          '--normal-border': 'rgba(255,255,255,0.1)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
