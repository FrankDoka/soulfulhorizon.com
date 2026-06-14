/**
 * Verification seal / credential stamp (e.g., a "Verified" badge from a
 * directory or licensing body).
 *
 * TO ADD THE STAMP: paste the exact embed HTML the provider gives you into the
 * SEAL_HTML string below (keep the backticks). While it's an empty string this
 * renders nothing, so the layout stays clean until the code is added.
 *
 * Note: if the provider's snippet includes a <script> or loads an image from
 * their domain, that domain may need to be added to the Content-Security-Policy
 * in public/_headers (script-src / img-src) for it to display on the live site.
 */
const SEAL_HTML = ``

export function VerificationSeal({ className }: { className?: string }) {
  if (!SEAL_HTML.trim()) return null
  return <div className={className} dangerouslySetInnerHTML={{ __html: SEAL_HTML }} />
}
