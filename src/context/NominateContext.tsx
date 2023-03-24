import { createContext } from 'react';

export interface NominateCdasasdontextProps {
    nominations: {
        Best_Picture: string,
        Best_Director: string,
        Best_Actor: string,
        Best_Actress: string,
        Best_Supporting_Actor: string,
        Best_Supporting_Actress: string,
        Best_Visual_Effects: string,
    },
    showModal: boolean

    handleState: (nomination: string, actionToNominate: string) => void
    onSubmit: () => boolean

}

export const NominateContext = createContext({} as NominateCdasasdontextProps);
