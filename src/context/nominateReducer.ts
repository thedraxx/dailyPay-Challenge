import { NominateState } from "./";

type NominateActionType =
  | { type: "[Ui] - handleNominate"; payload: any }
  | { type: "[Ui] - showModal"; payload: boolean };

export const nominateReducer = (
  state: NominateState,
  action: NominateActionType
): NominateState => {
  switch (action.type) {
    case "[Ui] - handleNominate":
      return {
        ...state,
        nominations: {
          ...state.nominations,
          [(state.nominations.Best_Actor = action.payload.nomination)]:
            action.payload.actionToNominate,
        },
      };

    case "[Ui] - showModal":
      return {
        ...state,
        showModal: action.payload,
      };

    default:
      return state;
  }
};
