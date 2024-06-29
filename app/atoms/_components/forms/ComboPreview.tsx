/* eslint-disable @next/next/no-img-element */
import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

type Input = {
  inputName: string;
  inputSrc: string;
};

type ComboPreviewProps = {
  inputs: Input[][];
};

export function ComboPreview({ inputs }: ComboPreviewProps) {
  return (
    <ScrollArea className="h-24 w-full rounded-md border">
      <div className="p-4">
      {inputs.map((line, lineIndex) => (
          <div key={lineIndex}>
            <div className="flex space-x-2">
              {line.map((input, inputIndex) => (
                <img key={inputIndex} src={input.inputSrc} alt={input.inputName} className="w-4 h-4" />
              ))}
            </div>
            {lineIndex < inputs.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
