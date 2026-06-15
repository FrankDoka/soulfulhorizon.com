/**
 * "Verified by Psychology Today" seal — the exact embed code from the provider.
 *
 * It's emitted straight into the static HTML via dangerouslySetInnerHTML (not a
 * dynamically-injected <script>) because the seal script reads its config from
 * document.currentScript, which is only set for parser-inserted scripts. The
 * seal's domains are allowlisted in the CSP (public/_headers).
 */
const SEAL_HTML = `<a href="https://www.psychologytoday.com/profile/1338702" class="sx-verified-seal" aria-label="Verified by Psychology Today"></a>
<script type="text/javascript" src="https://member.psychologytoday.com/verified-seal.js" data-badge="10" data-id="1338702" data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMC9wcm9maWxlLzEzMzg3MDI/Y2FsbGJhY2s9c3hjYWxsYmFjaw=="></script>`

export function VerificationSeal({ className }: { className?: string }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: SEAL_HTML }} />
}
