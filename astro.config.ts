import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import embeds from "astro-embed/integration";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	output: "static",
	site: "https://flavienbonvin.com",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		embeds({
			services: {
				LinkPreview: false,
			},
		}),
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				themes: {
					light: "one-light",
					dark: "github-dark-default",
				},
			},
		}),
		icon(),
	],
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "dracula",
		},
	},
	adapter: vercel(),
	redirects: {
		"/reduce-next-js-bundle/": "/articles/reduce-next-js-bundle",
		"/amazing-nextjs-libraries-that-makes-coding-easier/":
			"/articles/amazing-nextjs-libraries-that-makes-coding-easier",
		"/what-makes-the-us-ansi-keyboard-is-the-best-layout-for-developers/":
			"/articles/what-makes-the-us-ansi-keyboard-is-the-best-layout-for-developers",
		"/quit-spotlight-and-alfred-10-best-raycast-extensions-for-web-developers/":
			"/articles/quit-spotlight-and-alfred-10-best-raycast-extensions-for-web-developers",
		"/how-tana-made-me-choose-obsidian-as-my-note-taking-app-and-its-amazing/":
			"/articles/how-tana-made-me-choose-obsidian-as-my-note-taking-app-and-its-amazing",
		"/slow-software-a-sign-of-appreciation-for-developers/":
			"/articles/slow-software-appreciation-for-developers",
		"/some-great-slow-software-companies/":
			"/articles/slow-software-great-slow-software-companies",
	},
});
