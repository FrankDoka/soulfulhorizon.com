// Psychotherapy specialty pages, rendered by src/app/therapy/[slug]/page.tsx.
// All the wording lives here so it can be edited (or a page added) without
// touching layout code. DRAFT COPY pending the owner's finalized text.

export type Specialty = {
  slug: string
  title: string
  // Short label for cards and links.
  name: string
  description: string
  intro: string
  signsTitle: string
  signs: string[]
  focusTitle: string
  focus: string[]
  approach: string[]
}

export const specialties: Specialty[] = [
  {
    slug: 'burnout-chronic-overwhelm',
    name: 'Burnout & Chronic Overwhelm',
    title: 'Therapy for Burnout & Chronic Overwhelm',
    description:
      'Therapy for people, particularly women, who carry significant responsibility and are feeling the emotional cost of always being the dependable one. NY & TN telehealth.',
    intro:
      'For people, particularly women, who are used to carrying significant responsibility and are beginning to feel the emotional cost of always being the dependable one.',
    signsTitle: 'You may be noticing',
    signs: [
      'Exhaustion that rest and weekends no longer fix',
      'Irritability, resentment, or numbness that doesn’t feel like you',
      'Guilt whenever you slow down or say no',
      'Trouble sleeping, concentrating, or enjoying things you used to love',
      'Looking fine on the outside while feeling depleted inside',
    ],
    focusTitle: 'What we can work on',
    focus: [
      'Understanding the patterns and beliefs that keep you overextended',
      'Recovering from chronic stress instead of pushing through it',
      'Boundaries, and sharing responsibility without guilt',
      'Anxiety or depression that has grown alongside burnout',
      'Making room again for rest, joy, and your own needs',
    ],
    approach: [
      'Treatment is evidence-based, drawing primarily on cognitive and behavioral approaches, and paced around your real life and responsibilities.',
      'Christian faith integration is available if you’d like it, and never assumed.',
    ],
  },
  {
    slug: 'christian-integrated-therapy',
    name: 'Christian-Integrated Therapy',
    title: 'Christian-Integrated Therapy',
    description:
      'Evidence-based psychotherapy with the option to incorporate your Christian faith. Optional, client-led faith integration. NY & TN telehealth.',
    intro:
      'For clients who want evidence-based psychotherapy while also having the option to incorporate their Christian faith.',
    signsTitle: 'What faith integration can look like',
    signs: [
      'Prayer at the beginning or end of a session, if you’d like',
      'Scripture and reflection alongside evidence-based tools',
      'Space to explore faith questions, doubt, or spiritual distress',
      'Examining beliefs about strength, service, or rest that may be adding to your stress',
    ],
    focusTitle: 'What stays the same',
    focus: [
      'Faith integration is optional and client-led: you decide how much, or how little',
      'Therapy remains clinical, evidence-based mental health treatment',
      'Your values and beliefs guide the work, at your pace',
      'It’s never required to receive care at Soulful Horizon',
    ],
    approach: [
      'I’m a Licensed Clinical Social Worker with a Master of Social Work from Columbia University, and I also hold a Master of Arts in Pastoral Counseling from Liberty University.',
      'That combination of clinical social work training and graduate training in pastoral counseling means faith can be woven into treatment thoughtfully, without replacing the evidence-based care you came for.',
    ],
  },
  {
    slug: 'trauma-life-transitions',
    name: 'Trauma & Major Life Transitions',
    title: 'Trauma & Major Life Transitions',
    description:
      'Trauma-informed therapy for experiences and transitions that still affect your emotions, relationships, stress, or sense of stability. NY & TN telehealth.',
    intro:
      'For clients seeking trauma-informed treatment and support with experiences or transitions that continue affecting their emotions, relationships, stress levels, or sense of stability.',
    signsTitle: 'Therapy may help if',
    signs: [
      'Past experiences still shape how you react, trust, or feel safe',
      'A loss, move, separation, diagnosis, or career change has left you unsteady',
      'You often feel on edge, numb, or stuck',
      'Relationships feel harder than they used to',
      'You’re adjusting to a new role, such as parenthood or caregiving',
    ],
    focusTitle: 'How we’ll work',
    focus: [
      'A trauma-informed pace, so you feel safe and in control',
      'Building coping skills and stability first',
      'Making sense of what happened and how it affects you now',
      'Moving toward a renewed sense of steadiness and self',
    ],
    approach: [
      'Care is trauma-informed, culturally responsive, and grounded in evidence-based practice.',
      'Christian faith integration is available if you’d like it, and never assumed.',
    ],
  },
]
