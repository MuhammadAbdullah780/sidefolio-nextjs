import { BlurFade } from "@/components/common/BlurFade";
import MaxWidth from "@/components/common/MaxWidth";
import Image from "next/image";
import React from "react";

const AboutContainer = () => {
  return (
    <MaxWidth className="flex flex-col gap-5 py-10 px-5">
      <h1 className="heading-1">About Me</h1>

      <BlurFade className="relative h-[350px] overflow-hidden rounded-md">
        <Image src="/about-banner.avif" alt="me" fill />
      </BlurFade>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero
        reiciendis, labore ullam molestiae minima error earum facere? Quia
        facere dolore consectetur officia nulla corrupti expedita quo
        reprehenderit libero a optio doloribus natus voluptates doloremque, esse
        ea! Deleniti sint provident voluptatum dignissimos tempore, mollitia
        asperiores molestiae reiciendis beatae modi ullam!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        inventore qui consequatur, totam veritatis accusamus reprehenderit
        sapiente distinctio unde! Obcaecati necessitatibus possimus voluptatem
        natus provident! Similique voluptatum voluptates eligendi rem?
        Consequuntur voluptas illum aliquid suscipit adipisci. Iste dolorem
        expedita hic voluptates nostrum nam vero eum odit? Iure error,
        perferendis facilis quod quaerat architecto quos, quidem, velit
        consequuntur sint temporibus tempora fuga recusandae id minus vel quam
        fugiat explicabo aperiam libero asperiores pariatur fugit! Officia nisi
        aspernatur consequuntur quo unde culpa necessitatibus sint praesentium,
        velit neque pariatur, minima, assumenda similique commodi. Ipsa
        asperiores tempora ad inventore architecto suscipit quas pariatur
        consequuntur!
      </p>
      <p>
        Thank you for being here, and I can't wait to embark on this adventure
        with you.
      </p>
    </MaxWidth>
  );
};

export default AboutContainer;
