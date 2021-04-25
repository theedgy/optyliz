/**
 * Type of data returned by  http://www.omdbapi.com/?apikey={apiKey}&s={search}
 * Generated from JSON response with https://transform.tools/json-to-typescript
 */

export interface SearchResponse {
    Search: SearchItem[];
    totalResults: string;
    Response: string;
    Error?: string;
}

export interface SearchItem {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
