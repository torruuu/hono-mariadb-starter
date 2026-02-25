import defineOpenAPI from '@/core/openapi/config.js'
import productRouter from '@/features/product/index.js'
import { createApp } from './core/factories/create-app'

const app = createApp()

defineOpenAPI(app)

app.route('/products', productRouter)

export default app
