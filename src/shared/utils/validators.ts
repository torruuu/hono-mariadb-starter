import { Decimal } from '@prisma/client/runtime/client'
import { z } from 'zod'

export const zDecimal = () =>
  z
    .union([z.string(), z.number()])
    .refine(
      (val) => {
        try {
          new Decimal(val)
          return true
        } catch {
          return false
        }
      },
      { message: 'Invalid decimal value' },
    )
    .transform((val) => new Decimal(val))
