"use client";
import React, { ChangeEvent } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type PositionsCheckProps = {
  selectedPositions: string[];
  onChange: (position: string) => void;
};

export function PositionsCheck({
  selectedPositions,
  onChange,
}: PositionsCheckProps) {
  const handlePositionChange = (position: string, checked: string | boolean) => {
    if (checked) {
      onChange(position);
    } else {
      onChange(position); // Optional: Handle unchecking logic if needed
    }
  };
  return (
    <div className="w-full flex flex-col gap-3 md:flex-row md:gap-3 md:justify-between">
      <div className="flex items-center gap-2">
        <Checkbox
          id="midscreen"
          value="midscreen"
          checked={selectedPositions.includes('midscreen')}
          onCheckedChange={(checked) => handlePositionChange('midscreen', checked)}
        />
        <label
          htmlFor="midscreen"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Midscreen
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="corner"
          value="corner"
          checked={selectedPositions.includes('corner')}
          onCheckedChange={(checked) => handlePositionChange('corner', checked)}
        />
        <label
          htmlFor="corner"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Corner
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="jump"
          value="jump"
          checked={selectedPositions.includes('jump')}
          onCheckedChange={(checked) => handlePositionChange('jump', checked)}
        />
        <label
          htmlFor="jump"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Jump
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="antiair"
          value="antiair"
          checked={selectedPositions.includes('antiair')}
          onCheckedChange={(checked) => handlePositionChange('antiair', checked)}
        />
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
