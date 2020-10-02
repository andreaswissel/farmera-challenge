export interface Alert {
    icon: string;
    text: string;
    title: string;
    timestamp: number;
    style: 'error' | 'success' | 'warn';
}
