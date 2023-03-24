import { useReducer } from 'react';
import { NominateContext, nominateReducer } from '.';

export interface NominateState {
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
}

const Nominate_INITIAL_STATE: NominateState = {
    nominations: {
        Best_Picture: "",
        Best_Director: "",
        Best_Actor: "",
        Best_Actress: "",
        Best_Supporting_Actor: "",
        Best_Supporting_Actress: "",
        Best_Visual_Effects: "",
    },
    showModal: false
};

interface Props {
    children: React.ReactNode;
}

export const NominateProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(nominateReducer, Nominate_INITIAL_STATE)

    const handleState = (nomination: string, actionToNominate: string) => {
        dispatch({
            type: "[Ui] - handleNominate",
            payload: {
                nomination,
                actionToNominate
            }
        })
    }

    const onSubmit = () => {
        if (state.nominations.Best_Actor !== "" && state.nominations.Best_Actress !== "" && state.nominations.Best_Director !== "" && state.nominations.Best_Picture !== "" && state.nominations.Best_Supporting_Actor !== "" && state.nominations.Best_Supporting_Actress !== "" && state.nominations.Best_Visual_Effects !== "") {

            console.log(state.nominations)
            dispatch({
                type: "[Ui] - showModal",
                payload: true
            })

            setTimeout(() => {
                dispatch({
                    type: "[Ui] - showModal",
                    payload: false
                })
            }, 3000);

            return false;
        }
        else {
            console.log('no se subio')
            dispatch({
                type: "[Ui] - showModal",
                payload: false
            })
            return false;
        }
    }

    return (
        <NominateContext.Provider value={{
            ...state,
            handleState,
            onSubmit,
        }}>
            {children}
        </NominateContext.Provider>
    )
}