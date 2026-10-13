# Black Clover Tribute Website

I made this website completely using Antigravity with Gemini as a fan tribute to Yuki Tabata's *Black Clover*. 

I wanted something clean, dark, and cinematic that strictly tells the real story from the anime and manga—Asta being born without a single drop of magic, his rivalry and promise with Yuno from Hage village, receiving the 5-leaf grimoire, and never giving up.

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
   > "create a blank nextjs project in this folder. Use the attached image as the exact layout reference. Recreate the same composition, spacing, proportions, typography hierarchy, navigation, bottom text area, and CTA placement. Replace the oversized 'LAST' headline with 'BLACK CLOVER' as the dominant hero element. Use the supporting text 'Enter a world where magic comes alive' and description 'An immersive world of fearless knights, forbidden magic, and stories waiting to be discovered.' Buttons: 'Explore Black Clover →' and 'Meet the Characters →'. Remove the statue, scenery, flowers, and all artwork completely. Use a pure black #000000 background. Keep the design minimal, premium, editorial, mysterious, and fully responsive. Do not redesign the layout—only adapt the reference to BLACK CLOVER."

2. **Cursor Spotlight Reveal**:
   > "switch the im1 and im2 . rename im1 to im2 and im2 to im1"

3. **Refining Animations**:
   > "remove the 3d model. also the scrolling and that image scaling doesnt feel smooth at all."

4. **Cleaning Hero & Tuning Scale**:
   > "firstly, remove the 'scroll to story' from the bottom right of main landing page. also now the image isnt scaling at all unlike previously it scaled perfectly it just wasnt very smooth"

5. **Adding Discovery & Footer Sections**:
   > "Create the next section directly after the existing immersive scroll-image section. Do not modify any previous sections. Create a highly creative 'BLACK CLOVER DISCOVERY' section that feels like an interactive digital archive of an unexplored world. Use a deep black background with large elegant typography reading 'DISCOVER BLACK CLOVER' and a short introduction about exploring mysterious characters and places. Below it, create an asymmetric editorial grid of 4–6 character/world cards with different sizes and positions rather than a conventional uniform grid. Each card should contain an image, character/place name, small category label, and a short mysterious description. Add subtle hover interactions: images slightly zoom, cards shift or rotate by a few degrees, typography reacts, and small details appear. Introduce a few oversized floating words and tiny metadata labels around the composition to create the feeling of a curated scientific field journal mixed with a futuristic art exhibition. As the user scrolls into the section, cards should reveal with smooth staggered animations, subtle parallax, opacity and scale transitions. Keep the design sophisticated, cinematic, mysterious and premium — never childish or game-like. Use restrained accent colors inspired by fantasy nature, while keeping black and typography dominant. End the section with a strong centered CTA: 'ENTER THE WORLD →'. Then transition seamlessly into a large, visually striking BLACK CLOVER footer. Make the footer minimal but memorable: oversized BLACK CLOVER typography, navigation links, social links, a short brand statement, and a small copyright line. Use an elegant oversized typographic layout with generous negative space. The footer should feel like the final page of an art book rather than a standard website footer. Fully responsive across desktop, tablet and mobile, with all animations adapting smoothly to touch devices."

6. **Images & Anime Lore Rules**:
   > "for the images in the discovery section, you may do research and download and use whatever images you like, and for the text keep it related to black clover only. And make sure nothing is copy righted i will put this on my github"  
   > "do not use ai generated images at all. You must find them on google or whatever engine you like"

7. **Applying Custom Images**:
   > "ok, i downloaded new discovery and story section images i want you to apply. Use public/my-new-story.png for the story section. Use public/my-discovery-asta.png public/my-discovery-yuno.jpg public/my-discovery-noelle.jpg for the discovery images of asta yuno and noelle. Scale them properly if needed."

8. **Humanizing & Build Output**:
   > "ok, now remove all unused stuff, clean up texts, all texts should be humanized and it should only focus on the black clover real story (as in manga/anime) nothing else, dont use fancy words. Completely humanized. Then create a new repo using gh repo create public --remote=origin --source=. and then first build (make build command such that it puts them in docs/ instead of dist/ so that i can use github pages to make the website live) and then push to github and guide me how do i deploy using github pages. Make sure everything is humanized even the readme and clearly everything should be written as if me myself i had written that readme and it must mention that 'I have made this completely using antigravity with gemini' whatever stuff. No fancy words, simple humanized language. And also provide them with the prompts used in the readme"

9. **Configuration Recovery**:
   > "you removed this part from config: cacheComponents: true, partialPrefetching: true, turbopack: { rules: { '*.css': { loaders: ['@tailwindcss/turbopack'], as: '*.css' } } }"  
   > "perfect now only make this change, when building the dir should be docs/ do not touch anything else"

---

## Disclaimer

This is a non-commercial, fan-made appreciation project. *Black Clover* is created by Yuki Tabata and published by Shueisha. All related characters, names, and imagery belong to their respective creators and copyright owners.
