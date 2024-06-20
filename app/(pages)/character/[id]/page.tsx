import { Separator } from "@/components/ui/separator";
import { CharacterInfos } from "@/app/atoms/_components/CharacterInfos";
import { CombosList } from "@/app/atoms/_components/CombosList";
import { Section } from "@/app/atoms/_components/Section";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

type Character = {
  id: number;
  name: string;
  avatar: string;
  story: string;

  vitality: number;
  type: string;
  effectiveRange: string;
  easeOfUse: string;
  numberOfCombos: number;
  numberOfLikes: number;
  numberOfLovers: number;
};

const fetchCharacter = async (id: number): Promise<Character> => {
  const response = await fetch(`http://localhost:3010/api/characters/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    const errorDetail = await response.text();
    console.error("Failed to fetch character:", response.status, errorDetail);
    throw new Error("Failed to fetch character");
  }
  const character = await response.json();
  return character;
};

const Character = async ({ params }: { params: { id: string } }) => {
  try {
    const character = await fetchCharacter(Number(params.id));

    return (
      <main>
        <Section className="grid grid-cols-[250px_1px_1fr] gap-4">
          <div className="relative">
            <CharacterInfos character={character} />
          </div>

          <Separator orientation="vertical" />

          <CombosList characterID={character.id} />
        </Section>
      </main>
    );
  } catch (error) {
    console.error("Error rendering character page:", error);
    return <div>Error loading character data. Please try again later.</div>;
  }
};

export default Character;
