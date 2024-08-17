export interface PriceType {
    usd: number;
    eur: number;
    inr: number;
}

export interface TemplateType {
    id: number;
    name: string;
    image_url: string;
    price: PriceType;
    description: string;
    features: string[];
    category: string;
    quantity?: number;
    span?: number
}

export type currencyType = "usd" | "inr" | "eur"