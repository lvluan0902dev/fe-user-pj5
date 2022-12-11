import { ProductOption } from "../product-option/product-option.model";
import { Product } from "../product/product.model";

export interface CartItem {
    id: number,
    key: string,
    product_id: number,
    product_option_id: number,
    quantity: number,
    created_at: string,
    updated_at: string,
    product: Product,
    product_option: ProductOption
}
