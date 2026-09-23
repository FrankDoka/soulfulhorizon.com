// These used to hide content until it scrolled into view and then fade it in.
// On slower phones (or fast scrolling) that left blank stretches of page while
// JavaScript caught up, so they now render plain, immediately visible wrappers.
// Kept as components so the many call sites don't need to change.

export function FadeIn(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} />
}

export function FadeInStagger(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} />
}
