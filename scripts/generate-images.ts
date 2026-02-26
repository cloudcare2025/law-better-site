/**
 * Law Better LLC — AI Image Generation Pipeline
 *
 * Generates all website imagery using FLUX 2 Pro via fal.ai.
 * Converts outputs to optimized WebP using sharp.
 *
 * Usage:
 *   npx tsx scripts/generate-images.ts
 *
 * Requires:
 *   FAL_KEY environment variable (set in .env or exported)
 */

import { fal } from "@fal-ai/client";
import sharp from "sharp";
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "public", "images", "generated");

const MAX_RETRIES = 1;

// ---------------------------------------------------------------------------
// fal.ai client setup
// ---------------------------------------------------------------------------

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) {
  console.error(
    "\x1b[31m[ERROR]\x1b[0m FAL_KEY environment variable is not set.\n" +
      "       Export it or add it to a .env file in the project root.\n" +
      "       You can get a key at https://fal.ai/dashboard/keys"
  );
  process.exit(1);
}

fal.config({ credentials: FAL_KEY });

// ---------------------------------------------------------------------------
// Image Manifest
// ---------------------------------------------------------------------------

interface ImageSpec {
  /** Output filename (without extension — .webp is appended automatically) */
  name: string;
  /** Width in pixels */
  width: number;
  /** Height in pixels */
  height: number;
  /** fal.ai image_size parameter */
  image_size: "landscape_16_9" | "landscape_4_3" | "square" | "square_hd";
  /** Detailed photographic prompt — the heart of the pipeline */
  prompt: string;
}

