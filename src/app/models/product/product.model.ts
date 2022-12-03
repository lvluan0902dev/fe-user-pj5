import { ProductBrand } from "../product-brand/product-brand.model";
import { ProductCategory } from "../product-category/product-category.model";
import { ProductImage } from "../product-image/product-image.model";
import { ProductOption } from "../product-option/product-option.model";

export interface Product {
    id: number,
    product_category_id: number,
    product_brand_id: number,
    name: string,
    option_name: string,
    option_price: number,
    option_stock: number,
    url: string,
    short_description: string,
    product_detail: string,
    how_to_use: string,
    ingredients: string,
    image_name: string,
    image_path: string,
    view_count: number,
    order_count: number,
    created_at: string,
    updated_at: string,
    product_category: ProductCategory,
    product_brand: ProductBrand,
    product_options: ProductOption[],
    product_images: ProductImage[]
}
