import { type Datum, type Inominiees } from '@/interface'
import React, { useContext } from 'react'
import { Container, ContainerCategoryNomini, GridNominiees, TextNominiees, TextTitle, FloatButton, TextVote, ModalAlert, ContainerAlert, TextAlert, TextAlertNominations, TextMoviesSelected } from './CategoriesStyle'
import { Nominiees } from '../nominiees/Nominiees'
import { NominateContext } from '../../context/NominateContext'

interface Props {
    nominiess: Inominiees
}

export const Categories = ({ nominiess }: Props) => {
    const { onSubmit, showModal, nominations } = useContext(NominateContext)

    const { data } = nominiess

    return (
        <Container suppressHydrationWarning>
            {
                showModal && (
                    <ModalAlert>
                        <ContainerAlert>
                            <TextAlert>Thank you for your vote</TextAlert>
                            <TextAlertNominations>Best Picture: <TextMoviesSelected>{nominations.Best_Picture}</TextMoviesSelected></TextAlertNominations>
                            <TextAlertNominations>Best Director: <TextMoviesSelected>{nominations.Best_Director}</TextMoviesSelected></TextAlertNominations>
                            <TextAlertNominations>Best Actor: <TextMoviesSelected>{nominations.Best_Actor}</TextMoviesSelected></TextAlertNominations>
                            <TextAlertNominations>Best Actress: <TextMoviesSelected>{nominations.Best_Actress}</TextMoviesSelected></TextAlertNominations>
                            <TextAlertNominations>Best Supporting Actor:<TextMoviesSelected>{nominations.Best_Supporting_Actor}</TextMoviesSelected> </TextAlertNominations>
                            <TextAlertNominations>Best Supporting Actress: <TextMoviesSelected>{nominations.Best_Supporting_Actress}</TextMoviesSelected></TextAlertNominations>
                            <TextAlertNominations>Best Visual Effects: <TextMoviesSelected>{nominations.Best_Visual_Effects}</TextMoviesSelected></TextAlertNominations>
                        </ContainerAlert>


                    </ModalAlert>
                )
            }

            <TextTitle>Awards 2021</TextTitle>
            {
                data.map((nominee: Datum) => {
                    return (
                        <div key={nominee.id}>
                            <TextNominiees>{nominee.title}</TextNominiees>
                            <ContainerCategoryNomini>
                                {
                                    nominee.items.map((n) => {
                                        // console.log(nominiee)
                                        return (
                                            <GridNominiees
                                                key={n.id}
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
                        </div>
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
