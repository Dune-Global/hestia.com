import React from "react";
import PageHeader from "@/components/common/layout/PageHeader";
import Image from "next/image";

export default function PreviewArticlesPage() {
  return (
    <>
      <PageHeader title="Preview article." />
      <div className="pt-8 md:pt-0 pb-8 md:pb-24 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center">
        <div className="text-center font-bold text-xl md:text-2xl lg:text-3xl">
          Navigating the Rental Market: Insider Tips for Finding Your Perfect
          Accommodation
        </div>
        <div>
          <Image
            src="/assets/images/admin/article.png"
            alt="article"
            width="2400"
            height="800"
          />
        </div>
        <div className="flex flex-col gap-8 text:md md:text-lg font-medium text-justify">
          <div>
            In the fast-paced world of real estate rentals, finding the ideal
            accommodation can be a daunting task. From navigating listings to
            understanding rental agreements,  there &apos s a lot to consider.
            Fortunately, with the right guidance, you can streamline the process
            and secure the perfect place to call home.
          </div>
          <div>
            1. Start with a Clear Vision: Before diving into the rental market,
            take some time to define your needs and preferences. Consider
            factors such as location, budget, size, amenities, and proximity to
            essential services. Having a clear vision of what you &apos re looking for
            will help you narrow down your options and focus your search.
          </div>
          <div>
            2. Utilize Online Resources: The internet is a treasure trove of
            rental listings and resources. Take advantage of online platforms
            like our website to browse available properties, compare prices, and
            view photos and virtual tours. Filter your search based on your
            criteria to save time and find listings that match your preferences.
          </div>
          <div>
            3. Attend Open Houses and Inspections: Once you&aposve identified
            potential properties, attend open houses or schedule inspections to
            see them in person. This will give you a better sense of the
            property&aposs condition, layout, and surroundings. Take note of any red
            flags or deal-breakers and don&apost hesitate to ask questions about the
            property or rental terms.
          </div>
          <div>
            4. Understand Rental Agreements: Before signing on the dotted line,
            make sure you thoroughly understand the terms of the rental
            agreement. Pay close attention to clauses related to rent,
            utilities, security deposits, maintenance responsibilities, and
            lease duration. If anything seems unclear or unreasonable, don&apost
            hesitate to seek clarification or negotiate terms with the landlord
            or property manager.
          </div>
          <div>
            5. Consider Additional Factors: In addition to the property itself,
            consider other factors that may impact your living experience.
            Research the neighborhood&aposs safety, accessibility to public
            transportation, proximity to schools or workplaces, and availability
            of amenities such as grocery stores, parks, and recreational
            facilities. Visiting the neighborhood at different times of the day
            can give you a better sense of its vibe and suitability for your
            lifestyle.
          </div>
          <div>
            6. Seek Professional Advice: If you&aposre new to the rental market or
            feeling overwhelmed, don&apost hesitate to seek advice from
            professionals such as real estate agents or property managers. They
            can provide valuable insights, help you navigate the rental process,
            and advocate on your behalf during negotiations.
          </div>
        </div>
      </div>
    </>
  );
}
