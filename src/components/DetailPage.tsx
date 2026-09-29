"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Users,
  X,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { resorts, type Resort } from "@/data/resorts";
import { ResortNav } from "./ResortNav";
import { FeatureIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function DetailPage({ resort }: { resort: Resort }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(false);
  const [activeAccommodationIndex, setActiveAccommodationIndex] = useState(0);
  const accommodationSwiperRef = useRef<any>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const galleryImages = resort.gallery;
  const restaurantImages = [
    resort.restaurant.image,
    ...resort.restaurant.detailImages,
  ];
  const visibleGalleryCount = Math.min(4, galleryImages.length);
  const extraImageCount = Math.max(
    0,
    galleryImages.length - visibleGalleryCount,
  );

  useEffect(() => {
    if (!isGalleryOpen && !isAccommodationOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
        setIsAccommodationOpen(false);
      }
      if (event.key === "ArrowRight" && isGalleryOpen) {
        setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft" && isGalleryOpen) {
        setActiveGalleryIndex(
          (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
        );
      }
      if (event.key === "ArrowRight" && isAccommodationOpen) {
        setActiveAccommodationIndex(
          (prev) => (prev + 1) % resort.accommodation.length,
        );
      }
      if (event.key === "ArrowLeft" && isAccommodationOpen) {
        setActiveAccommodationIndex(
          (prev) =>
            (prev - 1 + resort.accommodation.length) %
            resort.accommodation.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    galleryImages.length,
    isAccommodationOpen,
    isGalleryOpen,
    resort.accommodation.length,
  ]);

  const openGalleryAt = (index: number) => {
    setActiveGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const prevSlide = () =>
    setActiveGalleryIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );

  const nextSlide = () =>
    setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);

  const openAccommodationAt = (index: number) => {
    setActiveAccommodationIndex(index);
    setIsAccommodationOpen(true);
  };

  const prevAccommodationSlide = () =>
    setActiveAccommodationIndex(
      (prev) =>
        (prev - 1 + resort.accommodation.length) % resort.accommodation.length,
    );

  const nextAccommodationSlide = () =>
    setActiveAccommodationIndex(
      (prev) => (prev + 1) % resort.accommodation.length,
    );

  return (
    <main
      style={{ ["--accent" as string]: resort.theme.accent } as CSSProperties}
      className="overflow-hidden bg-[#f4ede2] text-[#302018]"
    >
      <section className="relative h-[680px] overflow-hidden bg-black">
        <Image
          src={resort.hero}
          alt={`${resort.name} hero`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* <div className="hero-overlay absolute inset-0 z-10" /> */}
        <div className="bottom-overlay absolute inset-x-0 bottom-0 z-10 h-1/2" />
        <ResortNav resort={resort} />
        <div className="absolute inset-x-0 bottom-0 z-40 mx-auto max-w-[1380px] px-6 pb-20 md:px-12 md:pb-24">
          <div className="max-w-2xl text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.7)]">
            <div className="relative mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-white/35 bg-[#d7ad73]/25 p-[8px] shadow-lg backdrop-blur-md">
              {resort.logoSrc ? (
                <Image
                  src={resort.logoSrc}
                  alt={`${resort.name} logo`}
                  width={80}
                  height={42}
                  className="h-20 w-20 object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(2200%) hue-rotate(350deg) brightness(88%) contrast(105%)",
                  }}
                />
              ) : (
                <span className="text-2xl text-[#431d09]">
                  {resort.logoMark}
                </span>
              )}
            </div>
            <h1 className="luxury-serif text-5xl leading-[.95] md:text-8xl">
              {resort.name}
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-14 bg-[var(--accent)]" />
              <span className="text-xs tracking-[.18em] text-white/80">
                {resort.subtitle}
              </span>
            </div>
            <p className="mt-5 max-w-xl font-serif text-base leading-relaxed text-white/85 md:text-lg">
              {resort.description}
            </p>
            {/* <a
              href="#experience"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f4ede2] px-7 py-3.5 text-[10px] uppercase tracking-[.2em] text-[#302018] shadow-xl transition hover:bg-white"
            >
              Begin the experience <ArrowRight size={15} />
            </a> */}
          </div>
        </div>
      </section>

      <nav className="max-lg:hidden relative z-20 flex min-h-[58px] items-center justify-center border-b border-[#dfd4c5] bg-[#f4ede2] px-5 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[9px] uppercase tracking-[.22em] text-[#5d4c40] md:gap-x-10">
          <a href="#experience" className="transition hover:text-[#2c1a0f]">
            The Experience
          </a>
          <a href="#rooms" className="transition hover:text-[#2c1a0f]">
            Accommodations
          </a>
          <a href="#restaurant" className="transition hover:text-[#2c1a0f]">
            Restaurant
          </a>
          <a href="#gallery" className="transition hover:text-[#2c1a0f]">
            Gallery
          </a>
          <a href="#location" className="transition hover:text-[#2c1a0f]">
            How to Get There
          </a>
          <a href="#contact" className="transition hover:text-[#2c1a0f]">
            Contact Us
          </a>
        </div>
      </nav>

      <section
        id="experience"
        className="relative overflow-hidden bg-[#f4ede2] py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1380px] items-center md:grid-cols-[.9fr_1.1fr]">
          <Reveal className="relative z-10 px-6 md:pl-12 md:pr-0">
            <p className="text-[10px] uppercase tracking-[.45em] text-[#8c6b52]">
              The experience{" "}
              <span className="ml-3 inline-block h-px w-12 bg-[#8c6b52] align-middle" />
            </p>
            <h2 className="luxury-serif mt-5 max-w-md text-4xl leading-tight md:text-5xl">
              {resort.experienceTitle}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#665348]">
              {resort.experienceText}
            </p>
            <div className="mt-9 grid max-w-lg grid-cols-4 gap-3">
              {resort.features.slice(0, 4).map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-2 text-center text-[9px] leading-tight text-[#4e3b30]"
                >
                  <FeatureIcon icon={f.icon} size={22} />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
            <a
              href="#rooms"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#4b2917] px-6 py-3 text-xs text-white"
            >
              Explore the experience <ArrowRight size={14} />
            </a>
          </Reveal>
          <Reveal
            delay={0.12}
            className="relative mt-12 min-h-[470px] overflow-hidden md:mr-12 md:mt-0 md:min-h-[590px]"
          >
            <Image
              src={resort.introImage}
              alt="Landscape"
              fill
              sizes="(max-width: 768px) 100vw, 65vw"
              className="object-cover"
            />
            {/* <div className="fade-left absolute inset-0" /> */}
          </Reveal>
        </div>
      </section>

      <section id="rooms" className="bg-[#2c1a0f] py-24 text-white md:py-28">
        <div className="mx-auto grid max-w-[1380px] gap-12 px-6 md:grid-cols-[.62fr_1.38fr] md:px-12">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[.45em] text-[#d7ad73]">
              Accommodations{" "}
              <span className="ml-3 inline-block h-px w-12 bg-[#d7ad73] align-middle" />
            </p>
            <h2 className="luxury-serif mt-5 text-4xl leading-tight md:text-5xl">
              {resort.accommodationTitle}
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              {resort.accommodationText}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/35 px-6 py-3 text-xs"
            >
              View All Rooms <ArrowRight size={14} />
            </a>
          </Reveal>
          <Reveal delay={0.1} className="relative min-w-0">
            <Swiper
              modules={[Navigation]}
              navigation={false}
              spaceBetween={16}
              slidesPerView={1.15}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onSwiper={(swiper) => {
                accommodationSwiperRef.current = swiper;
              }}
              className="w-full"
            >
              {resort.accommodation.map((room, index) => (
                <SwiperSlide key={room.title}>
                  <article className="group">
                    <button
                      type="button"
                      onClick={() => openAccommodationAt(index)}
                      className="relative block aspect-[1.05] w-full overflow-hidden rounded-[4px] text-left"
                      aria-label={`Open ${room.title}`}
                    >
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </button>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="luxury-serif text-lg">{room.title}</h3>
                        <p className="mt-1 flex items-center gap-1 text-[10px] text-white/60">
                          <Users size={12} /> {room.guests}
                        </p>
                      </div>
                      <ArrowRight size={16} className="mt-1 text-white/55" />
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              type="button"
              onClick={() => accommodationSwiperRef.current?.slidePrev()}
              className="absolute left-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-black/35 text-white transition hover:bg-black/60"
              aria-label="Previous accommodation"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              onClick={() => accommodationSwiperRef.current?.slideNext()}
              className="absolute right-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-black/35 text-white transition hover:bg-black/60"
              aria-label="Next accommodation"
            >
              <ChevronRight size={14} />
            </button>
          </Reveal>
        </div>
      </section>

      <section id="restaurant" className="bg-[#f4ede2] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1380px] items-center gap-10 px-6 md:grid-cols-[1.1fr_.9fr] md:px-0">
          <Reveal className="relative min-w-0 h-[420px] overflow-hidden md:h-[530px]">
            <Swiper
              modules={[Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={false}
              className="h-full w-full min-w-0"
            >
              {restaurantImages.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`}>
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={image}
                      alt="Restaurant"
                      fill
                      sizes="(max-width: 768px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0 px-0 md:pl-5">
            <p className="text-[10px] uppercase tracking-[.45em] text-[#8c6b52]">
              Restaurant{" "}
              <span className="ml-3 inline-block h-px w-12 bg-[#8c6b52] align-middle" />
            </p>
            <h2 className="luxury-serif mt-5 max-w-lg text-4xl leading-tight md:text-5xl">
              {resort.restaurant.title}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#665348]">
              {resort.restaurant.text}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#4b2917] px-6 py-3 text-xs text-white"
            >
              View Menu <ArrowRight size={14} />
            </a>

            <div className="mt-10 flex items-center gap-2">
              <button
                type="button"
                onClick={() => thumbsSwiper?.slidePrev()}
                className="grid h-8 w-8 place-items-center rounded-full border border-[#4b2917]/30 bg-white/70 text-[#4b2917] transition hover:bg-white"
                aria-label="Previous restaurant image"
              >
                <ChevronLeft size={14} />
              </button>

              <div className="min-w-0 flex-1 overflow-hidden">
                <Swiper
                  modules={[Thumbs]}
                  slidesPerView={3}
                  spaceBetween={8}
                  watchSlidesProgress
                  watchOverflow
                  touchRatio={1}
                  loop={true}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="restaurant-thumbs w-full min-w-0"
                  onSwiper={setThumbsSwiper}
                >
                  {restaurantImages.map((image, index) => (
                    <SwiperSlide key={`${image}-${index}`} className="min-w-0">
                      <button
                        type="button"
                        onClick={() => thumbsSwiper?.slideTo(index)}
                        className={`relative block aspect-square w-full overflow-hidden rounded-md border transition ${
                          thumbsSwiper?.activeIndex === index
                            ? "border-[#4b2917] ring-2 ring-[#4b2917]/60"
                            : "border-transparent"
                        }`}
                        aria-label={`View restaurant image ${index + 1}`}
                      >
                        <Image
                          src={image}
                          alt="Food detail"
                          fill
                          sizes="20vw"
                          className="object-cover"
                        />
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <button
                type="button"
                onClick={() => thumbsSwiper?.slideNext()}
                className="grid h-8 w-8 place-items-center rounded-full border border-[#4b2917]/30 bg-white/70 text-[#4b2917] transition hover:bg-white"
                aria-label="Next restaurant image"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="gallery"
        className="relative overflow-hidden bg-[#2d211b] py-20 text-white md:py-28"
      >
        <div className="relative mx-auto max-w-[1380px] px-6 md:px-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[.45em] text-[#d7ad73]">
                Gallery
              </p>
              <h2 className="luxury-serif mt-5 text-5xl leading-none md:text-[5rem]">
                Moments Captured
              </h2>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white/85">
              <Camera size={18} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.25fr_.75fr]">
            <button
              type="button"
              onClick={() => openGalleryAt(0)}
              className="relative min-h-[420px] overflow-hidden rounded-lg md:min-h-[620px]"
              aria-label="Open gallery"
            >
              <Image
                src={galleryImages[0]}
                alt={`${resort.name} gallery main view`}
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </button>

            <div className="grid gap-4 sm:grid-cols-2">
              {galleryImages.slice(1, 5).map((image, index) => {
                const actualIndex = index + 1;
                const lastVisiblePreviewIndex = Math.min(
                  4,
                  galleryImages.length - 1,
                );
                const hasExtraImages =
                  extraImageCount > 0 &&
                  actualIndex === lastVisiblePreviewIndex;

                return (
                  <button
                    key={`${image}-${actualIndex}`}
                    type="button"
                    onClick={() => openGalleryAt(actualIndex)}
                    className="relative min-h-[200px] overflow-hidden rounded-lg"
                    aria-label={`Open gallery image ${actualIndex + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${resort.name} gallery ${actualIndex + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition duration-500 hover:scale-[1.02]"
                    />
                    {hasExtraImages && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-3xl font-medium tracking-wide text-white">
                        +{extraImageCount}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60 md:left-5"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#1a120d] shadow-2xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={galleryImages[activeGalleryIndex]}
                  alt={`${resort.name} gallery image ${activeGalleryIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60 md:right-5"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            <div className="mt-4 flex items-center justify-between gap-4 text-sm text-white/75">
              <span>
                {activeGalleryIndex + 1} / {galleryImages.length}
              </span>
              <span className="uppercase tracking-[.2em] text-white/50">
                {resort.name}
              </span>
            </div>
          </div>
        </div>
      )}

      {isAccommodationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setIsAccommodationOpen(false)}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60"
              aria-label="Close accommodation preview"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={prevAccommodationSlide}
              className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60 md:left-5"
              aria-label="Previous accommodation"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#1a120d] shadow-2xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={resort.accommodation[activeAccommodationIndex].image}
                  alt={resort.accommodation[activeAccommodationIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <button
              type="button"
              onClick={nextAccommodationSlide}
              className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60 md:right-5"
              aria-label="Next accommodation"
            >
              <ChevronRight size={18} />
            </button>

            <div className="mt-4 flex items-center justify-between gap-4 text-sm text-white/75">
              <span>
                {resort.accommodation[activeAccommodationIndex].title} ·{" "}
                {resort.accommodation[activeAccommodationIndex].guests}
              </span>
              <span>
                {activeAccommodationIndex + 1} / {resort.accommodation.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <section id="location" className="bg-[#f4ede2] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1380px] items-center gap-12 px-6 md:grid-cols-[.65fr_1.35fr] md:px-12">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[.45em] text-[#8c6b52]">
              How to get there{" "}
              <span className="ml-3 inline-block h-px w-12 bg-[#8c6b52] align-middle" />
            </p>
            <h2 className="luxury-serif mt-5 text-4xl leading-tight">
              Easy to Reach,
              <br />
              Hard to Leave
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#665348]">
              Use this section for your real location, driving time, transfer
              options and nearest airport information.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#4b2917] px-6 py-3 text-xs text-white"
            >
              View Directions <ArrowRight size={14} />
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr]">
              <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-[#e7dccb]">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(#765d49 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="absolute left-[24%] top-[62%] h-px w-[50%] rotate-[-24deg] bg-[#5b4738]" />
                <MapPin
                  className="absolute left-[68%] top-[31%] text-[#4b2917]"
                  fill="#d7ad73"
                />
                <span className="absolute left-[70%] top-[24%] text-xs font-serif">
                  {resort.name}
                </span>
                <span className="absolute left-[17%] top-[66%] text-xs text-[#6c594a]">
                  Ulaanbaatar
                </span>
              </div>
              <div className="space-y-7 pt-2 text-sm text-[#5d4c40]">
                <div>
                  <p className="font-semibold text-[#302018]">By Car</p>
                  <p className="mt-1 text-xs">2.5 hours from Ulaanbaatar</p>
                </div>
                <div>
                  <p className="font-semibold text-[#302018]">
                    Private Transfer
                  </p>
                  <p className="mt-1 text-xs">Available upon request</p>
                </div>
                <div>
                  <p className="font-semibold text-[#302018]">
                    Nearest Airport
                  </p>
                  <p className="mt-1 text-xs">
                    Chinggis Khaan International Airport
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#24160e] py-20 text-white md:py-24"
      >
        <div className="absolute inset-0 opacity-30">
          <Image
            src={resort.hero}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="dark-fade absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1380px] gap-12 px-6 md:grid-cols-[1fr_1fr_1fr] md:px-12">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[.45em] text-[#d7ad73]">
              Contact us{" "}
              <span className="ml-3 inline-block h-px w-12 bg-[#d7ad73] align-middle" />
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Tell us your dates, group size and preferred activities. Our team
              will help you plan a calm desert stay that fits your journey.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 pt-3 text-sm text-white/75">
            <div className="flex gap-4">
              <Phone size={17} className="text-[#d7ad73]" />
              {resort.contact.phone}
            </div>
            <div className="flex gap-4">
              <Mail size={17} className="text-[#d7ad73]" />
              {resort.contact.email}
            </div>
            <div className="flex gap-4">
              <MapPin size={17} className="text-[#d7ad73]" />
              {resort.contact.location}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <nav className=" pt-3" aria-label="Resort navigation">
              <div className="grid gap-3 text-sm text-white/80">
                <Link
                  href="/"
                  className="flex items-center justify-between border-b border-white/10 pb-3 transition hover:text-[#d7ad73]"
                >
                  Home <ArrowRight size={15} />
                </Link>
                {resorts
                  .filter((otherResort) => otherResort.slug !== resort.slug)
                  .map((otherResort) => (
                    <Link
                      key={otherResort.slug}
                      href={`/resorts/${otherResort.slug}`}
                      className="flex items-center justify-between border-b border-white/10 pb-3 transition hover:text-[#d7ad73]"
                    >
                      {otherResort.name} <ArrowRight size={15} />
                    </Link>
                  ))}
              </div>
            </nav>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#1b100a] px-6 py-7 text-center text-[10px] uppercase tracking-[.25em] text-white/40">
        <Link href="/" className="transition hover:text-white">
          © {new Date().getFullYear()} {resort.name} · All rights reserved
        </Link>
      </footer>
    </main>
  );
}
