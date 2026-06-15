export function VerificationSeal({ className }: { className?: string }) {
  return (
    <iframe
      src="/pt-seal.html"
      className={className}
      title="Verified by Psychology Today"
      style={{ border: 'none', width: 200, height: 50, background: 'transparent' }}
    />
  )
}
