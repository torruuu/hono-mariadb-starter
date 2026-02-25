import { zDecimal, zIntParam } from '@/shared/utils/validators'
import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: zDecimal(),
  stock: z.number(),
  category: z.string(),
})

export const ProductListSchema = z.array(ProductSchema)

export const ProductIdParamSchema = z.object({
  id: zIntParam(),
})
