import { makeAssistantToolUI } from "@assistant-ui/react";

type WebSearchArgs = {
    query: string;
};

type SearchResult = {
    title: string;
    url: string;
    content: string;
    score: number;
};

type ToolMessage = {
    lc: number;
    type: string;
    id: string[];
    kwargs: {
        content: string;
        tool_call_id: string;
        name: string;
    };
};

type WebSearchResult = {
    answer: string;
} | string | ToolMessage;

export const WebSearchTool = makeAssistantToolUI<WebSearchArgs, WebSearchResult>({
    toolName: "web_search",
    render: ({ args, result }) => {
        console.log('WebSearchTool render:', { args, result });

        let searchResults: SearchResult[] = [];
        if (result) {
            try {
                // First parse the string into a ToolMessage
                const toolMessage = typeof result === 'string' 
                    ? JSON.parse(result) 
                    : result;
                
                // Then parse the content field which contains the actual results
                if ('kwargs' in toolMessage && toolMessage.kwargs.content) {
                    searchResults = JSON.parse(toolMessage.kwargs.content);
                }
                
                console.log('Parsed search results:', searchResults);
            } catch (e) {
                console.error('Failed to parse search results:', e);
            }
        }

        return (
            <div className="mb-4 flex flex-col items-center gap-2 w-full max-w-2xl">
                <div className="bg-gray-100 rounded p-2 w-full">
                    <div className="font-medium text-sm text-gray-600">Search Query:</div>
                    <div className="text-gray-800">{args.query}</div>
                </div>
                
                <div className="bg-white border rounded p-3 w-full">
                    <div className="font-medium text-sm text-gray-600">Search Results:</div>
                    {searchResults.length > 0 ? (
                        <div className="space-y-4 mt-2">
                            {searchResults.map((result, index) => (
                                <div key={index} className="border-l-2 border-blue-200 pl-3">
                                    <div className="font-medium text-blue-600">
                                        <a href={result.url} target="_blank" rel="noopener noreferrer">
                                            {result.title}
                                        </a>
                                    </div>
                                    <div className="text-sm text-gray-700 mt-1">
                                        {result.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-gray-400 italic">Loading results...</div>
                    )}
                </div>
            </div>
        );
    },
});