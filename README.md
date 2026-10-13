# Black Clover

I made this website completely using Antigravity with Gemini as a fan of Yuki Tabata's *Black Clover*. 

---

## What's in this project

- **Hero Spotlight Reveal**: A night background with an interactive cursor spotlight that smoothly reveals the day scenery underneath as you move your mouse.
- **Scroll-driven Story Section**: As you scroll down, the central story artwork starts as a small portrait and smoothly scales up to fill the whole screen, with story quotes fading out gracefully around it.
- **Character Discovery Section**: An editorial card grid showing Asta, Yuno, and Noelle with real anime lore, squads, and subtle hover animations.
- **Minimalist Art-Book Footer**: A clean, oversized tribute layout featuring Asta's motto: *"My magic is never giving up!"* and official links to read and watch Black Clover.

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** & **TypeScript**
- **Tailwind CSS v4**
- Built entirely with **Antigravity** powered by **Gemini**

---

## Getting Started

To run this locally on your machine:

1. Clone this repository:
   ```bash
   git clone https://github.com/iTsukiyomi/peakclover.git
   cd peakclover
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Building the Project

To create a production build:

```bash
npm run build
```

The build output is configured to compile into the `docs/` folder.

---

## Prompts Used

Here are the prompts I used while building this project with Antigravity and Gemini:

1. **Initial Layout Setup**:
   > "Use the attached image as the **exact layout reference**. Recreate the same composition, spacing, proportions, typography hierarchy, navigation, bottom text area, and CTA placement. Replace the oversized **"[TEXT]"** headline with **"BLACK CLOVER"** as the dominant hero element. Use the supporting text **"Enter a world where magic comes alive"** and description **"An immersive world of fearless knights, forbidden magic, and stories waiting to be discovered."** Buttons: **"Explore Black Clover →"** and **"Meet the Characters →"**. Remove the statue, scenery, flowers, and all artwork completely. Use a pure black **#000000** background. Keep the design minimal, premium, editorial, mysterious, and fully responsive. **Do not redesign the layout—only adapt the reference to BLACK CLOVER.**"

2. **Hover Reveal Effect**:
   > "Assets
   EXISTING HERO: Keep the current hero/background exactly as it is.
   REVEAL_IMAGE: Use the attached character image exactly as provided. Do not crop, resize, recolor, edit, regenerate, or alter the character.
   Assets are attached to the chat. Use them exactly:
   Base image (BG_IMAGE_1)
   Reveal image (BG_IMAGE_2)
   ONLY ADD THIS EFFECT
   Add a cursor-following character reveal over the existing hero.
   When the mouse moves across the hero, reveal REVEAL_IMAGE through a soft circular spotlight centered exactly on the cursor. The character image must be completely invisible outside the spotlight.
   Reveal radius: 260px
   Soft feathered/glowing edge
   Smooth cursor-following movement with slight easing/lerp
   pointer-events: none on the reveal layer
   Use a CSS radial-gradient mask via mask-image and -webkit-mask-image
   Keep the reveal layer above the existing hero background but below every existing text, button, navigation, and UI element
   When the cursor leaves the hero, hide the reveal image completely."

3. **Scroll-driven storytelling section**:
   > "Create the next section directly after the existing BLACK CLOVER hero section. Do not modify the hero. Build a cinematic scroll-driven storytelling section on a pure black background. Place the attached image exactly in the center at a vertical 9:16 portrait ratio with a relatively small initial size and generous negative space around it. As the user scrolls down, smoothly scale the image from its initial portrait size until it progressively expands beyond its container and finally becomes a full-screen image, automatically adapting to desktop, tablet, and mobile viewport dimensions while preserving the image composition and focal point. Surround the initial image with multiple short informational text elements positioned in an intentionally asymmetric, editorial "organized chaos" arrangement—different font sizes, weights, shapes, rotations, and subtle accent colors, but still refined and cohesive with BLACK CLOVER's premium visual identity. As the image grows during scrolling, animate these text elements out with elegant staggered fades, slides, rotations, and scale transitions, so the information gradually disappears and the image becomes the sole focus. Use smooth scroll-linked animations, cinematic pacing, subtle parallax, and seamless transitions. The final state should be completely immersive: the image fills the entire viewport with no distracting UI. Make the section feel like an interactive digital art exhibition and a discovery moment within the BLACK CLOVER world, not a conventional website image section. Fully responsive across desktop, tablet, and mobile."

4. **Adding Discovery & Footer Sections**:
   > "Create the next section directly after the existing immersive scroll-image section. Do not modify any previous sections. Create a highly creative 'BLACK CLOVER DISCOVERY' section that feels like an interactive digital archive of an unexplored world. Use a deep black background with large elegant typography reading 'DISCOVER BLACK CLOVER' and a short introduction about exploring mysterious characters and places. Below it, create an asymmetric editorial grid of 4–6 character/world cards with different sizes and positions rather than a conventional uniform grid. Each card should contain an image, character/place name, small category label, and a short mysterious description. Add subtle hover interactions: images slightly zoom, cards shift or rotate by a few degrees, typography reacts, and small details appear. Introduce a few oversized floating words and tiny metadata labels around the composition to create the feeling of a curated scientific field journal mixed with a futuristic art exhibition. As the user scrolls into the section, cards should reveal with smooth staggered animations, subtle parallax, opacity and scale transitions. Keep the design sophisticated, cinematic, mysterious and premium — never childish or game-like. Use restrained accent colors inspired by fantasy nature, while keeping black and typography dominant. End the section with a strong centered CTA: 'ENTER THE WORLD →'. Then transition seamlessly into a large, visually striking BLACK CLOVER footer. Make the footer minimal but memorable: oversized BLACK CLOVER typography, navigation links, social links, a short brand statement, and a small copyright line. Use an elegant oversized typographic layout with generous negative space. The footer should feel like the final page of an art book rather than a standard website footer. Fully responsive across desktop, tablet and mobile, with all animations adapting smoothly to touch devices."


---

## Disclaimer

This is a fan-made appreciation project. *Black Clover* is created by Yuki Tabata and published by Shueisha.

The website is highly inspired and the prompts are derived from @miladi-code on youtube. Really appreciate them.
