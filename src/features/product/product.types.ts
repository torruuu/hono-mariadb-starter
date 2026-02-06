import type { ProductSchema } from '@/features/product/product.schema.js'
import type { z } from 'zod'

export type Product = z.infer<typeof ProductSchema>
