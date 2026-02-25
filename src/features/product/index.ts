import defaultHook from '@/core/openapi/default-hook.js'
import * as controllers from '@/features/product/product.controller.js'
import * as routes from '@/features/product/product.routes.js'
import { OpenAPIHono } from '@hono/zod-openapi'

const router = new OpenAPIHono({ defaultHook })
  .openapi(routes.getAllProductsRoute, controllers.getAllProducts)
  .openapi(routes.getProductByIdRoute, controllers.getProductById)
  .openapi(routes.createProductRoute, controllers.createProduct)

export default router
