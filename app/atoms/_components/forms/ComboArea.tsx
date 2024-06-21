/* eslint-disable @next/next/no-img-element */
import { TextAlignLeftIcon } from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type ComboAreaProps = {
  onInputAdd: (inputName: string, inputSrc: string) => void;
  onNewLineAdd: () => void;
};

export function ComboArea({ onInputAdd, onNewLineAdd }: ComboAreaProps) {
  const handleAddInput = (name: string, src: string) => {
    onInputAdd(name, src);
  };
  return (
    <ToggleGroup className="flex flex-wrap justify-start" type="single">
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-d"
        aria-label="Toggle key-d"
        onClick={() =>
          handleAddInput("d", "/assets/form/inputs/directions/key-d.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-d.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-u"
        aria-label="Toggle key-u"
        onClick={() =>
          handleAddInput("d", "/assets/form/inputs/directions/key-u.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-u.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-dc"
        aria-label="Toggle key-dc"
        onClick={() =>
          handleAddInput("dc", "/assets/form/inputs/directions/key-dc.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-dc.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-dl"
        aria-label="Toggle key-dl"
        onClick={() =>
          handleAddInput("dl", "/assets/form/inputs/directions/key-dl.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-dl.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-dr"
        aria-label="Toggle key-dr"
        onClick={() =>
          handleAddInput("dr", "/assets/form/inputs/directions/key-dr.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-dr.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-l"
        aria-label="Toggle key-l"
        onClick={() =>
          handleAddInput("l", "/assets/form/inputs/directions/key-l.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-l.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-lc"
        aria-label="Toggle key-lc"
        onClick={() =>
          handleAddInput("lc", "/assets/form/inputs/directions/key-lc.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-lc.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-r"
        aria-label="Toggle key-r"
        onClick={() =>
          handleAddInput("r", "/assets/form/inputs/directions/key-r.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-r.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-circle"
        aria-label="Toggle key-circle"
        onClick={() =>
          handleAddInput(
            "circle",
            "/assets/form/inputs/directions/key-circle.png"
          )
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/directions/key-circle.png"
          alt="directions"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_kick_h"
        aria-label="Toggle icon_kick_h"
        onClick={() =>
          handleAddInput("kick_h", "/assets/form/inputs/kicks/icon_kick_h.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/kicks/icon_kick_h.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_kick_l"
        aria-label="Toggle icon_kick_l"
        onClick={() =>
          handleAddInput("kick_l", "/assets/form/inputs/kicks/icon_kick_l.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/kicks/icon_kick_l.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_kick_m"
        aria-label="Toggle icon_kick_m"
        onClick={() =>
          handleAddInput("kick_m", "/assets/form/inputs/kicks/icon_kick_m.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/kicks/icon_kick_m.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_kick"
        aria-label="Toggle icon_kick"
        onClick={() =>
          handleAddInput("kick", "/assets/form/inputs/kicks/icon_kick.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/kicks/icon_kick.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_punch_h"
        aria-label="Toggle icon_punch_h"
        onClick={() =>
          handleAddInput(
            "punch_h",
            "/assets/form/inputs/punches/icon_punch_h.png"
          )
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/punches/icon_punch_h.png"
          alt="punches"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_punch_l"
        aria-label="Toggle icon_punch_l"
        onClick={() =>
          handleAddInput(
            "punch_l",
            "/assets/form/inputs/punches/icon_punch_l.png"
          )
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/punches/icon_punch_l.png"
          alt="punches"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_punch_m"
        aria-label="Toggle icon_punch_m"
        onClick={() =>
          handleAddInput(
            "punch_m",
            "/assets/form/inputs/punches/icon_punch_m.png"
          )
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/punches/icon_punch_m.png"
          alt="punches"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_punch"
        aria-label="Toggle icon_punch"
        onClick={() =>
          handleAddInput("punch", "/assets/form/inputs/punches/icon_punch.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/punches/icon_punch.png"
          alt="punches"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-nutral"
        aria-label="Toggle key-nutral"
        onClick={() =>
          handleAddInput(
            "nutral",
            "/assets/form/inputs/specials/key-nutral.png"
          )
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/specials/key-nutral.png"
          alt="specials"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-plus"
        aria-label="Toggle key-plus"
        onClick={() =>
          handleAddInput("plus", "/assets/form/inputs/specials/key-plus.png")
        }
      >
        <img
          className="w-6"
          src="/assets/form/inputs/specials/key-plus.png"
          alt="specials"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="s1"
        aria-label="Toggle s1"
        onClick={() =>
          handleAddInput("s1", "/assets/form/inputs/specials/s1.png")
        }
      >
        <img
          className="w-10"
          src="/assets/form/inputs/specials/s1.png"
          alt="specials"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="s2"
        aria-label="Toggle s2"
        onClick={() =>
          handleAddInput("s2", "/assets/form/inputs/specials/s2.png")
        }
      >
        <img
          className="w-10"
          src="/assets/form/inputs/specials/s2.png"
          alt="specials"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="s3"
        aria-label="Toggle s3"
        onClick={() =>
          handleAddInput("s3", "/assets/form/inputs/specials/s3.png")
        }
      >
        <img
          className="w-10"
          src="/assets/form/inputs/specials/s3.png"
          alt="specials"
        />
      </ToggleGroupItem>
      <ToggleGroupItem className="overflow-hidden p-2" value="return" aria-label="return line" onClick={onNewLineAdd}>
        <TextAlignLeftIcon className="h-6 w-6" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
