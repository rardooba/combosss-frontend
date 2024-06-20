"use client";
import React, { ChangeEvent } from 'react';
import { Checkbox } from "@/components/ui/checkbox";

type PositionsCheckProps = {
  onChange: (value: string) => void;
};

export function PositionsCheck({ onChange }: PositionsCheckProps) {
  const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onChange(e.target.value);
    }
  };
  return (
    <div className="w-full flex flex-col gap-3 md:flex-row md:gap-3 md:justify-between">
      <div className="flex items-center gap-2">
        <Checkbox id="midscreen" value="midscreen" onCheckedChange={(checked) => handlePositionChange({ target: { value: 'midscreen', checked } } as ChangeEvent<HTMLInputElement>)}/>
        <label
          htmlFor="midscreen"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Midscreen
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="corner" value="corner" onCheckedChange={(checked) => handlePositionChange({ target: { value: 'midscreen', checked } } as ChangeEvent<HTMLInputElement>)} />
        <label
          htmlFor="corner"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Corner
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="jump" value="jump" onCheckedChange={(checked) => handlePositionChange({ target: { value: 'midscreen', checked } } as ChangeEvent<HTMLInputElement>)} />
        <label
          htmlFor="jump"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Jump
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="antiair" value="antiair" onCheckedChange={(checked) => handlePositionChange({ target: { value: 'midscreen', checked } } as ChangeEvent<HTMLInputElement>)} />
        <label
          htmlFor="antiair"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Anti-air
        </label>
      </div>
    </div>
  );
}
