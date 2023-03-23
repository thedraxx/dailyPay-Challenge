import React, { useContext } from 'react'
import { Item } from '../../interface/';
import { Button, ContainerNominiees, TextMovie } from './NominieesStyle';
import Image from 'next/image';
import { NominateContext } from '@/context';

interface Props {
    nominiee: Item,
    nominateTo: string
}



export const Nominiees = ({ nominiee, nominateTo }: Props) => {
    const { handleState } = useContext(NominateContext)
    const { title, photoUrL } = nominiee;

    const nominations_ = nominateTo.replace(/\s/g, "_")


    return (
        <ContainerNominiees>
            <TextMovie>
                {title}

            </TextMovie>
            <Image
                src={photoUrL}
                alt="Picture of the author"
                width={300}
                height={350}
            />

            <Button
                onClick={() => handleState(nominations_, title)}
            >
                Vote
            </Button>

        </ContainerNominiees >
    )
}
