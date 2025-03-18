"use client";

import { Card } from "@/components/Card";
import image from "./example-image.png";

export function CardDisplay() {
  return (
    <>
      <p className="text-3xl underline p-2">Card</p>
      <Card img={image} height={2160} width={1440}>
        <p>Content</p>
      </Card>
    </>
  );
}
