# Store

## Overview

A full-stack online store (ecommerce + dashboard and CMS) where you can buy and sell products. Both store and admin websites were made from scratch meaning no third-party CMS is used! This website is a demo, made for educational purposes only therefore it does not sell real products.

Visit the websites from here:

- [Store](https://ecommerce-fake.karimwael.com)
- [Admin](https://admin.ecommerce-fake.karimwael.com)

This project is inspired by this [video](https://www.youtube.com/watch?v=5miHyP6lExg) ❤️

To test payment, use [Fawaterk test cards](https://fawaterak-api.readme.io/reference/test-cards).

## Features

- Admin dashboard
  - Log into your account using GitHub or Google.
  - Create your custom shops.
  - Customize your shop by changing their info (name, images, etc.), billboard, and adding properties.
  - Add products to your shops.
  - Customize your products by changing their info (name, images, price, etc.) or adding associated properties.
  - Pagination when browsing products.
  - Search easily for products, orders, and properties.
  - Make discounts on your products.
  - Track orders made by your customers.
  - Concise summary of sales performance and trends with charts.
- Store
  - Featured shops and products page.
  - New products page where the latest products are displayed.
  - Pagination when browsing products.
  - Ability to filter products by properties added to the shop.
  - Product information page where specific product information is displayed.
  - Add products to the cart.
  - Checkout with billing details.
  - Payment gateway using [Fawaterk](https://fawaterk.com).
  - About & Contact Us pages.

## How to use

- Admin dashboard
  1. Refer to the admin [website](https://admin.ecommerce-fake.karimwael.com) and login using either GitHub or Google. Once done, you will be redirected to a page with a dropdown in the center where you can click and create a new shop.
  2. Create a new shop with any name you want, then it will navigate to shop homepage.
  3. Navigate to properties page using the navbar above. Then create new properties like "Size" for the name and FixedValues for the type then for the values: XS, S, M, etc.
  4. Navigate to products page and create a new product. Now you can add the property you recently added to your shop in your product.
  5. Navigate to settings page and obtain the shop's url. This is your shop page that will be displayed to your customers. Your product you recently added should be visible there.

## Tools

- React.
- Next.js 13.
- Tailwind.
- PostgreSQL.
- Prisma.
- Cloudinary.

## Prerequisites

#### - Node v20.4.0

### Cloning this repo

Clone the repo and navigate to it:

- `git clone https://github.com/devkarim/ecommerce-fake.git`
- `cd ecommerce-fake`

### Install required packages

Use one of the following commands to install the packages:

- `npm i`
- `yarn`
- `pnpm i`

### Start development server

Use one of the following commands to start the development server:

- `npm run dev`
- `yarn dev`
- `pnpm dev`

## See also

- [Admin dashboard repo](https://github.com/devkarim/ecommerce-fake-admin)

## Author

This project is made by [@devkarim](https://github.com/devkarim).

## License

This project is licensed under the [MIT](https://github.com/devkarim/ecommerce-fake/blob/main/LICENSE.md) License - feel free to explore, modify, and share.