const IMAGE_MANIFEST: ImageSpec[] = [
  // -----------------------------------------------------------------------
  // 1. HERO — OFFICE INTERIOR
  // -----------------------------------------------------------------------
  {
    name: "hero-office",
    width: 1920,
    height: 1080,
    image_size: "landscape_16_9",
    prompt: [
      "Interior of a modern high-end law office photographed with a Sony A7R IV,",
      "24mm f/2.8 wide-angle lens. Floor-to-ceiling windows reveal a city skyline",
      "bathed in warm late-afternoon golden-hour sunlight streaming across a long",
      "walnut conference table. Tall shelves of leather-bound legal volumes line the",
      "far wall. Cream linen chairs, polished brass reading lamps, and a single open",
      "legal brief on the table. Shallow depth of field with the foreground chair in",
      "soft focus. Warm neutral color palette — ivory, teal-gray, aged walnut, touches",
      "of brass. Clean, uncluttered, minimal decoration. Architectural interior",
      "photography, natural window light supplemented by soft bounce fill,",
      "professional photography, editorial quality, 2026 modern aesthetic.",
      "Photorealistic, ultra high resolution, no text, no watermarks.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 2. HERO — ABSTRACT DARK BACKGROUND
  // -----------------------------------------------------------------------
  {
    name: "hero-abstract",
    width: 1920,
    height: 1080,
    image_size: "landscape_16_9",
    prompt: [
      "Abstract dark premium background texture for a luxury brand website.",
      "Deep charcoal-navy base (#0F1D2A) with subtle flowing gradients of deep teal",
      "(#1A5C6B at 15% opacity) and warm brass-gold (#C4963C at 10% opacity).",
      "Ultra-fine film grain overlay. Soft organic light caustics like sunlight through",
      "deep water. No recognizable objects — pure texture and mood. Photographed as a",
      "macro abstract with a Canon EOS R5, 100mm f/2.8 macro lens, studio lighting",
      "with two diffused strip softboxes creating gentle directional highlights.",
      "Depth and dimension through subtle luminance variation. Suitable for white text",
      "overlay — dark enough for contrast. Professional photography, editorial quality,",
      "2026 modern aesthetic. Photorealistic, ultra high resolution, no text, no",
      "watermarks, no logos.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 3. FAMILY CONSULTATION
  // -----------------------------------------------------------------------
  {
    name: "family-consultation",
    width: 1200,
    height: 800,
    image_size: "landscape_4_3",
    prompt: [
      "A married couple in their early 40s sitting across from a female attorney in a",
      "warm, modern law office. The attorney is mid-explanation, gesturing with an open",
      "hand, exuding confidence and empathy. The couple leans in slightly, attentive and",
      "reassured. Natural afternoon window light from the left, supplemented by warm",
      "ambient overhead lighting. Warm neutral tones — cream walls, light oak desk,",
      "teal accent chairs, a small brass desk lamp. Shot with a Canon EOS R5, 50mm",
      "f/1.8 lens at f/2.2, candid documentary style, slight shallow depth of field",
      "with the background softly blurred. Diverse professionals in modern business",
      "casual attire. Natural authentic expressions — no posed smiles. Professional",
      "photography, editorial quality, 2026 modern aesthetic. Photorealistic, ultra",
      "high resolution, no text, no watermarks.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 4. ESTATE PLANNING — MULTI-GENERATIONAL FAMILY
  // -----------------------------------------------------------------------
  {
    name: "estate-planning",
    width: 1200,
    height: 800,
    image_size: "landscape_4_3",
    prompt: [
      "A warm multi-generational family moment in a sunlit living room. Grandparents in",
      "their early 70s seated on a cream linen sofa, their adult daughter beside them,",
      "and two young grandchildren (ages 6 and 9) sitting on the floor looking up with",
      "natural, joyful expressions. Warm afternoon light pours through sheer curtains.",
      "The room is modern and tasteful — soft white walls, a woven area rug, green",
      "plants, minimal decor. Shot with a Sony A7R IV, 35mm f/1.4 lens at f/2.0,",
      "lifestyle photography with natural, unposed emotion. Soft bokeh background.",
      "Warm color grading — golden highlights, gentle shadows. Diverse family, modern",
      "casual clothing. The feeling is love, legacy, and togetherness. Professional",
      "photography, editorial quality, 2026 modern aesthetic. Photorealistic, ultra",
      "high resolution, no text, no watermarks.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 5. BUSINESS MEETING
  // -----------------------------------------------------------------------
  {
    name: "business-meeting",
    width: 1200,
    height: 800,
    image_size: "landscape_4_3",
    prompt: [
      "Two professionals reviewing legal documents in a modern glass-walled conference",
      "room. A man in a tailored navy suit and a woman in a charcoal blazer sit at a",
      "clean white oak table, a laptop open between them, printed documents spread out.",
      "One is pointing at a contract clause while the other nods thoughtfully. Natural",
      "daylight floods in from floor-to-ceiling windows. The background shows a",
      "blurred modern office corridor through frosted glass. Shot with a Canon EOS R5,",
      "85mm f/1.4 lens at f/2.0, editorial corporate photography style. Warm neutral",
      "tones — white, light gray, navy, brass hardware accents on the door handles.",
      "Diverse professionals, natural expressions, modern executive attire. Professional",
      "photography, editorial quality, 2026 modern aesthetic. Photorealistic, ultra",
      "high resolution, no text, no watermarks.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 6. PERSONAL INJURY — COMPASSIONATE CONSULTATION
  // -----------------------------------------------------------------------
  {
    name: "personal-injury",
    width: 1200,
    height: 800,
    image_size: "landscape_4_3",
    prompt: [
      "A compassionate male attorney in a well-fitted charcoal suit sitting beside a",
      "female client in a comfortable modern office. The attorney is leaning forward",
      "slightly with supportive, attentive body language, hands clasped on the desk.",
      "The client appears relieved, making eye contact. A warm desk lamp provides soft",
      "accent light. The office has cream walls, a dark walnut desk, teal accent",
      "pillows on the client chair, and a brass-framed credential on the wall (blurred).",
      "Natural window light from behind creates a gentle rim light on both subjects.",
      "Shot with a Sony A7R IV, 50mm f/1.4 lens at f/1.8, documentary style with",
      "shallow depth of field. Warm, empathetic atmosphere. Diverse subjects in modern",
      "attire, natural expressions. Professional photography, editorial quality, 2026",
      "modern aesthetic. Photorealistic, ultra high resolution, no text, no watermarks.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 7. COURTHOUSE EXTERIOR
  // -----------------------------------------------------------------------
  {
    name: "courthouse",
    width: 1200,
    height: 800,
    image_size: "landscape_4_3",
    prompt: [
      "Exterior of a grand neoclassical American courthouse. Towering Corinthian marble",
      "columns, wide stone steps, and a carved pediment with the words barely visible.",
      "Warm late-afternoon golden-hour sunlight rakes across the facade, casting long",
      "dramatic shadows. A deep blue sky with a few wispy cirrus clouds above. Two",
      "mature oak trees frame the edges of the composition. The marble is warm cream",
      "and honey-toned in the light. No people in frame — the building itself is the",
      "subject. Shot with a Canon EOS R5, 24mm f/8 tilt-shift lens for perfect",
      "verticals, architectural photography, tripod-mounted for razor sharpness.",
      "HDR-processed natural light, no artificial lighting. Professional photography,",
      "editorial quality, 2026 modern aesthetic. Photorealistic, ultra high resolution,",
      "no text, no watermarks.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 8. TEAM BACKGROUND — BOKEH OFFICE
  // -----------------------------------------------------------------------
  {
    name: "team-background",
    width: 1920,
    height: 1080,
    image_size: "landscape_16_9",
    prompt: [
      "An intentionally out-of-focus modern office environment, shot as a portrait",
      "session background plate. Warm neutral tones — cream walls, light wood surfaces,",
      "soft teal accent furniture visible as blurred shapes. Gentle bokeh circles from",
      "recessed LED lights and brass fixtures. Natural window light creates a soft",
      "left-to-right gradient of warmth. The entire image is a beautiful soft blur at",
      "approximately f/1.4 — no sharp elements. Shot with a Sony A7R IV, 85mm f/1.4",
      "lens wide open, focused at infinity to ensure maximum blur of the near-field",
      "office environment. Color palette: warm ivory, soft sage, muted teal, touches of",
      "gold. Suitable as a background behind portrait cutouts. Professional photography,",
      "editorial quality, 2026 modern aesthetic. Photorealistic, ultra high resolution,",
      "no text, no watermarks.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 9. SCALES OF JUSTICE — EDITORIAL STILL LIFE
  // -----------------------------------------------------------------------
  {
    name: "scales-justice",
    width: 800,
    height: 800,
    image_size: "square",
    prompt: [
      "An elegant pair of brass scales of justice centered on a dark walnut desk.",
      "Dramatic Rembrandt-style side lighting from the upper left — a single large",
      "softbox creating rich highlights on the polished brass and deep shadows on the",
      "wood grain. The background fades to near-black. The brass has a warm patina with",
      "flecks of verdigris at the joints — aged but well cared for. A thin stack of",
      "cream legal paper sits at the base, slightly out of focus. Shot with a Canon",
      "EOS R5, 100mm f/2.8 macro lens at f/4, editorial still life photography. Focus",
      "stacked for sharp detail on the scales with the foreground paper in gentle bokeh.",
      "Color palette: warm brass gold, dark walnut brown, deep charcoal shadows, cream",
      "paper highlights. Professional photography, editorial quality, 2026 modern",
      "aesthetic. Photorealistic, ultra high resolution, no text, no watermarks.",
    ].join(" "),
  },

  // -----------------------------------------------------------------------
  // 10. CONSULTATION ROOM
  // -----------------------------------------------------------------------
  {
    name: "consultation-room",
    width: 1200,
    height: 800,
    image_size: "landscape_4_3",
    prompt: [
      "A warm, inviting consultation room in a modern law office, photographed empty.",
      "Two comfortable teal upholstered armchairs face each other across a low round",
      "walnut side table. A slim brass floor lamp arcs over one chair. The walls are",
      "warm white with subtle texture, a single framed abstract print in teal and gold",
      "tones on the back wall. A tall fiddle-leaf fig plant in a ceramic pot anchors",
      "the corner. Warm overhead recessed lighting blends with soft natural light from",
      "a frosted window on the right. The floor is light herringbone hardwood. The",
      "atmosphere is calm, private, and professional — a space designed for trust. Shot",
      "with a Sony A7R IV, 24mm f/2.8 lens at f/5.6, architectural interior",
      "photography, tripod-mounted. Clean, uncluttered composition with generous",
      "negative space. Professional photography, editorial quality, 2026 modern",
      "aesthetic. Photorealistic, ultra high resolution, no text, no watermarks.",
    ].join(" "),
  },
];

// ---------------------------------------------------------------------------
// Generation Engine
// ---------------------------------------------------------------------------

interface FalImageResult {
  images: Array<{ url: string; content_type?: string }>;
  seed?: number;
}

async function generateImage(spec: ImageSpec, attempt = 0): Promise<void> {
  const tag = `\x1b[36m[${spec.name}]\x1b[0m`;

  console.log(
    `${tag} Generating ${spec.width}x${spec.height} (${spec.image_size})...`
  );

  try {
    const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
      input: {
        prompt: spec.prompt,
        image_size: spec.image_size,
        num_images: 1,
        safety_tolerance: "5" as const,
        output_format: "png",
      },
      logs: false,
      onQueueUpdate: (update) => {
        if (update.status === "IN_QUEUE") {
          console.log(`${tag} Queued — position ${update.queue_position ?? "unknown"}`);
        } else if (update.status === "IN_PROGRESS") {
          console.log(`${tag} Generating...`);
        }
      },
    });

    const data = result.data as FalImageResult;

    if (!data?.images?.[0]?.url) {
      throw new Error("No image URL in response");
    }

    const imageUrl = data.images[0].url;
    console.log(`${tag} Downloading from fal CDN...`);

    // Download the raw image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Download failed: ${response.status} ${response.statusText}`);
    }
    const buffer = Buffer.from(await response.arrayBuffer());

    // Convert to WebP with sharp — resize to exact target dimensions
    console.log(`${tag} Converting to WebP and resizing to ${spec.width}x${spec.height}...`);
    const webpBuffer = await sharp(buffer)
      .resize(spec.width, spec.height, { fit: "cover", position: "center" })
      .webp({ quality: 85, effort: 6 })
      .toBuffer();

    // Write to disk
    const outputPath = path.join(OUTPUT_DIR, `${spec.name}.webp`);
    await writeFile(outputPath, webpBuffer);

    const sizeMB = (webpBuffer.length / (1024 * 1024)).toFixed(2);
    console.log(`${tag} \x1b[32mSaved\x1b[0m ${outputPath} (${sizeMB} MB)`);
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error(`${tag} \x1b[31mFailed\x1b[0m: ${err.message}`);

    if (attempt < MAX_RETRIES) {
      console.log(`${tag} Retrying (attempt ${attempt + 2} of ${MAX_RETRIES + 1})...`);
      await new Promise((r) => setTimeout(r, 2000));
      return generateImage(spec, attempt + 1);
    }

    console.error(`${tag} \x1b[31mAll retries exhausted. Skipping.\x1b[0m`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("\n\x1b[1m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m");
  console.log("\x1b[1m  Law Better LLC — Image Generation Pipeline\x1b[0m");
  console.log("\x1b[1m  Model: FLUX 2 Pro via fal.ai\x1b[0m");
  console.log(`\x1b[1m  Images: ${IMAGE_MANIFEST.length}\x1b[0m`);
  console.log("\x1b[1m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n");

  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}\n`);
  }

  const startTime = Date.now();
  let successCount = 0;
  let failCount = 0;

  // Process sequentially to respect rate limits and provide clear progress
  for (let i = 0; i < IMAGE_MANIFEST.length; i++) {
    const spec = IMAGE_MANIFEST[i];
    console.log(
      `\n\x1b[1m[${i + 1}/${IMAGE_MANIFEST.length}]\x1b[0m Processing: ${spec.name}`
    );
    console.log("─".repeat(50));

    try {
      await generateImage(spec);
      successCount++;
    } catch {
      failCount++;
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log("\n\x1b[1m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m");
  console.log("\x1b[1m  Generation Complete\x1b[0m");
  console.log(`  \x1b[32mSucceeded:\x1b[0m ${successCount}`);
  if (failCount > 0) {
    console.log(`  \x1b[31mFailed:\x1b[0m    ${failCount}`);
  }
  console.log(`  Time:      ${elapsed}s`);
  console.log(`  Output:    ${OUTPUT_DIR}`);
  console.log("\x1b[1m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n");

  if (failCount > 0) {
    process.exit(1);
  }
}

main();
