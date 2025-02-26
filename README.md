This is using the [assistant-ui](https://github.com/Yonom/assistant-ui) starter project to connect to a [LangGraph](https://github.com/langchain-ai/langgraph) assistant and provide a chat interface.

The assistant is able to browse an [Elastic Path](https://www.elasticpath.com/) catalog and retrieve product information.


## Getting Started

First, add your OpenAI API key to `.env.local` file:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
