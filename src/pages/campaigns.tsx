import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CampaignCard from '@/components/campaign-card';
import { useGetCampaignsQuery } from '@/features/campaigns';
import { GuestLayout } from '@/layouts';
import type { NextPageWithLayout } from '@/utils/types';

const CampaignsPage: NextPageWithLayout = () => {
  const { data } = useGetCampaignsQuery();

  console.log(data);

  return (
    <>
      <div aria-hidden="true" className="relative">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-24 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-gray-500">
            Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you
            meticulously arrange items into dedicated trays.
          </p>
        </div>
      </div>

      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide>
          <CampaignCard />
        </SwiperSlide>
        <SwiperSlide>
          <CampaignCard />
        </SwiperSlide>
        <SwiperSlide>
          <CampaignCard />
        </SwiperSlide>
        <SwiperSlide>
          <CampaignCard />
        </SwiperSlide>
        <SwiperSlide>
          <CampaignCard />
        </SwiperSlide>
        <SwiperSlide>
          <CampaignCard />
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

CampaignsPage.layout = page => (
  <GuestLayout title="Campagnes | Blood Donation App" description="Campagnes">
    {page}
  </GuestLayout>
);

export default CampaignsPage;
