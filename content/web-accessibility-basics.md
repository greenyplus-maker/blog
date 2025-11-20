---
title: Web Accessibility Basics
date: 2024-01-25
description: An introduction to web accessibility and how to make your websites usable for everyone.
---

# Web Accessibility Basics

Web accessibility ensures that websites are usable by everyone, including people with disabilities. It's not just the right thing to do - it's often required by law and makes business sense.

## Why Accessibility Matters

- **Legal compliance**: Many countries have accessibility laws
- **Broader audience**: Reach more users
- **Better SEO**: Accessible sites rank better
- **Improved UX**: Benefits all users, not just those with disabilities

## Semantic HTML

Use proper HTML elements:

```html
<!-- Good -->
<button>Click me</button>
<nav>Navigation</nav>
<main>Main content</main>

<!-- Bad -->
<div onclick="doSomething()">Click me</div>
```

## ARIA Attributes

Use ARIA when semantic HTML isn't enough:

```html
<button aria-label="Close dialog">×</button>
<div role="alert" aria-live="polite">Error message</div>
```

## Keyboard Navigation

Ensure all functionality is keyboard accessible:

- Use `Tab` to navigate
- Provide visible focus indicators
- Implement keyboard shortcuts
- Test without a mouse

## Color Contrast

Maintain sufficient color contrast:

- Text should have at least 4.5:1 contrast ratio
- Large text needs 3:1 ratio
- Use tools like WebAIM Contrast Checker

## Alt Text for Images

Always provide meaningful alt text:

```html
<!-- Good -->
<img src="chart.png" alt="Sales increased 25% in Q4 2023">

<!-- Bad -->
<img src="chart.png" alt="image">
```

## Testing Accessibility

Test your site:

- Use screen readers (NVDA, JAWS, VoiceOver)
- Test keyboard navigation
- Run automated tools (axe, WAVE)
- Get feedback from users with disabilities

## WCAG Guidelines

Follow WCAG 2.1 guidelines:

- **Perceivable**: Information must be presentable to users
- **Operable**: Interface components must be operable
- **Understandable**: Information must be understandable
- **Robust**: Content must be robust enough for assistive technologies

## Conclusion

Accessibility is not a feature - it's a fundamental requirement. Start implementing these practices today, and your websites will be better for everyone. Remember, small changes can make a big difference!

