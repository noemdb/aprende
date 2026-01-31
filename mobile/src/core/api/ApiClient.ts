export class ApiClient {
    private baseUrl: string;
    private defaultHeaders: HeadersInit;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    }

    async get<T>(endpoint: string, headers?: HeadersInit): Promise<T> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'GET',
            headers: { ...this.defaultHeaders, ...headers },
        });

        return this.handleResponse<T>(response);
    }

    async post<T>(endpoint: string, body: any, headers?: HeadersInit): Promise<T> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: { ...this.defaultHeaders, ...headers },
            body: JSON.stringify(body),
        });

        return this.handleResponse<T>(response);
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorBody}`);
        }
        return response.json() as Promise<T>;
    }
}

// Singleton instance for the app
// In a real scenario, the URL would come from environment variables
export const apiClient = new ApiClient('https://api.mock-saefl.edu'); 
