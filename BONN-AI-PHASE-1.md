# Bonn AI Experience — UI-first implementation

This branch adds a UI-first Bonn AI experience while leaving the existing corporate website and database schema untouched.

## Route
- `/ai-assistant` — bilingual customer discovery experience and internal workspace preview.

## Included
- Guided consumer onboarding for skin, hair, body and wellness discovery.
- Chat interface with interactive suggestion chips.
- Gemini 3.5 Flash-Lite server-side API route.
- Strict catalogue-grounding instructions: the assistant must not invent Bonn product records while the catalogue is not connected.
- Product knowledge workspace preview, import preparation UI, conversation workspace and illustrative insights dashboard.
- B2B manufacturing inquiry entry point.
- Arabic / English interface toggle and responsive navigation.

## Environment
Set `GEMINI_API_KEY` in the deployment environment. See `.env.example`.
The key is server-side only.

## Important phase boundary
No product database, product import, image storage, vector index, customer persistence or live analytics are added in this phase. Catalogue numbers, example records and analytics shown in the UI are placeholders for layout review only. The next phase should design and connect the approved product data model and ingestion workflow.

## Model
`gemini-3.5-flash-lite`
