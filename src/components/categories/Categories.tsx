import { Datum, Inominiees } from '@/interface'
import React, { useContext, useEffect } from 'react'
import { Container, ContainerCategoryNomini, GridNominiees, TextNominiees, TextTitle, FloatButton, TextVote } from './CategoriesStyle';
import { Nominiees } from '../nominiees/Nominiees';
import { NominateContext } from '../../context/NominateContext';



interface Props {
    nominiess: Inominiees
}



export const Categories = ({ nominiess }: Props) => {
    const { onSubmit } = useContext(NominateContext)

    const { data } = nominiess


    return (
        <Container suppressHydrationWarning>
            <TextTitle>Awards 2021</TextTitle>
            {
                data.map((nominee: Datum) => {
                    return (
                        <>
                            <TextNominiees>{nominee.title}</TextNominiees>
                            <ContainerCategoryNomini>
                                {
                                    nominee.items.map((n) => {
                                        // console.log(nominiee)
                                        return (
                                            <GridNominiees
                                            >
                                                <Nominiees
                                                    key={n.id}
                                                    nominiee={n}
                                                    nominateTo={nominee.title}
                                                />
                                            </GridNominiees>

                                        )
                                    })
                                }
                            </ContainerCategoryNomini>
                        </>
                    )
                })
            }

            <FloatButton
                onClick={() => onSubmit()}
            >
                <TextVote>vote</TextVote>
            </FloatButton>

        </Container>
    )
}
