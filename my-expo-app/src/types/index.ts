export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Settings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
}

export type ApiResponse<T> = {
    data: T;
    error?: string;
};