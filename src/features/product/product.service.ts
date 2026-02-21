import type { Product } from '@/features/product/product.types.js'
import { prisma } from '@/integrations/database/config'

export function getAllProducts(): Promise<Product[]> {
  return prisma.product.findMany()
}

export function getProductById(id: number): Promise<Product | null> {
  return prisma.product.findUnique({ where: { id } })
}
