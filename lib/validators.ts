import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
  .string()
  .refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))));

export const insertProductShema = z.object({
  name: z.string().min(3, 'Name min 3 letters'),
  slug: z.string().min(3, 'Slug min 3 letters'),
  category: z.string().min(3, 'Category min 3 letters'),
  brand: z.string().min(3, 'Brand min 3 letters'),
  description: z.string().min(3, 'Description min 3 letters'),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'Min 1 photo'),
  isFeature: z.boolean(),
  banner: z.boolean().nullable(),
  price: currency,
});
