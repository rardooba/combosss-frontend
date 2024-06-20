/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from "react";
import { CharacterCard } from "@/app/atoms/_components/CharacterCard";
import { Section } from "@/app/atoms/_components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchAPI } from "@/lib/utils";

type Character = {
  characterID: number;
  name: string;
  avatar: string;
};

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("http://localhost:3010/api/characters");
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);
  return (
    <Section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.characterID}
          id={character.characterID}
          name={character.name}
          src={character.avatar}
        />
      ))}

      {/* <CharacterCard name="A.K.I" src="./assets/characters/aki.png"/>
      <CharacterCard name="Akuma" src="./assets/characters/akuma.png"/>
      <CharacterCard name="Cammy" src="./assets/characters/cammy.png"/>
      <CharacterCard name="Dee Jay" src="./assets/characters/deejay.png"/>
      <CharacterCard name="Ed" src="./assets/characters/ed.png"/>
      <CharacterCard name="JP" src="./assets/characters/jp.png"/>
      <CharacterCard name="Lily" src="./assets/characters/lily.png"/>
      <CharacterCard name="Manon" src="./assets/characters/manon.png"/>
      <CharacterCard name="Marisa" src="./assets/characters/marisa.png"/>
      <CharacterCard name="M.Bison" src="./assets/characters/mbison.png"/>
      <CharacterCard name="Rashid" src="./assets/characters/rashid.png"/>
      <CharacterCard name="Zangief" src="./assets/characters/zangief.png"/>
      <CharacterCard name="Ken" src="./assets/characters/ken.png"/>
      <CharacterCard name="E.Honda" src="./assets/characters/ehonda.png"/>
      <CharacterCard name="Dhalsim" src="./assets/characters/dhalsim.png"/>
      <CharacterCard name="Blanka" src="./assets/characters/blanka.png"/>
      <CharacterCard name="Chun-li" src="./assets/characters/chunli.png"/>
      <CharacterCard name="Guile" src="./assets/characters/guile.png"/>
      <CharacterCard name="Jamie" src="./assets/characters/jamie.png"/>
      <CharacterCard name="Juri" src="./assets/characters/juri.png"/>
      <CharacterCard name="Kimberly" src="./assets/characters/kimberly.png"/>
      <CharacterCard name="Luke" src="./assets/characters/luke.png"/>
      <CharacterCard name="Ryu" src="./assets/characters/ryu.png"/> */}
     
      
    </Section>
  );
};
