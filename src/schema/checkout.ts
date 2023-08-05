import { z } from 'zod';

export const checkoutSchema = z.object({
  first_name: z.string().min(3, 'First name must be at least 3 characters.'),
  last_name: z.string().min(3, 'Last name must be at least 3 characters.'),
  email: z.string().email('Email address is invalid.'),
  phone: z.number({
    required_error: 'Phone number is required.',
    invalid_type_error: 'Phone number is required.',
  }),
  address_line_1: z
    .string()
    .min(3, 'Address line 1 must be at least 3 characters.'),
  address_line_2: z.string().optional(),
  city: z.string().min(3, 'City must be at least 3 characters.'),
  country: z.string().min(4, 'Country must be at least 4 characters.'),
  zip: z
    .string({ required_error: 'Zip code is required.' })
    .regex(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Zip code is invalid.'),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
