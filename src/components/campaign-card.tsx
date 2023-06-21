import { CheckIcon, StarIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

const product = {
  name: 'Everyday Ruck Snack',
  price: '$220',
  rating: 3.9,
  href: '#',
  description:
    'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg',
  imageAlt: 'Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.',
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' }
  ]
};

const CampaignCard = () => {
  return (
    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

      <section aria-labelledby="information-heading" className="mt-4">
        <h3 id="information-heading" className="sr-only">
          Product information
        </h3>

        <div className="flex items-center">
          <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>

          <div className="ml-4 border-l border-gray-300 pl-4">
            <h4 className="sr-only">Reviews</h4>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map(rating => (
                  <StarIcon
                    key={rating}
                    className={clsx(product.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 shrink-0')}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating} out of 5 stars</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center">
          <CheckIcon className="h-5 w-5 shrink-0 text-green-500" aria-hidden="true" />
          <p className="ml-2 font-medium text-gray-500">In stock and ready to ship</p>
        </div>

        <div className="mt-6">
          <h4 className="sr-only">Description</h4>

          <p className="text-sm text-gray-700">{product.description}</p>
        </div>
      </section>

      <section aria-labelledby="options-heading" className="mt-6">
        <h3 id="options-heading" className="sr-only">
          Product options
        </h3>

        <p className="absolute left-4 top-4 text-center sm:static sm:mt-6">
          <a href={product.href} className="font-medium text-indigo-600 hover:text-indigo-500">
            View full details
          </a>
        </p>
      </section>
    </div>
  );
};

export default CampaignCard;
